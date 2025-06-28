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
  return(
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit</Button>
      </DialogTrigger>
      <DialogContent 
        className="fixed left-[100%] top-[50%] translateX-[-100%] h-full w-full"
        // side="right"
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