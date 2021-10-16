import { Standings } from "../interfaces";
import { Api } from "../providers";

/**
 * GET request da API no ENDPOINT /leagues/{id}}/standings sendo utilizado no getAll
 */
const getAll = (id: string, season: number) =>
    Api.get<Standings>(`/leagues/${id}/standings?season=${season}`);

export const StandingsService = {
    getAll,
};
