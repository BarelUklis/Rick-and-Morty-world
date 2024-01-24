import { useEffect } from "react";
import TableContainerComponent from "../../components/table/table-container";
import rootStore from "../../store/root-store";

const HomePage = () => {
  const { rickAndMortyStore } = rootStore;
  useEffect(() => {
    rickAndMortyStore.getCharacters();
  });
  return <TableContainerComponent />
};

export default HomePage;