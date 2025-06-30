import { Button } from "./ui/button";
import { useContext}  from "react";
import TableDataContext from "@/context/mainTableDataContext";

export default function DeleteReviewButton({rowToAdd}){
  const {addPeriodicReview} = useContext(TableDataContext);

  const onButtonClick = (ev) => {
    ev.preventDefault();
    addPeriodicReview({
      ...rowToAdd,
      isPlaceholder: false,
    })
  }

  return (
    <>
      <Button onClick={onButtonClick}>Submit</Button>
    </>
  )
}