import { products } from "./products";

export const HEALTH_CATEGORIES = [
  {
    slug: "daily-shots",
    label: "Daily Shots",
    icon: "flask",
    tagline: "A Daily Reset, In One Shot.",
    text: "Concentrated daily shots for mornings, evenings and everything in between.",
    img: "/assets/products/eat/immunity-shield.jpg",
    cats: ["Daily Shots"],
  },
  {
    slug: "active-nutrition",
    label: "Active Nutrition",
    icon: "box",
    tagline: "Fuel for an Active Life.",
    text: "Protein and active-nutrition formats built for an active lifestyle.",
    img: "/assets/products/eat/food.jpg",
    cats: ["Protein & Active Nutrition"],
  },
];

export const VISIBLE_HEALTH_CATEGORIES = HEALTH_CATEGORIES.filter((c) => !c.hidden);

export function productsForHealthCategory(slug) {
  const cat = HEALTH_CATEGORIES.find((c) => c.slug === slug);
  if (!cat) return [];
  return products.filter((p) => cat.cats.includes(p.cat));
}
