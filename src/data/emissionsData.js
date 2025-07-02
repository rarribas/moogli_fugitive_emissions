import { v4 as uuidv4 } from 'uuid';

export const emissionsData = [
  { _group: "Air-conditioning" },
  {
    id: uuidv4(),
    equipment_name: "A/C Headquarters-1",
    refrigerant_type: "R_404A",
    gwp_factor: "3260",
    capacity: "6.5",
    location: "Headquarters",
    status: "Operational",
    year: "2022",
    maintenance_cycle: "Annually",
    type: "Air-conditioning",
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
    equipment_name: "A/C VAL-1",
    refrigerant_type: "R_404",
    gwp_factor: "3260",
    capacity: "5.0",
    location: "Headquarters",
    status: "Under Maintenance",
    year: "2022",
    maintenance_cycle: "Annually",
    type: "Air-conditioning",
    use: "Small Space",
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
    year: "2022",
    maintenance_cycle: "Annually",
    type: "Freezers",
    use: "Small Space",
    periodic_reviews: [],
  },
];