import { Button } from "../Button";
import Header from "../Header";
import { getTypeLabel, getLocationLabel, getMaintanceCycleLabel, getRefrigerantTypeLabel } from "@/data/selectsData";

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
          <h4>Type</h4>
          <p>{getTypeLabel(editableRow.type)}</p>
        </div>
        <div>
          <h4>Location</h4>
          <p>{getLocationLabel(editableRow.location)}</p>
        </div>
        <div>
          <h4>Maintenance Cycle</h4>
          <p>{getMaintanceCycleLabel(editableRow.maintenanceCycle)}</p>
        </div>
        <div>
          <h4>Refrigerant Type</h4>
          <p>{getRefrigerantTypeLabel(editableRow.refrigerantType)}</p>
        </div>
      </div>
    </div>
  )
}