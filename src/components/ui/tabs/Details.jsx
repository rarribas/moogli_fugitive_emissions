import { Button } from "../Button";
import Header from "./Header";
import { useState } from "react";
import DetailsEditMode from "./DetailsEditMode";
import DetailsViewMode from "./DetailsViewMode";

export default function DetailsTab({ editableRow }) {
  const [editDetails, setEditDetails] = useState(false);

  return (
    <>
      {editDetails ? (
        <DetailsEditMode editableRow={editableRow} setEditDetails={setEditDetails}/>
      ) : (
        <DetailsViewMode editableRow={editableRow} setEditDetails={setEditDetails}/>
      )}
    </>
  );
}
