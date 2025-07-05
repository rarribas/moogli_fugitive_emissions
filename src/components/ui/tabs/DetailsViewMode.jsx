import { Button } from "../Button";
import Header from "./Header";

export default function DetailsViewMode({editableRow, setEditDetails}) {
  return (
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
  )
}