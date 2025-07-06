import { PageHeader } from "../PageHeader";
import { headerColumns } from "@/components/TableConfiguration";
import DataTable from "../DataTable";
import Header from "../Header";
import { useContext } from "react";
import Panel from "../Panel";
import { Button } from "../Button";
import TableDataContext from "@/context/mainTableDataContext";
import {Plus} from "lucide-react";

export default function Dashboard(){
  const {tableData} = useContext(TableDataContext);
  return(
    <>
      <PageHeader/>
      <Panel>
        <Header className="p-4">
          <p className="text-sm text-primary font-medium">Learn More</p>
          <Button disabled={true}>
            <Plus/>
            Add Equipment
          </Button>
        </Header>
        <DataTable columns={headerColumns} data={tableData}/>
      </Panel>
    </>
  )
}