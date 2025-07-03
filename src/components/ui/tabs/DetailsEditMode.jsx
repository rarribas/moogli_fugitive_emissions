import { useState, useContext } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { Label } from "../Label";
import TableDataContext from "@/context/mainTableDataContext"; 

export default function DetailsEditMode({editableRow, setEditDetails}){
  const {editTableData} = useContext(TableDataContext);

  const [editableData, setEditableData] = useState({
    id: editableRow.id,
    equipmentName: editableRow.equipmentName,
    refrigerantType: editableRow.refrigerantType,
    capacity: editableRow.capacity,
    location: editableRow.location,
    year: editableRow.year,
    maintenance_cycle: editableRow.maintenance_cycle,
    type: editableRow.type,
    use: editableRow.use,
  });

  const onFormSubmit = (ev) =>{ 
    ev.preventDefault();

    editTableData(editableData);
    setEditDetails(false);
  }

  const onInputChange = (ev) => {
    ev.preventDefault();
    const { id, value } = ev.target;

    setEditableData({
      ...editableData,
      [id]: value,
    })
  }

  return(
    <div>
      <form onSubmit={onFormSubmit}>  
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
      </form>
    </div>
  )
}