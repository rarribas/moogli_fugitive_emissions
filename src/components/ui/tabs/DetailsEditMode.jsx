import { useState, useContext, useRef } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { Label } from "../Label";
import InputError from "../InputError";
import Header from "../Header";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent
} from "@/components/ui/select"
import { 
  typeOfEquipmentOptions, 
  locationsOptions, 
  maintenanceCycleOptions, 
  refrigerantTypeOptions 
} from "@/data/selectsData";
import TableDataContext from "@/context/mainTableDataContext"; 
import useSelectOptions from "@/hooks/useSelectOptions";
import { useFormValidation } from "@/hooks/useFormValidation";

export default function DetailsEditMode({editableRow, setEditDetails}){
  const {editTableData} = useContext(TableDataContext);
  const {isValidData, isValidField} = useFormValidation();
  const formRef = useRef(null);
  
  const [editableData, setEditableData] = useState({
    id: editableRow.id,
    equipmentName: editableRow.equipmentName,
    refrigerantType: editableRow.refrigerantType,
    capacity: editableRow.capacity,
    location: editableRow.location,
    year: editableRow.year,
    maintenanceCycle: editableRow.maintenanceCycle,
    type: editableRow.type,
    use: editableRow.use,
  });

  const typeOptions = useSelectOptions(typeOfEquipmentOptions);
  const locationOpts = useSelectOptions(locationsOptions);
  const cycleOpts = useSelectOptions(maintenanceCycleOptions);
  const refTypeOpts = useSelectOptions(refrigerantTypeOptions);

  const onFormSubmit = (ev) =>{ 
    ev.preventDefault();

    const form = formRef.current;
    const optionalInputs = Array.from(form.querySelectorAll("[data-optional]"))
    .map((input) => input.id);
    const requiredFields = Object.fromEntries(
      Object.entries(editableData).filter(([key]) => !optionalInputs.includes(key))
    );

    if(!isValidData(requiredFields)) return false;

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
      <Header>
        <h2>{editableRow.equipmentName}</h2>
      </Header>
      <form onSubmit={onFormSubmit} ref={formRef}>  
        <div>
          <Label htmlFor="equipmentName">Equipment Name</Label>
          <Input 
            id="equipmentName" 
            value={editableData.equipmentName} 
            onChange={onInputChange} 
            className={!isValidField("equipmentName") ? "border-red-500 focus-visible:ring-red-500" : ""}
          />
          {!isValidField("equipmentName") && <InputError>Equipment Name cannot be empty</InputError>}
        </div>
        <div>
          <Label htmlFor="year">Year</Label>
          <Input id="year" type="number" min={1900} step={1} data-optional={true} value={editableData.year} onChange={onInputChange} />
        </div>
        <div>
          <Label htmlFor="capacity">Capacity</Label>
          <Input 
            id="capacity" 
            type="number" 
            value={editableData.capacity} 
            onChange={onInputChange} 
            className={!isValidField("capacity") ? "border-red-500 focus-visible:ring-red-500" : ""}
          />
          {!isValidField("capacity") && <InputError>Capacity value cannot be empty</InputError>}
        </div>
        <div>
          <Label htmlFor="type">Type</Label>
          <Select 
            id="type" 
            onValueChange={(value) =>
              setEditableData({ ...editableData, type: value })
            } 
            value={editableData.type}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a Type" />
            </SelectTrigger>
            <SelectContent>
              {typeOptions}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="location">Location</Label>
          <Select 
            id="location" 
            onValueChange={(value) =>
              setEditableData({ ...editableData, location: value })
            } 
            value={editableData.location}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a Location" />
            </SelectTrigger>
            <SelectContent>
              {locationOpts}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="refrigerantType">Refrigerant Type</Label>
          <Select 
            id="refrigerantType" 
            onValueChange={(value) =>
              setEditableData({ ...editableData, refrigerantType: value })
            } 
            value={editableData.refrigerantType}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a Refrigerant Type" />
            </SelectTrigger>
            <SelectContent>
              {refTypeOpts}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="maintenanceCycle">Maintenance Cycle</Label>
          <Select 
            id="maintenanceCycle" 
            onValueChange={(value) =>
              setEditableData({ ...editableData, maintenanceCycle: value })
            } 
            value={editableData.maintenanceCycle}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a Maintenance Cycle" />
            </SelectTrigger>
            <SelectContent>
              {cycleOpts}
            </SelectContent>
          </Select>
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  )
}