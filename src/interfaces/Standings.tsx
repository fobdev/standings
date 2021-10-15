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
    standings: StandingsResponse[];
}

export interface StandingsResponse {
    team: StandingsTeam;
    note: StandingsNote;
    stats: StandingsStats[];
}

export interface StandingsTeam {
    id: string;
    uid: string;
    location: string;
    name: string;
    abbreviation: string;
    displayName: string;
    shortDisplayName: string;
    isActive: boolean;
    logos: StandingsTeamLogos[];
}

export interface StandingsTeamLogos {
    href: string;
    width: number;
    height: number;
    alt: string;
    rel: string[];
    lastUpdate: string;
}

export interface StandingsNote {
    color: string;
    description: string;
    rank: number;
}

export interface StandingsStats {
    type: string;
    name: string;
    displayName: string;
    shortDisplayName: string;
    description: string;
    value: number;
    displayValue: string;
}
