import RickAndMortyStore from "./rick-and-morty-store/rick-and-morty.store";

export interface IRootStore {
  rickAndMortyStore: RickAndMortyStore;
}
class RootStore implements IRootStore {
  rickAndMortyStore: RickAndMortyStore;
  constructor() {
    this.rickAndMortyStore = new RickAndMortyStore();
  }
}

const rootStore = new RootStore();
export default rootStore;