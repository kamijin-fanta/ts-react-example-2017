export interface StoreState {
  enthusiasm: EnthusiasmState;
  todo: TodoState;
}

export interface EnthusiasmState {
  languageName: string;
  enthusiasmLevel: number;
  loading: boolean;
}

export interface TodoState {
  todos: string[];
  matches: number;
}
