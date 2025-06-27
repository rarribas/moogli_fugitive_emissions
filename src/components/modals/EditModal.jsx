import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "../ui/button";

export default function EditModal({editableRow}) {
  console.log(editableRow);
  return(
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Periodic Reviews</DialogTitle>
          <DialogDescription>
            [TODO]: Edit {editableRow.equipment}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}