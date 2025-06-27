import { createContext, useState } from "react";
import { data } from "@/data/mockedTableData";

const TableDataContext = createContext(null);

function Provider({children}){
  const [tableData, setTableData] = useState(data);

  const editTableData = (dataToEdit) => {
    // TODO - This needs to be implemented
    setTableData(dataToEdit);
  }

  const valueToShare = {
    tableData,
    editTableData
  }

  return (
    <TableDataContext.Provider value={valueToShare}>
      {children}
    </TableDataContext.Provider>
  )

}

export {Provider as TableDataProvider};
export default TableDataContext;