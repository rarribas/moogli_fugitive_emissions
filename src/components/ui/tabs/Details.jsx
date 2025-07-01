import { Button } from "../Button";
import Header from "./Header";
import { useState } from "react";

export default function DetailsTab({ editableRow }) {
  const [editDetails, setEditDetails] = useState(false);


  return (
    <>
      {editDetails ? (
        <div>
          <Header>
            <h2>{editableRow.equipment_name}</h2>
          </Header>
          <p>Edit Mode</p>
        </div>
      ) : (
        <div>
          <Header>
            <h2>{editableRow.equipment_name}</h2>
            <Button onClick={() => setEditDetails(true)}>Edit</Button>
          </Header>
            
          <p>View Mode</p>
        </div>
      )}
    </>
  );
}
