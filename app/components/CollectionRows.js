import Link from "next/link";
import { products } from "../data/products";
import ProductCard from "./ProductCard";

// stotodo/Dawn "Featured collection" rows — only Makhana and DateGo are
// real, sellable product lines today, so Gift Hampers and Combos reuse that
// same catalog curated as gift-worthy / mix-and-match picks rather than
// inventing products that don't exist yet.
const ROWS = [
  { title: "Makhana", subtitle: "Roasted, not fried.", href: "/makhana", ids: [50, 73, 74, 75, 76, 86] },
  { title: "DateGo", subtitle: "Naturally sweet, date-based energy.", href: "/date-go", ids: [82, 83, 84, 85] },
  { title: "Gift Hampers", subtitle: "Ready-to-gift picks from the range.", href: "/gift-hampers", ids: [86, 82, 83, 75] },
  { title: "Combos", subtitle: "Start with a favourite mix, or build your own.", href: "/build", ids: [50, 84, 76, 85] },
];

export default function CollectionRows() {
  return (
    <section className="bg-white py-10 md:py-16">
      <div className="max-w-[1200px] mx-auto px-[15px] md:px-[50px] space-y-14 md:space-y-20">
        {ROWS.map((row) => {
          const items = row.ids.map((id) => products.find((p) => p.id === id)).filter(Boolean);
          if (items.length === 0) return null;
          return (
            <div key={row.title}>
              <div className="flex items-end justify-between mb-6 md:mb-8 gap-4">
                <div>
                  <h2 className="text-[26px] md:text-[34px] font-normal text-ivar-ink leading-tight">{row.title}</h2>
                  <p className="text-[13px] text-ivar-slate/70 mt-1">{row.subtitle}</p>
                </div>
                <Link href={row.href} className="text-[13px] font-semibold text-ivar-forest hover:underline shrink-0">
                  See more →
                </Link>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
                {items.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
