import CardContainer from "../character-card/character-card-container"
import NotFound from "../not-found/not-found"
import CustomeTable from "./table-components/table-body"
import rootStore from "../../store/root-store"
import { observer } from "mobx-react-lite"

const ViewsControl = observer(() => {
  const { rickAndMortyStore } = rootStore;
  const { notFound } = rickAndMortyStore;
  return (
    <>
      {notFound && <NotFound />}
      {!notFound && rickAndMortyStore.viewMode === 'card' && <CardContainer />}
      {!notFound && rickAndMortyStore.viewMode === 'table' && <CustomeTable />}
    </>
  )
});

export default ViewsControl;