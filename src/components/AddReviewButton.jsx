import { Button } from "./ui/button";
// import { useContext}  from "react";
// import TableDataContext from "@/context/MainTableDataContext";

export default function DeleteReviewButton({rowToAdd}){
  // const {deletePeriodicReview} = useContext(TableDataContext);

  const onButtonClick = (ev) => {
    ev.preventDefault();
    console.log("ADD ROW", rowToAdd)
  }

  return (
    <>
      <Button onClick={onButtonClick}>Submit</Button>
    </>
  )
}