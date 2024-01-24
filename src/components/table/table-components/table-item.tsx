import { Avatar, TableCell, TableRow } from "@mui/material";
import { ICharacter } from "../../../store/rick-and-morty-store/rick-and-morty.interface";

const TableItem = ({ character }: { character: ICharacter }) => (
  <TableRow
    hover
    tabIndex={-1}
    key={character.id}
    sx={{ cursor: 'pointer' }}
  >
    <TableCell align="left">
      <Avatar alt={character.name} src={character.image} />
    </TableCell>
    <TableCell align="left">{character.name}</TableCell>
    <TableCell align="left">{character.origin.name}</TableCell>
    <TableCell align="left">{character.status}</TableCell>
    <TableCell align="left">{character.species}</TableCell>
    <TableCell align="left">{character.gender}</TableCell>
  </TableRow>
);

export default TableItem;