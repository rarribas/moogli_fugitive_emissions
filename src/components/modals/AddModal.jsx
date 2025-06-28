import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "../ui/button";
import { useState, useEffect } from "react";
import DataTable from "../DataTable";
import { periodicReviewsHeader } from "@/data/mockedTableData";

export default function AddModal({activeRow}) {
  // console.log("RE RENDERS", activeRow?.periodic_reviews);
  const [tableData, setTableData] = useState(activeRow?.periodic_reviews);
  
  useEffect(() => {
    console.log("USE EFFECT", activeRow?.periodic_reviews);
    setTableData(activeRow?.periodic_reviews)
  }, [activeRow, activeRow?.periodic_reviews])
  
  const onAddPeriodicReviewClicked = (ev) => {
    ev.preventDefault();
    const addPlaceholder = {
      parentId: activeRow.id,
      date_review: "",
      report: "",
      isPlaceholder: true,
    }
    
    setTableData([
      ...activeRow.periodic_reviews,
      addPlaceholder
    ])
  }

  // console.log(tableData, tableData.length, "??");

  return(
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Periodic Reviews</DialogTitle>
          <div>
            <DataTable columns={periodicReviewsHeader} data={tableData}/>
            <Button onClick={onAddPeriodicReviewClicked}>Add Periodic Reviews</Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}