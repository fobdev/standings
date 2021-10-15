import { Standings } from "../interfaces";
import { Api } from "../providers";

/**
 * GET request da API no ENDPOINT /leagues/{id}}/standings sendo utilizado no getAll
 */
const getAll = () => Api.get<Standings>("/leagues/arg.1/standings");

export const StandingsService = {
    getAll,
};