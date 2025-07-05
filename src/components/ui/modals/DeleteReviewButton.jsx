import { Button } from "../Button";
import { useContext}  from "react";
import TableDataContext from "@/context/mainTableDataContext";
import { Trash } from 'lucide-react';

export default function DeleteReviewButton({rowToDelete}){
  const {deletePeriodicReview} = useContext(TableDataContext);

  const onButtonClick = (ev) => {
    ev.preventDefault();
    deletePeriodicReview(rowToDelete);
  }

  return (
    <>
      <Button variant="ghost" onClick={onButtonClick}>
        <Trash size={24} />
      </Button>
    </>
  )
}