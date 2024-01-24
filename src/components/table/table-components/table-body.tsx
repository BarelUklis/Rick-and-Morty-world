import rootStore from "../../../store/root-store";
import { Table, TableBody, TableContainer } from "@mui/material";
import TableHeadComponent from "./table-head";
import { ICharacter } from "../../../store/rick-and-morty-store/rick-and-morty.interface";
import { observer } from "mobx-react-lite";
import TableItem from "./table-item";
import NotFound from "../../not-found/not-found";

const CustomeTable = observer(() => {
  const { rickAndMortyStore } = rootStore;
  return (
    <TableContainer>
      {rickAndMortyStore.notFound ? <NotFound /> : (
        <Table
          sx={{ minWidth: 750 }}
          aria-labelledby="rick-and-morty-table"
          size={'medium'}
        >
          <TableHeadComponent />
          <TableBody>
            {rickAndMortyStore.characters.map((character: ICharacter) => <TableItem key={character.id} character={character} />)}
          </TableBody>
        </Table>
      )}
    </TableContainer>
  );
});

export default CustomeTable;