import { Button } from "../Button";
import Header from "./Header";
import { useState } from "react";
import { Input } from "../Input";
import { Label } from "../Label";

export default function DetailsTab({ editableRow }) {
  const [editDetails, setEditDetails] = useState(false);
  const [editableData, setEditableData] = useState({
    equipmentName: editableRow.equipment_name,
    refrigerantType: editableRow.refrigerant_type,
    capacity: editableRow.capacity,
    location: editableRow.location,
    year: editableRow.year,
    maintenance_cycle: editableRow.maintenance_cycle,
    type: editableRow.type,
    use: editableRow.use,
  });

  const onInputChange = (ev) => {
    ev.preventDefault();
    const { id, value } = ev.target;

    setEditableData({
      ...editableData,
      [id]: value,
    })
  }

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
            
          <div>
            <Label htmlFor="equipmentName">Equipment Name</Label>
            <Input id="equipmentName" value={editableData.equipmentName} onChange={onInputChange} />
          </div>
          <div>
            <Label htmlFor="year">Year</Label>
            <Input id="year" type="number" min={1900} step={1} value={editableData.year} onChange={onInputChange} />
          </div>
          <div>
            <Label htmlFor="capacity">Capacity</Label>
            <Input id="capacity" type="number" value={editableData.capacity} onChange={onInputChange} />
          </div>
          <Button type="submit">Submit</Button>
        </div>
      )}
    </>
  );
}
