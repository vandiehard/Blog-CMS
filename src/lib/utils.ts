export function formatNumber(num: number): string {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
  if (num >= 1000) return (num / 1000).toFixed(0) + "K";
  return num.toString();
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function getFacilityMarkerColor(type: string): string {
  switch (type) {
    case "recycling-plant": return "#1B5E37";
    case "landfill": return "#0D7377";
    case "sorting-center": return "#A8C96E";
    case "drop-off": return "#D4873A";
    default: return "#7A9E85";
  }
}

export function getFacilityTypeLabel(type: string): string {
  switch (type) {
    case "recycling-plant": return "Recycling Plant";
    case "landfill": return "TPA / Landfill";
    case "sorting-center": return "Sorting Center";
    case "drop-off": return "Drop-Off Point";
    default: return type;
  }
}

export function getStatusColor(status: string): { bg: string; text: string; border: string } {
  switch (status) {
    case "active": case "published": case "open":
      return { bg: "#D4EDDA", text: "#1B5E37", border: "#2D7A3A" };
    case "under-construction": case "draft":
      return { bg: "#EDF3E6", text: "#3D5C45", border: "#A8C796" };
    case "decommissioned": case "closed": case "archived":
      return { bg: "#FADBD8", text: "#922B21", border: "#C0392B" };
    default:
      return { bg: "#FDEBD0", text: "#884210", border: "#C87C28" };
  }
}
