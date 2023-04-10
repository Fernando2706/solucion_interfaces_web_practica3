export interface ElixirResponse {
    id:              string;
    name:            string;
    effect:          string;
    sideEffects:     string;
    characteristics: string;
    time:            string;
    difficulty:      string;
    ingredients:     Ingredient[];
    inventors:       Inventor[];
    manufacturer:    string;
}

export interface Inventor {
    id:        string;
    firstName: string;
    lastName:  string;
}

export interface Ingredient {
    id:        string;
    name: string;
}
