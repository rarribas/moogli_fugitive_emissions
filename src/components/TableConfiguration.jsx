import AddModal from "@/components/ui/modals/AddModal";
import EditModal from "@/components/ui/modals/EditModal";
import DeleteReviewButton from "@/components/ui/modals/DeleteReviewButton";
import AddReviewButton from "@/components/ui/modals/AddReviewButton";
import DatePicker from "@/components/ui/DatePicker";
import { Input } from "@/components/ui/Input";
import { emissionsData } from "../data/emissionsData";
import { groupData } from "@/helpers/groupData";

export const headerColumns = [
  {
    accessorKey: "equipmentName",
    header: "Equipment Name",
  },
  {
    accessorKey: "refrigerantType",
    header: "Refrigerant Type",
  },
  {
    accessorKey: "gwp_factor",
    header: "GWP Factor",
  },
  {
    accessorKey: "capacity",
    header: "Capacity (kg)",
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    id: "actions", // custom column
    header: "", // no column title
    cell: ({ row }) => {
      const original = row.original
      if (original._group) return null // skip group header rows

      return (
        <div>
          <AddModal activeRow={original}/>
          <EditModal editableRow={original}/>
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
    console.log(row.original, "RE RENDERS??")
    return (
      row.original.isPlaceholder ? 
        <AddReviewButton rowToAdd={row.original}/>
        : <DeleteReviewButton rowToDelete={row.original}/> 
    )
  },
},];

export {emissionsData as data};
export {groupData}



