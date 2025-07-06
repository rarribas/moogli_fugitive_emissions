import { Button } from "../Button";
import Panel from "../Panel";
import FormSection from "../FormSection";
import Header from "../Header";
import { Pencil } from "lucide-react";
import { getTypeLabel, getLocationLabel, getMaintanceCycleLabel, getRefrigerantTypeLabel } from "@/data/selectsData";

export default function DetailsViewMode({editableRow, setEditDetails}) {
  return (
    <Panel className="border p-2">
      <Header className="pt-1 px-2 pb-0">
        <h3>{editableRow.equipmentName}</h3>
        <Button  variant="outline" onClick={() => setEditDetails(true)}>
          <Pencil/>
        </Button>
      </Header>
      <div className="grid grid-cols-2">
        <FormSection>
          <h4>Equipment Name</h4>
          <p>{editableRow.equipmentName}</p>
        </FormSection>
        <FormSection>
          <h4>Year</h4>
          <p>{editableRow.year}</p>
        </FormSection>
        <FormSection>
          <h4>Type</h4>
          <p>{getTypeLabel(editableRow.type)}</p>
        </FormSection>

        <FormSection>
          <h4>Location</h4>
          <p>{getLocationLabel(editableRow.location)}</p>
        </FormSection>
        <FormSection>
          <h4>Maintenance Cycle</h4>
          <p>{getMaintanceCycleLabel(editableRow.maintenanceCycle)}</p>
        </FormSection>
        <FormSection>
          <h4>Refrigerant Type</h4>
          <p>{getRefrigerantTypeLabel(editableRow.refrigerantType)}</p>
        </FormSection>
      </div>
    </Panel>
  )
}