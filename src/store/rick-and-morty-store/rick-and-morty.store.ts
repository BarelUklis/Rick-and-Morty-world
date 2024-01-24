import { makeAutoObservable } from "mobx";
import { RickAndMortyApi } from "./rick-and-morty.api";
import { IApiCharactersResponse, ICharacter, IEpisode, IFiltersForCharacters, ISelectedCharacter } from "./rick-and-morty.interface";
import { IRestApiResonse } from "../../services/rest-api.interface";

class RickAndMortyStore {
  #rickAndMortyApi: RickAndMortyApi;

  numberOfItemsPerPage: number = 20;
  numberOfPages: number = 0;
  currentPage: number = 1;

  characters: ICharacter[] = [];
  episodes: IEpisode[] = [];

  notFound: boolean = false;

  order: "asc" | "desc" = "asc";
  orderBy: string = "id";
  filters: IFiltersForCharacters = {
    name: "",
    status: "",
    gender: "",
  };

  openCharacterModal: boolean = false;
  selectedModalCharacter: ISelectedCharacter = {
    character: {} as ICharacter,
    firstAppearance: {
      episode: "",
      name: "",
    },
    lastAppearance: {
      episode: "",
      name: "",
    },
  }

  constructor() {
    makeAutoObservable(this);
    this.#rickAndMortyApi = new RickAndMortyApi();
  }

  setNumberOfPages(numberOfPages: number) {
    if (numberOfPages !== this.numberOfPages) {
      this.numberOfPages = numberOfPages;
    }
  }

  setPage(page: number) {
    this.currentPage = page;
    this.handlePageChanged();
  }

  setModalCharacter(character: ISelectedCharacter) {
    this.selectedModalCharacter = {
      character: character.character,
      firstAppearance: character.firstAppearance,
      lastAppearance: character.lastAppearance,
    }
  }

  handleSort(property: keyof ICharacter) {
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
          return a[property] > b[property] ? 1 : -1;
        } else {
          return a[property] < b[property] ? 1 : -1;
        }
      }
    });
  }

  handleCharacterSuccess(res: IRestApiResonse<IApiCharactersResponse>) {
    this.notFound = false;
    this.characters = res.data?.results as ICharacter[];
    this.setNumberOfPages(res.data?.info?.pages as number);
  }

  handleCharacterError() {
    this.notFound = true;
    this.characters = [];
    this.setNumberOfPages(0);
  }

  async getCharacters() {
    return this.#rickAndMortyApi.getCharacters(this.currentPage)
      .then((res) => this.handleCharacterSuccess(res))
      .catch((error) => {
        console.error(error);
        this.handleCharacterError();
      });
  }

  async getFilteredCharacters(filters: IFiltersForCharacters) {
    this.filters = { ...this.filters, ...filters };
    return this.#rickAndMortyApi.getCharactersWithFilters(this.filters, this.currentPage)
      .then((res) => this.handleCharacterSuccess(res))
      .catch((error) => {
        console.error(error);
        this.handleCharacterError();
      });
  }

  handlePageChanged() {
    const activeFilter = Object.values(this.filters).some((value) => !value);
    if (activeFilter) {
      this.getFilteredCharacters(this.filters);
      return;
    }
    this.getCharacters();
  }

  async clearFilters() {
    return this.#rickAndMortyApi.getCharacters(this.currentPage)
      .then((res) => {
        this.characters = res.data?.results as ICharacter[];
        this.currentPage = 1;
        this.setNumberOfPages(res.data?.info?.pages as number);
        this.filters = {
          name: "",
          status: "",
          gender: "",
        };
      })
      .catch((error) => {
        console.error(error);
      });
  }

  handleFilterChange(filters: IFiltersForCharacters) {
    this.currentPage = 1;
    this.getFilteredCharacters(filters);
  }

  async getEpisodeById(id: string) {
    return this.#rickAndMortyApi.getEpisodeById(id)
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  async handleCharacterModal(character: ICharacter | null) {
    if (character) {
      const firstEpisode = character.episode[0].split("/").pop();
      const lastEpisode = character.episode[character.episode.length - 1].split("/").pop();
      const firstEpisodeData = await this.getEpisodeById(firstEpisode as string);
      const lastEpisodeData = await this.getEpisodeById(lastEpisode as string);
      this.setModalCharacter({
        character: character,
        firstAppearance: {
          episode: firstEpisodeData?.episode as string,
          name: firstEpisodeData?.name as string,
        },
        lastAppearance: {
          episode: lastEpisodeData?.episode as string,
          name: lastEpisodeData?.name as string,
        },

      });
      this.openCharacterModal = true;
      return;
    }
    this.openCharacterModal = false;
    this.setModalCharacter({
      character: {} as ICharacter,
      firstAppearance: {
        episode: "",
        name: "",
      },
      lastAppearance: {
        episode: "",
        name: "",
      },
    });
  }

  async getAllEpisodes(page?: string) {
    return this.#rickAndMortyApi.getAllEpisodes(page)
      .then((res) => {
        this.episodes = [...this.episodes, ...res.data?.results as IEpisode[]];
        if (res.data?.info?.next) {
          this.getAllEpisodes(res.data?.info?.next.split("=").pop());
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  clearEpisodes() {
    this.episodes = [];
  }
}

export default RickAndMortyStore;