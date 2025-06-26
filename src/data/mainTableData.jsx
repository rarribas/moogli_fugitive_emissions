import { Button } from "@/components/ui/button";

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
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              console.log("Open modal for:", original)
              // In the future, trigger modal here
            }}
          >
            Add
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              console.log("Open modal for:", original)
              // In the future, trigger modal here
            }}
          >
            Edit
          </Button>
        </div> 
      )
    },
  },
]

export const data = [
  { _group: "Chillers" },
  { equipment: "A/C", refrigerant: "R_404", gwp: "3260" },
  { _group: "Freezers" },
  { equipment: "B/C", refrigerant: "R_410", gwp: "2800" },
]