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

export const getTypeLabel = (value) => {
  console.log(value);
  const foundItem = typeOfEquipmentOptions.find((item) => item.value === value )
  return foundItem.label;
}

export const getLocationLabel = (value) => {
  const foundItem = locationsOptions.find((item) => item.value === value )
  return foundItem.label;
}