import AddModal from "@/components/ui/modals/AddModal";
import EditModal from "@/components/ui/modals/EditModal";
import DeleteReviewButton from "@/components/ui/modals/DeleteReviewButton";
import AddReviewButton from "@/components/ui/modals/AddReviewButton";
import DatePicker from "@/components/ui/DatePicker";
import { Input } from "@/components/ui/Input";
import { emissionsData } from "../data/emissionsData";
import { groupData } from "@/helpers/groupData";
import { getLocationLabel, getRefrigerantTypeLabel } from "@/data/selectsData";

export const headerColumns = [
  {
    accessorKey: "equipmentName",
    header: "Equipment Name",
  },
  {
    accessorKey: "refrigerantType",
    header: "Refrigerant Type",
    cell: ({ getValue }) => {
      const value = getValue()
      return getRefrigerantTypeLabel(value)      
    },
  },
  {
    accessorKey: "gwp_factor",
    header: "GWP Factor",
  },
  {
    accessorKey: "capacity",
    header: "Capacity (kg)",
    cell: ({ getValue }) => {
      const value = getValue()
      return `${value} kg`      
    },
  },
  {
    accessorKey: "location",
    header: "Location",
    cell: ({ getValue }) => {
      const value = getValue()
      return getLocationLabel(value)      
    },
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    id: "actions",
    header: "",
    cell: ({ row }) => {
      const original = row.original
      if (original._group) return null

      return (
        <div className="flex gap-[6px] justify-end">
          <EditModal editableRow={original}/>
          <AddModal activeRow={original}/>
        </div> 
      )
    },
  },
];

export const periodicReviewsHeader = [{
  accessorKey: "date_review",
  header: "Date of Review",
  cell: ({row, getValue}) => {
    return (
      row.original.isPlaceholder ? 
        <DatePicker onChange={(newDate) => {
          row.original.date_review = newDate
        }}/>
        : getValue()
    )
  },
}, {
  accessorKey: "report",
  header: "Maintainance report",
  cell: ({row, getValue}) => {
    return (
      row.original.isPlaceholder ? 
        <Input type="file" onChange={(ev) => {
          const newFile = ev.target.files?.[0]
          if(!newFile) return;
          row.original.report = newFile.name;
        }}/>
        : getValue()
    )
  },
},{
  id: "actions", 
  header: "", 
  cell: ({row}) => {
    return (
      <div className="flex justify-end">
        {
          row.original.isPlaceholder ? 
          <AddReviewButton rowToAdd={row.original}/>
          : <DeleteReviewButton rowToDelete={row.original}/> 
        } 
      </div>
    )
  },
},];

export {emissionsData as data};
export {groupData}



