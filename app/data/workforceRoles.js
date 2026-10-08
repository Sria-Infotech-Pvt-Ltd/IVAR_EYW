export const WORKFORCE_ROLES = [
  {
    slug: "chefs-cooks",
    title: "Chefs & Cooks",
    text: "Professional & home-style chefs",
    icon: "heart",
    summary: "Professional and home-style chefs trained to run a consistent, hygienic kitchen — from daily prep to menu execution.",
    responsibilities: ["Menu prep and daily cooking", "Portion and quality consistency", "Kitchen hygiene standards", "Working with recipe & nutrition guidelines"],
  },
  {
    slug: "food-manufacturing-staff",
    title: "Food Manufacturing Staff",
    text: "Production workers, operators, supervisors",
    icon: "box",
    summary: "Production workers, machine operators and line supervisors for food manufacturing and packing facilities.",
    responsibilities: ["Production line operation", "Batch and quality checks", "Equipment handling & safety", "Shift supervision"],
  },
  {
    slug: "packaging-staff",
    title: "Packaging Staff",
    text: "Packing, labeling, quality check",
    icon: "bag",
    summary: "Trained staff for packing, labeling and final quality checks before products leave the facility.",
    responsibilities: ["Packing and sealing", "Labeling and batch coding", "Final quality check", "Carton and dispatch prep"],
  },
  {
    slug: "delivery-partners",
    title: "Delivery Partners",
    text: "Delivery drivers and riders",
    icon: "truck",
    summary: "Reliable delivery drivers and riders for on-time last-mile delivery, on two wheels or four.",
    responsibilities: ["On-time last-mile delivery", "Order handling & handover", "Route planning", "Customer interaction"],
  },
  {
    slug: "servers-service-staff",
    title: "Servers & Service Staff",
    text: "Restaurants, catering, events",
    icon: "people",
    summary: "Front-of-house staff for restaurants, catering and events — presentable, trained and customer-ready.",
    responsibilities: ["Table and guest service", "Catering & event support", "Order taking and POS handling", "Guest experience"],
  },
  {
    slug: "housekeeping-staff",
    title: "Housekeeping Staff",
    text: "Clean & hygienic workplaces",
    icon: "shield",
    summary: "Housekeeping staff trained to maintain clean, hygienic kitchens and workplaces to food-safety standards.",
    responsibilities: ["Daily cleaning & sanitation", "Food-safety compliant hygiene", "Waste handling", "Equipment & surface upkeep"],
  },
  {
    slug: "general-workforce",
    title: "General Workforce",
    text: "Loaders, warehouse, dispatch, helpers",
    icon: "user",
    summary: "General workforce for loading, warehouse operations, dispatch and everyday support roles.",
    responsibilities: ["Loading & unloading", "Warehouse stocking", "Dispatch support", "General helper duties"],
  },
];

export function workforceRoleBySlug(slug) {
  return WORKFORCE_ROLES.find((r) => r.slug === slug);
}
