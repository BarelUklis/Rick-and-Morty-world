import { makeAutoObservable } from "mobx";
import { IRootStore } from "../root-store";
import { RickAndMortyApi } from "./rick-and-morty.api";
import { ICharacter, IFilteredCharactersApiParams } from "./rick-and-morty.interface";

class RickAndMortyStore {
  #rootStore: IRootStore;
  #rickAndMortyApi: RickAndMortyApi;

  numberOfPages: number = 0;
  currentPage: number = 1;

  characters: ICharacter[] = [];

  constructor(rootStore: IRootStore) {
    makeAutoObservable(this);
    this.#rootStore = rootStore;
    this.#rickAndMortyApi = new RickAndMortyApi();
  }

  setNumberOfPages(numberOfPages: number) {
    this.numberOfPages = numberOfPages;
  }

  setPage(page: number) {
    this.currentPage = page;
  }

  async getCharacters(page: number) {
    return this.#rickAndMortyApi.getCharacters(page)
      .then((res) => {
        this.characters = res.data?.results as ICharacter[];
        this.setNumberOfPages(res.data?.info?.pages as number);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  async getFilteredCharacters(filters: IFilteredCharactersApiParams) {
    return this.#rickAndMortyApi.getCharactersWithFilters(filters)
      .then((res) => {
        this.characters = res.data?.results as ICharacter[];
        this.setNumberOfPages(res.data?.info?.pages as number);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

export default RickAndMortyStore;