import { useEffect } from "react";
import TableContainerComponent from "../components/table/table-container";
import rootStore from "../store/root-store";
import "./home.scss";

const HomePage = () => {
  const { rickAndMortyStore } = rootStore;
  useEffect(() => {
    rickAndMortyStore.getCharacters();
  });
  return (
    <div>
      <TableContainerComponent />
    </div>
  )
};

export default HomePage;