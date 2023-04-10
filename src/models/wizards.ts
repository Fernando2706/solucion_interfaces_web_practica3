export interface WizardsResponse {
    elixirs:   Elixir[];
    id:        string;
    firstName: null | string;
    lastName:  string;
}

export interface Elixir {
    id:   string;
    name: string;
}
