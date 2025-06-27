import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "../ui/button";

export default function AddModal() {
  return(
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Periodic Reviews</DialogTitle>
          <DialogDescription>
            [TODO] Add content here for Periodic reviews
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}