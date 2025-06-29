import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "../ui/button";
import { useContext, useState } from "react";
import DataTable from "../DataTable";
import { periodicReviewsHeader } from "@/data/mockedTableData";
import TableDataContext from "@/context/mainTableDataContext";

export default function AddModal({activeRow}) {
  const {cleanPlaceholders, addPeriodicReviewPlaceholder} = useContext(TableDataContext);
  const [isOpen, setIsOpen] = useState(false);
  
  const handleDialogChange = (open) => {
    setIsOpen(open);
    if (!open) {
      cleanPlaceholders(activeRow);
    }
  };

  const onAddPeriodicReviewClicked = (ev) => {
    ev.preventDefault();
    addPeriodicReviewPlaceholder(activeRow);
  }

  return(
    <Dialog open={isOpen} onOpenChange={handleDialogChange}>
      <DialogTrigger asChild>
        <Button variant="outline">Add</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Periodic Reviews</DialogTitle>
          <div>
            <DataTable columns={periodicReviewsHeader} data={activeRow?.periodic_reviews}/>
            <Button onClick={onAddPeriodicReviewClicked}>Add Periodic Reviews</Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}