export interface StoreState {
  enthusiasm: EnthusiasmState;
  service: ServiceState;
}

export interface EnthusiasmState {
  languageName: string;
  enthusiasmLevel: number;
}

export interface ServiceState {
  username: string;
}
