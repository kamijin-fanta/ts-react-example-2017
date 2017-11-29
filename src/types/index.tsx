export interface StoreState {
  enthusiasm: EnthusiasmState;
  todo: TodoState;
}

export interface EnthusiasmState {
  languageName: string;
  enthusiasmLevel: number;
}

export interface TodoState {
  todos: string[];
  page: number;
  matches: number;
}
