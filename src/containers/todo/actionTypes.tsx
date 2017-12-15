export type Action = FetchTodo | ResponseTodo | ChangePage;

export interface FetchTodo {
  type: Actions.FetchTodo;
  page: number;
}
export interface ResponseTodo {
  type: Actions.ResponseTodo;
  payload: string[];
  matches: number;
}
export interface ChangePage {
  type: Actions.ChangePage;
}

/***** Do not edit below this line *****/
export const enum Actions {
  FetchTodo = 'containers/todo/FetchTodo',
  ResponseTodo = 'containers/todo/ResponseTodo',
  ChangePage = 'containers/todo/ChangePage',
}
