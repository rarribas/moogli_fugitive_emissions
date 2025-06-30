import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog"
import { Button } from "../Button";

export default function EditModal({editableRow}) {
  return(
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit</Button>
      </DialogTrigger>
      <DialogContent 
        variant="side_panel"
      >
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