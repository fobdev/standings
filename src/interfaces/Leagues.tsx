// usado em [ENDPOINT] /leagues/

export interface Leagues {
    status: boolean;
    data: LeaguesData[];
}

export interface LeaguesData {
    id: string;
    name: string;
    slug: string;
    abbr: string;
    logos: LeaguesLogos;
}

export interface LeaguesLogos {
    light: string;
    dark: string;
}
