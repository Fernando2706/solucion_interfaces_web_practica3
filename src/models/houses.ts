export interface HousesResponse {
    id:           string;
    name:         string;
    houseColours: string;
    founder:      string;
    animal:       string;
    element:      string;
    ghost:        string;
    commonRoom:   string;
    heads:        Head[];
    traits:       Trait[];
}

export interface Head {
    id:        string;
    firstName: string;
    lastName:  string;
}

export interface Trait {
    id:   string;
    name: string;
}
