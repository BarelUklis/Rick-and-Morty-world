import { Box, Divider, Modal, Typography } from "@mui/material";
import rootStore from "../../store/root-store";
import { observer } from "mobx-react-lite";
import { modalImgStyle, modalInnerStyle, modalStyle } from "./modal-style";
import { ISelectedCharacter } from "../../store/rick-and-morty-store/rick-and-morty.interface";

const CharacterModal = observer(() => {
  const { rickAndMortyStore } = rootStore;
  const selectedCharacter: ISelectedCharacter = rickAndMortyStore.selectedModalCharacter;
  const { character, firstAppearance, lastAppearance } = selectedCharacter;
  return (
    <Modal
      open={rickAndMortyStore.openCharacterModal}
      onClose={() => rickAndMortyStore.handleCharacterModal(null)}
      aria-labelledby="character-modal-title"
      aria-describedby="character-modal-description"
      sx={modalStyle}
    >
      <Box sx={modalInnerStyle}>
        <img src={character.image} alt={character.name} style={modalImgStyle} />
        <Box sx={{ display: 'flex', flexDirection: 'column', p: 2, gap: 1 }}>
          <Box>
            <Typography variant="h4">{character.name}</Typography>
          </Box>
          <Divider />
          <Box>
            <Typography variant="h6">First Appearance</Typography>
            <Typography variant="body1">
              {firstAppearance.episode} - {firstAppearance.name}
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6">Last Appearance</Typography>
            <Typography variant="body1">
              {lastAppearance.episode} - {lastAppearance.name}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Modal>
  )
});

export default CharacterModal;