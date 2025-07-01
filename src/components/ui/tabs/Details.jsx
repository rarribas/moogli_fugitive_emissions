import { Button } from "../Button";
import { useState } from "react";

export default function DetailsTab({ editableRow }) {
  const [editDetails, setEditDetails] = useState(false);


  return (
    <>
      {editDetails ? (
        <div>
          <header className="w-full flex items-center justify-between">
            <h2>{editableRow.equipment_name}</h2>
          </header>
          <p>Edit Mode</p>
        </div>
      ) : (
        <div>
          <header className="w-full flex items-center justify-between">
            <h2>{editableRow.equipment_name}</h2>
            <Button onClick={() => setEditDetails(true)}>Edit</Button>
          </header>
          <p>View Mode</p>
        </div>
      )}
    </>
  );
}
