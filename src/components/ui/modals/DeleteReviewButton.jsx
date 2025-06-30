import { Button } from "../Button";
import { useContext}  from "react";
import TableDataContext from "@/context/mainTableDataContext";

export default function DeleteReviewButton({rowToDelete}){
  const {deletePeriodicReview} = useContext(TableDataContext);

  const onButtonClick = (ev) => {
    ev.preventDefault();
    deletePeriodicReview(rowToDelete);
  }

  return (
    <>
      <Button onClick={onButtonClick}>Delete</Button>
    </>
  )
}