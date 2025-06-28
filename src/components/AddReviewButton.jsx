import { Button } from "./ui/button";
import { useContext}  from "react";
import TableDataContext from "@/context/MainTableDataContext";

export default function DeleteReviewButton({rowToAdd}){
  const {addPeriodicReview} = useContext(TableDataContext);

  const onButtonClick = (ev) => {
    ev.preventDefault();
    addPeriodicReview(rowToAdd)
    console.log("ADD ROW", rowToAdd)
  }

  return (
    <>
      <Button onClick={onButtonClick}>Submit</Button>
    </>
  )
}