import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog"
import { Button } from "../Button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../Tabs";
import DetailsTab from "../tabs/Details";

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
          <DialogDescription asChild>
            <Tabs defaultValue="account" className="w-[100%]">
              <TabsList>
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="reviews">Periodic Reviews</TabsTrigger>
              </TabsList>
              <TabsContent value="details"><DetailsTab editableRow={editableRow}/></TabsContent>
              <TabsContent value="reviews">Periodic Reviews</TabsContent>
            </Tabs>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}