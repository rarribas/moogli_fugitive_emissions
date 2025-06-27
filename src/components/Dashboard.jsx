import { PageHeader } from "./PageHeader";
import { headerColumns, data} from "@/data/mockedTableData";
import DataTable from "./DataTable";
import { useContext } from "react";
import TableDataContext from "@/context/MainTableDataContext";

export default function Dashboard(){
  const tableDataContext = useContext(TableDataContext);
  return(
    <>
      <PageHeader title="Fugitive Emissions" descp="Fugitive emissions represent a significant proportion of anthropogenic greenhouse gas emissions and their assessment, let alone reduction, is still in its infancy."/>
      <DataTable columns={headerColumns} data={tableDataContext.tableData}/>
    </>
  )
}