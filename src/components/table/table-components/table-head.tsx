import { Box, TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import { HeadCell, tableHeads } from "../table.interface";
import rootStore from "../../../store/root-store";
import { observer } from "mobx-react-lite";

const headCells: HeadCell[] = tableHeads.map((head) => ({
  id: head.name,
  label: head.label,
  sortable: head.sortable,
  filterable: head.filterable,
}));

const TableHeadComponent = observer(() => {
  const { rickAndMortyStore } = rootStore;
  const { order, orderBy } = rickAndMortyStore;
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="left"
            padding="normal"
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {headCell.sortable === false ? (
              headCell.label
            ) : (
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={() => rickAndMortyStore.handleSortRequest(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === "desc" ? "sorted descending" : "sorted ascending"}
                  </Box>
                ) : null}
              </TableSortLabel>
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
});

export default TableHeadComponent;