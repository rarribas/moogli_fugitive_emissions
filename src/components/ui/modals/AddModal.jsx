import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/Dialog"
import { Button } from "../Button";
import { useContext, useState } from "react";
import DataTable from "../DataTable";
import { periodicReviewsHeader } from "@/components/TableConfiguration";
import TableDataContext from "@/context/mainTableDataContext";

export default function AddModal({activeRow}) {
  const {cleanPlaceholders, addPeriodicReviewPlaceholder, hasPlaceHolder} = useContext(TableDataContext);
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
        <Button>Add data</Button>
      </DialogTrigger>
      <DialogContent aria-describedby="Add Modal Content">
        <DialogHeader>
          <DialogTitle>Add Periodic Reviews</DialogTitle>
          <DialogDescription asChild>
            <div>
              <DataTable columns={periodicReviewsHeader} data={activeRow?.periodic_reviews}/>
              <Button onClick={onAddPeriodicReviewClicked} disabled={hasPlaceHolder}>Add Periodic Reviews</Button>
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          {/* Note: Not entirely sure if the "Save" button is needed here —
          clicking "Submit" already updates the data.
          Maybe it’ll make more sense once we hook this up to a real API, 
          instead of just working with mock data*/}
          <Button onClick={() => setIsOpen(false)}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}