import { makeAutoObservable } from "mobx";
import { IRootStore } from "../root-store";
import { RickAndMortyApi } from "./rick-and-morty.api";
import { ICharacter, IFiltersForCharacters } from "./rick-and-morty.interface";

class RickAndMortyStore {
  #rootStore: IRootStore;
  #rickAndMortyApi: RickAndMortyApi;

  numberOfItemsPerPage: number = 20;
  numberOfPages: number = 0;
  currentPage: number = 1;

  characters: ICharacter[] = [];

  order: "asc" | "desc" = "asc";
  orderBy: string = "id";
  filters: IFiltersForCharacters = {
    name: "",
    status: "",
    gender: "",
  };

  constructor(rootStore: IRootStore) {
    makeAutoObservable(this);
    this.#rootStore = rootStore;
    this.#rickAndMortyApi = new RickAndMortyApi();
  }

  setNumberOfPages(numberOfPages: number) {
    if (numberOfPages !== this.numberOfPages) {
      this.numberOfPages = numberOfPages;
    }
  }

  setPage(page: number) {
    this.currentPage = page;
    this.getCharacters();
  }

  handleSortRequest = (property: string) => {
    const isAsc = this.orderBy === property && this.order === 'asc';
    this.order = isAsc ? 'desc' : 'asc';
    this.orderBy = property;
    this.characters = this.characters.sort((a, b) => {
      if (property === "origin") {
        if (isAsc) {
          return a.origin.name > b.origin.name ? 1 : -1;
        } else {
          return a.origin.name < b.origin.name ? 1 : -1;
        }
      } else {
        if (isAsc) {
          return a[property as keyof ICharacter] > b[property as keyof ICharacter] ? 1 : -1;
        } else {
          return a[property as keyof ICharacter] < b[property as keyof ICharacter] ? 1 : -1;
        }
      }
    });
  }

  async getCharacters() {
    return this.#rickAndMortyApi.getCharacters(this.currentPage)
      .then((res) => {
        this.characters = res.data?.results as ICharacter[];
        this.setNumberOfPages(res.data?.info?.pages as number);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  async getFilteredCharacters(filters: IFiltersForCharacters) {
    return this.#rickAndMortyApi.getCharactersWithFilters(filters)
      .then((res) => {
        this.filters = { ...filters };
        this.characters = res.data?.results as ICharacter[];
        this.currentPage = 1;
        this.setNumberOfPages(res.data?.info?.pages as number);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

export default RickAndMortyStore;