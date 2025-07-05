import { PageHeader } from "../PageHeader";
import { headerColumns } from "@/components/TableConfiguration";
import DataTable from "../DataTable";
import { useContext } from "react";
import Panel from "../Panel";
import TableDataContext from "@/context/mainTableDataContext";

export default function Dashboard(){
  const {tableData} = useContext(TableDataContext);
  return(
    <>
      <PageHeader/>
      <Panel>
        <DataTable columns={headerColumns} data={tableData}/>
      </Panel>
    </>
  )
}