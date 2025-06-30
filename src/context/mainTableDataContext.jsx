import { createContext, useState } from "react";
import { data } from "@/components/TableConfiguration";

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
      // Remove placeholder
      const withoutPlaceholder = tdata.periodic_reviews.filter(review => !review.isPlaceholder);
      return {
          ...tdata,
          periodic_reviews: [...withoutPlaceholder, reviewToAdd],
        }
      }
      return tdata
    })

    setTableData(newEmissions);
  }

  const cleanPlaceholders = (reviewToClean) => {
    const newEmissions = tableData.map((tdata) => {
      if (tdata.id === reviewToClean.id) {
        // Remove placeholder
        const withoutPlaceholder = tdata.periodic_reviews.filter(review => !review.isPlaceholder);
        return {
          ...tdata,
          periodic_reviews: [...withoutPlaceholder],
        }
      }
      return tdata
    })

    setTableData(newEmissions);
  } 

  const addPeriodicReviewPlaceholder = (activeEmission) => {
    const placeholder = {
      parentId: activeEmission.id,
      date_review: "",
      report: "",
      isPlaceholder: true,
    }

    const newEmissions = tableData.map((tdata) => {
    if (tdata.id === activeEmission.id) {
        return {
          ...tdata,
          periodic_reviews: [...(tdata.periodic_reviews || []), placeholder],
        }
      }
      return tdata
    })

    setTableData(newEmissions);
  }

  const valueToShare = {
    tableData,
    editTableData,
    deletePeriodicReview,
    addPeriodicReview,
    addPeriodicReviewPlaceholder,
    cleanPlaceholders
  }

  return (
    <TableDataContext.Provider value={valueToShare}>
      {children}
    </TableDataContext.Provider>
  )

}

export {Provider as TableDataProvider};
export default TableDataContext;