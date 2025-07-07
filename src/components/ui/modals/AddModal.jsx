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
import {Plus} from "lucide-react";
import Panel from "../Panel";
import Header from "../Header";

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
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Periodic Reviews</DialogTitle>
          <DialogDescription asChild>
            <Panel className="border mt-[18px] h-[400px] overflow-y-auto">
              <Header className="border-b">
                <h3 className="py-4 px-6">{activeRow.equipmentName}</h3>
              </Header>
              <DataTable 
                columns={periodicReviewsHeader} 
                data={activeRow?.periodic_reviews}
                className="border-b"
              />
              <div className="py-4 px-2">
                 <Button variant="outline" onClick={onAddPeriodicReviewClicked} disabled={hasPlaceHolder}>
                  <Plus/>
                  Add Periodic Reviews
                </Button>
              </div>
            </Panel>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="items-end justify-between">
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          {/* Note: Not entirely sure if the "Save" button is needed here —
          clicking "Submit" already updates the data.
          Maybe it’ll make more sense once we hook this up to a real API, 
          instead of just working with mock data*/}
          <Button disabled={true} onClick={() => setIsOpen(false)}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}