import AddModal from "@/components/modals/AddModal";
import EditModal from "@/components/modals/EditModal";
import DeleteReviewButton from "@/components/DeleteReviewButton";
import AddReviewButton from "@/components/AddReviewButton";
import DatePicker from "@/components/ui/DatePicker";
import { Input } from "@/components/ui/input";
import { v4 as uuidv4 } from 'uuid';

export const headerColumns = [
  {
    accessorKey: "equipment_name",
    header: "Equipment Name",
  },
  {
    accessorKey: "refrigerant_type",
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
    return (
      row.original.isPlaceholder ? 
        <AddReviewButton rowToAdd={row.original}/>
        : <DeleteReviewButton rowToDelete={row.original}/> 
    )
  },
},];

export const data = [
  { _group: "Air-conditioning" },
  {
    id: uuidv4(),
    equipment_name: "A/C Headquarters-1",
    refrigerant_type: "R_404A",
    gwp_factor: "3260",
    capacity: "6.5",
    location: "Headquarters",
    status: "Operational",
    periodic_reviews: [{
      id:uuidv4(),
      date_review: "02/02/2024",
      report: "IMG.png"
    },{
      id:uuidv4(),
      date_review: "02/02/2024",
      report: "IMG.png"
    }],
  },
  {
    id: uuidv4(),
    equipment_name: "A/C VAL-1",
    refrigerant_type: "R_404",
    gwp_factor: "3260",
    capacity: "5.0",
    location: "Headquarters",
    status: "Under Maintenance",
    periodic_reviews: [],
  },
  { _group: "Freezers" },
  {
    id: uuidv4(),
    equipment_name: "HQ-freezer1",
    refrigerant_type: "R_410",
    gwp_factor: "2800",
    capacity: "3.2",
    location: "Headquarters",
    status: "Operational",
    periodic_reviews: [],
  },
];
