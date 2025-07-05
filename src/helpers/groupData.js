import { getTypeLabel } from "@/data/selectsData";

export function groupData(dataToGroup) {
  // First remove _group keys if any to then regroup again
  const withoutGroups = dataToGroup.filter((data) => {
    if(!data._group) return data;
  })

  // Group elements {air-conditioning: Array(2), freezers: Array(1)}
  const grouped = withoutGroups.reduce((acc, item) => {
    const type = item.type || 'unknown';
    if (!acc[type]) acc[type] = [];
    acc[type].push(item);
    return acc;
  }, {});

  // Now build a new array with _group items before each group
  const result = [];
  for (const type in grouped) {
    result.push({ _group: getTypeLabel(type) });
    result.push(...grouped[type]);
  }

  return result;
}