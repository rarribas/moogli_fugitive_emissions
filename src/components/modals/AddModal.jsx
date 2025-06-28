import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "../ui/button";
import DataTable from "../DataTable";
import { periodicReviewsHeader } from "@/data/mockedTableData";

export default function AddModal({activeRow}) {
  return(
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Periodic Reviews</DialogTitle>
          <div>
            <DataTable columns={periodicReviewsHeader} data={activeRow.periodic_reviews}/>
            <Button onClick={() => console.log("ADD BUTTON CLICKED")}>Add Periodic Reviews</Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}