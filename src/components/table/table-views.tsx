import CardContainer from "../character-card/character-card-container"
import NotFound from "../not-found/not-found"
import CustomeTable from "./table-components/table-body"
import TableControlBar from "./table-controls/table-control-bar"
import rootStore from "../../store/root-store"
import { observer } from "mobx-react-lite"

const ViewsControl = observer(() => {
  const { rickAndMortyStore } = rootStore;
  return (
    <>
      <TableControlBar />
      {rickAndMortyStore.notFound && <NotFound />}
      {rickAndMortyStore.viewMode === 'card' && <CardContainer />}
      {rickAndMortyStore.viewMode === 'table' && <CustomeTable />}
    </>
  )
});

export default ViewsControl;