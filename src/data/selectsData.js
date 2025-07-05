export const typeOfEquipmentOptions = [
  { label: "Air Conditioning", value: "air-conditioning" },
  { label: "Beverage dispenser", value: "beverage-dispenser" },
  { label: "Blast-chillers", value: "blast-chillers" },
  { label: "Chillers", value: "chillers" },
  { label: "Freezers", value: "freezers" },
  { label: "Heat-pump", value: "heat-pump" },
  { label: "Ice cream machines", value: "ice-cream-machines" },
  { label: "Ice makers", value: "ice-makers" },
  { label: "Refrigerators", value: "refrigerators" },
  { label: "Refrigerated Display Case", value: "refrigerated-display-case" },
  { label: "Refrigerated Transport", value: "refrigerated-transport" },
  { label: "Vending machines", value: "vending-machines" },
]

export const locationsOptions = [
  { label: "Moogli Holdings", value: "moogli-holdings" },
  { label: "Moogli Valencia", value: "moogli-valencia" },
  { label: "Moogli Madrid", value: "moogli-madrid" },
  { label: "Moogli Amsterdam", value: "moogli-amsterdam" },
  { label: "Moogli Chile", value: "moogli-chile" },
];

export const maintenanceCycleOptions = [
  { label: "No periodic reviews", value: "no-reviews" },
  { label: "Every 3 months", value: "3-months" },
  { label: "Every 6 months", value: "6-months" },
  { label: "Annually", value: "annually" },
  { label: "Every 2 years", value: "2-years" },
];

export const refrigerantTypeOptions = [
  { label: "R600a", value: "r600a" },
  { label: "HFC-134a", value: "hfc-134a" },
  { label: "R-32", value: "r-32" },
  { label: "R290", value: "r290" },
  { label: "R11", value: "r11" },
  { label: "R404A", value: "r404a" },
  { label: "R-410A", value: "r-410a" },
  { label: "HFC-125", value: "hfc-125" },
];

export const getTypeLabel = (value) => {
  const foundItem = typeOfEquipmentOptions.find((item) => item.value === value )
  return foundItem.label;
}

export const getLocationLabel = (value) => {
  const foundItem = locationsOptions.find((item) => item.value === value )
  return foundItem.label;
}

export const getMaintanceCycleLabel = (value) => {
  const foundItem = maintenanceCycleOptions.find((item) => item.value === value )
  return foundItem.label;
}

export const getRefrigerantTypeLabel = (value) => {
  const foundItem = refrigerantTypeOptions.find((item) => item.value === value )
  return foundItem.label;
}