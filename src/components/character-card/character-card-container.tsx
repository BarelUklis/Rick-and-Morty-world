import { Box } from "@mui/material"
import rootStore from "../../store/root-store";
import { observer } from "mobx-react-lite";
import CharacterCard from "./character-card";
import { ICharacter } from "../../store/rick-and-morty-store/rick-and-morty.interface";

const CardContainer = observer(() => {
  const { rickAndMortyStore } = rootStore;
  return (
    <Box sx={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: 2,
      p: 2
    }}>
      {rickAndMortyStore.characters.map((character: ICharacter) => <CharacterCard key={character.id} character={character} />)}
    </Box>
  )
});

export default CardContainer;