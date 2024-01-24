import { IPromiseResponse } from "../../services/rest-api.interface";
import RestApi from "../../services/rest-api.service";
import { IApiCharactersResponse, IApiEpisodesResponse, IEpisode, IFiltersForCharacters } from "./rick-and-morty.interface";

export class RickAndMortyApi extends RestApi {
  constructor() {
    super("https://rickandmortyapi.com/api/");
  }

  getCharacters(page: number): IPromiseResponse<IApiCharactersResponse> {
    return this.get(`character/?page=${page}`);
  }

  getCharactersWithFilters(filters: IFiltersForCharacters, page: number): IPromiseResponse<IApiCharactersResponse> {
    return this.get(`character/?page=${page}
    ${filters?.name ? `&name=${filters.name}` : ""}
    ${filters?.status ? `&status=${filters.status}` : ""}
    ${filters?.gender ? `&gender=${filters.gender}` : ""}
    `);
  }

  getEpisodeById(id: string): IPromiseResponse<IEpisode> {
    return this.get(`episode/${id}`);
  }

  getAllEpisodes(page?: string): IPromiseResponse<IApiEpisodesResponse> {
    return this.get(`episode/?page=${page}`);
  }
}