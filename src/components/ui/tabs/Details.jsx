import { Button } from "../Button";
import Header from "./Header";
import { useState } from "react";
import DetailsEditMode from "./DetailsEditMode";

export default function DetailsTab({ editableRow }) {
  const [editDetails, setEditDetails] = useState(false);

  return (
    <>
      {editDetails ? (
        <div>
          <Header>
            <h2>{editableRow.equipmentName}</h2>
          </Header>
          <DetailsEditMode  editableRow={editableRow} setEditDetails={setEditDetails}/>
        </div>
      ) : (
        <div>
          <Header>
            <h2>{editableRow.equipmentName}</h2>
            <Button onClick={() => setEditDetails(true)}>Edit</Button>
          </Header>
          <div>
            <div>
              <h4>Equipment Name</h4>
              <p>{editableRow.equipmentName}</p>
            </div>
            <div>
              <h4>Year</h4>
              <p>{editableRow.year}</p>
            </div>
            <div>
              <h4>Capacity</h4>
              <p>{editableRow.capacity}</p>
            </div>
          </div>
        </div>
        
      )}
    </>
  );
}
