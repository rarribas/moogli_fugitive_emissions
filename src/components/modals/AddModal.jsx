import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "../ui/button";
import { useState } from "react";
import DataTable from "../DataTable";
import { periodicReviewsHeader } from "@/data/mockedTableData";

export default function AddModal({activeRow}) {
  const [tableData, setTableDate] = useState(activeRow?.periodic_reviews);
  
  const onAddPeriodicReviewClicked = (ev) => {
    ev.preventDefault();
    const addPlaceholder = {
      date_review: "",
      report: "",
      isPlaceholder: true,
    }
    
    setTableDate([
      ...activeRow.periodic_reviews,
      addPlaceholder
    ])
  }

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