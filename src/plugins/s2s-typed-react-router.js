import syntaxTypeScript from '@babel/plugin-syntax-typescript';
import * as types from '@babel/types';
const pathToRegexp = require('path-to-regexp');

// ///// templates

const builders = {
  comments: () => ({
    type: 'CommentBlock',
    value: '**** Do not edit below this line ****',
  }),
};


function exportInterfaceDeclaration(name, fileds) {
  return types.ExportNamedDeclaration(
    types.TSInterfaceDeclaration(
      types.Identifier(name),
      undefined,
      undefined,
      types.TSInterfaceBody(fileds)
    ), []
  );
}
function porpsName(name) {
  return name + 'RouteProps';
}

export default (babel) => {
  return {
    inherits: syntaxTypeScript,
    name: 'babel-plugin-s2s-typed-react-router',
    visitor: {
      Program: {
        exit(programPath, state) {
          let urlList = [];

          // ///////////// collect & remove /////////////

          programPath.traverse({
            VariableDeclarator(path) {
              // collect routes urls
              if (path.node.id.name === 'Routes') {
                const properties = path.node.init.properties;
                const urlFiels = properties.map((p) => {
                  let urlNode = p.value.arguments[0].properties.find((d) => d.key.name === 'url');
                  return {
                    name: p.key.name,
                    url: urlNode ? urlNode.value.value : undefined,
                  };
                });
                urlList.push(...urlFiels);
              }
            },
            TSInterfaceDeclaration(path) { // Like: export interface Fuga {}
              if (types.isExportNamedDeclaration(path.parent)) {
                path.parentPath.remove();
              } else {
                path.remove();
              }
            },
          });

          // ///////////// code generate /////////////

          const paramsList = urlList.map(({name, url}) => ({
            name,
            url,
            params: pathToRegexp.parse(url).filter((p) => p.name),
          }));

          const interfacesAst = paramsList.map(({name, url, params}) => {
            let fileds = params.map((p) => {
              let sig = types.TSPropertySignature(
                types.Identifier(p.name),
                types.TSTypeAnnotation(types.TSStringKeyword())
              );
              sig.optional = p.optional;
              return sig;
            });
            return exportInterfaceDeclaration(porpsName(name), fileds);
          });

          const routesTypeFiledsAst = paramsList.map(({name, url, params}) => {
            // for babel@7.0.0-beta34 see https://github.com/babel/babel/pull/6939
            function TSTypeReference(id, params) {
              return {
                type: 'TSTypeReference',
                typeName: id,
                typeParameters: params,
              };
            }

            let paramPropsAst;
            const optionals = params.map((p)=>p.optional);
            if (!optionals.length) { // empty
              paramPropsAst = TSTypeReference(types.Identifier('EmptyParameterProps'));
            } else if (optionals.length && optionals.every((a) => a)) { // optional
              paramPropsAst = TSTypeReference(
                types.Identifier('OptionalParameterProps'),
                types.TSTypeParameterInstantiation([
                  types.TSTypeReference(types.Identifier(porpsName(name))),
                ])
              );
            } else { // required
              paramPropsAst = TSTypeReference(
                types.Identifier('ParameterProps'),
                types.TSTypeParameterInstantiation([
                  types.TSTypeReference(types.Identifier(porpsName(name))),
                ])
              );
            }

            return types.TSPropertySignature(
              types.Identifier(name),
              types.TSTypeAnnotation(TSTypeReference(
                types.Identifier('RoutePath'),
                types.TSTypeParameterInstantiation([
                  types.TSTypeReference(types.Identifier(porpsName(name))),
                  paramPropsAst,
                ])
              ))
            );
          });
          const routesTypeAst = exportInterfaceDeclaration('RoutesType', routesTypeFiledsAst);

          // add 'do not edit' comment
          routesTypeAst.leadingComments = [
            builders.comments(),
          ];

          // ///////////// output /////////////

          programPath.node.body = [...programPath.node.body, routesTypeAst, ...interfacesAst];
        },
      },
    },
  };
};
