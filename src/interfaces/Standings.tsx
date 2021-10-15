// usado em [ENDPOINT] /leagues/{id}/standings

export interface Standings {
    status: boolean;
    data: StandingsData;
}

export interface StandingsData {
    name: string;
    abbreviation: string;
    seasonDisplay: string;
    seasons: number;
    standings: [];
}
