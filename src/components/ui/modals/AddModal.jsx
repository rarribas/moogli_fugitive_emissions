import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog"
import { Button } from "../Button";
import { useContext, useState } from "react";
import DataTable from "../DataTable";
import { periodicReviewsHeader } from "@/components/TableConfiguration";
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
      <DialogContent aria-describedby="Add Modal Content">
        <DialogHeader>
          <DialogTitle>Add Periodic Reviews</DialogTitle>
          <DialogDescription asChild>
            <div>
              <DataTable columns={periodicReviewsHeader} data={activeRow?.periodic_reviews}/>
              <Button onClick={onAddPeriodicReviewClicked}>Add Periodic Reviews</Button>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}