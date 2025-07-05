import { Button } from "../Button";
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
      <Button  variant="secondary" onClick={onButtonClick}>Submit</Button>
    </>
  )
}