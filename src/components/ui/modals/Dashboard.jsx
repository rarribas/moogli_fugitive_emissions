import { PageHeader } from "../PageHeader";
import { headerColumns } from "@/components/TableConfiguration";
import DataTable from "../DataTable";
import { useContext } from "react";
import TableDataContext from "@/context/mainTableDataContext";

export default function Dashboard(){
  const {tableData} = useContext(TableDataContext);
  return(
    <>
      <PageHeader/>
      <DataTable columns={headerColumns} data={tableData}/>
    </>
  )
}