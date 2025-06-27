import { Button } from "@/components/ui/button";
import AddModal from "@/components/modals/AddModal";
import EditModal from "@/components/modals/EditModal";


export const headerColumns = [
  {
    accessorKey: "equipment",
    header: "Equipment",
  },
  {
    accessorKey: "refrigerant",
    header: "Refrigerant",
  },
  {
    accessorKey: "gwp",
    header: "GWP",
  },
  {
    id: "actions", // custom column
    header: "", // no column title
    cell: ({ row }) => {
      const original = row.original
      if (original._group) return null // skip group header rows

      return (
        <div>
          <AddModal/>
          <EditModal editableRow={original}/>
        </div> 
      )
    },
  },
]

export const data = [
  { _group: "Air-conditioning" },
  { equipment: "A/C Headquarters-1", refrigerant: "R_404", gwp: "3260" },
  { equipment: "A/C VAL-1", refrigerant: "R_404", gwp: "3260" },
  { _group: "Freezers" },
  { equipment: "HQ-freezer1", refrigerant: "R_410", gwp: "2800" },
]