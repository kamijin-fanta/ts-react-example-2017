# ts-react-example-2017

## requirements

- nodejs
- yarn


## develop

```
$ yarn install

$ yarn start  # devserver
$ yarn run s2s  # codegenerator
$ yarn run test  # jest
$ yarn run storybook  # storybook
$ yarn run tslint
```


## 構成

- src
  - components:
    - *componentGroupName*: グループ毎にディレクトリを切る
      - *componentName.tsx*: Presentational Componentを格納
  - containers: Container Componentを格納
    - *containerName*
      - actionTypes.tsx: Actionの型とインターフェイスを定義　一部をs2sで自動生成
      - actions.tsx: ActionCreatorを定義　s2sで自動生成
      - reducer.tsx: Reducerを定義
      - epic.tsx: ReduxObservableのepicを定義
      - index.tsx: Presentational ComponentとStore・Dispacherを紐付ける
    - action.tsx: コンテナ内のActionのUNIONを定義　s2sで自動生成
  - routes
    - index.tsx: ルーティングの情報を格納　一部をs2sで自動生成
  - stories: Storybookを定義
  - types:
    - index.tsx: ストアの型などを定義
    - *packagename*: 補助的な型を格納
  - plugins: s2sのbabelプラグインを格納
  - action.tsx: コンテナとライブラリ等のActionのUNIONを定義
  - reducer.tsx: コンテナ内のReducerのUNIONを定義
- config-overrides.js: react-scripts-tsの設定を変更するreact-app-rewiredの設定ファイル
- s2s.config.js: s2sの設定ファイル
- public: html等
