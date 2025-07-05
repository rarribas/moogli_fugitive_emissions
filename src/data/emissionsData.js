import { v4 as uuidv4 } from 'uuid';
import { getTypeLabel } from "@/data/selectsData";

export const emissionsData = [
  { _group: getTypeLabel("air-conditioning") },
  {
    id: uuidv4(),
    equipmentName: "A/C Headquarters-1",
    refrigerantType: "R_404A",
    gwp_factor: "3260",
    capacity: "6.5",
    location: "moogli-valencia",
    status: "Operational",
    year: "2022",
    maintenanceCycle: "annually",
    type: "air-conditioning",
    use: "Small Space",
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
    equipmentName: "A/C VAL-1",
    refrigerantType: "R_404",
    gwp_factor: "3260",
    capacity: "5.0",
    location: "moogli-valencia",
    status: "Under Maintenance",
    year: "2022",
    maintenanceCycle: "annually",
    type: "air-conditioning",
    use: "Small Space",
    periodic_reviews: [],
  },
  { _group: getTypeLabel("freezers")},
  {
    id: uuidv4(),
    equipmentName: "HQ-freezer1",
    refrigerantType: "R_410",
    gwp_factor: "2800",
    capacity: "3.2",
    location: "moogli-valencia",
    status: "Operational",
    year: "2022",
    maintenanceCycle: "annually",
    type: "freezers",
    use: "Small Space",
    periodic_reviews: [],
  },
];
