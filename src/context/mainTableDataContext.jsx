import { createContext, useState } from "react";
import { data } from "@/data/mockedTableData";

const TableDataContext = createContext(null);

function Provider({children}){
  const [tableData, setTableData] = useState(data);

  const editTableData = (dataToEdit) => {
    // TODO - This needs to be implemented
    setTableData(dataToEdit);
  }

  const deletePeriodicReview = (reviewToDelete) => {
    const newEmissions = tableData.map((tdata) => {
      if(tdata.periodic_reviews){
        tdata.periodic_reviews = tdata.periodic_reviews.filter((pReview) => pReview.id !== reviewToDelete.id)
      }
      
      return tdata;
    });

    setTableData(newEmissions);
  }

  const addPeriodicReview = (reviewToAdd) => {
    const newEmissions = tableData.map((tdata) => {
    if (tdata.id === reviewToAdd.parentId) {
      return {
        ...tdata,
        periodic_reviews: [...(tdata.periodic_reviews || []), reviewToAdd],
      }
    }
    return tdata
  })

    console.log(newEmissions, "ADD!!!");

    setTableData(newEmissions);
  }

  const valueToShare = {
    tableData,
    editTableData,
    deletePeriodicReview,
    addPeriodicReview
  }

  return (
    <TableDataContext.Provider value={valueToShare}>
      {children}
    </TableDataContext.Provider>
  )

}

export {Provider as TableDataProvider};
export default TableDataContext;