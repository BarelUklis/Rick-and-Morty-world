import { Box, Card, Divider, Typography } from "@mui/material";
import { ICharacter } from "../../store/rick-and-morty-store/rick-and-morty.interface";
import rootStore from "../../store/root-store";

const CharacterCard = ({ character }: { character: ICharacter }) => {
  const { rickAndMortyStore } = rootStore;
  return (
    <Card
      sx={{
        maxWidth: 250,
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        cursor: 'pointer',
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
          transform: 'scale(1.01)'
        }
      }}
      onClick={() => rickAndMortyStore.handleCharacterModal(character)}
    >
      <img src={character.image} alt={character.name} />
      <Box>
        <Typography variant="h5" align="center" sx={{ height: 60, display: "flex", flexDirection: "column", justifyContent: "center" }}>{character.name}</Typography>
        <Divider sx={{ width: "90%", margin: "auto", mt: 1 }} />
      </Box>
      <Box sx={{ p: 1, display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography variant="body1"><b>Species: </b>{character.species}</Typography>
        <Typography variant="body1"><b>Gender: </b>{character.gender}</Typography>
        <Typography variant="body1"><b>Status: </b>{character.status}</Typography>
        <Typography variant="body1"><b>Origin: </b>{character.origin.name}</Typography>
      </Box>
    </Card >
  )
};

export default CharacterCard;