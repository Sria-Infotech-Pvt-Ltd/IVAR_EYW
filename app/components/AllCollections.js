import Link from "next/link";
import LineIcon from "./LineIcon";

// "All Collections" — rounded colour-card tiles, each with its own pastel
// background, a title + circular arrow link top-left, and a large product
// cut-out filling the rest of the card.
const COLLECTIONS = [
  { label: "Makhanas", href: "/makhana", img: "/assets/products/eat/collection-tile-makhana.png", bg: "bg-[#F1E9D8]", text: "text-ivar-forestDeep" },
  { label: "DateGo", href: "/date-go", img: "/assets/products/eat/collection-tile-datego.png", bg: "bg-[#8B5E3C]", text: "text-white" },
  { label: "Gift Hampers", href: "/gift-hampers", img: "/assets/products/eat/collection-tile-gift-hampers.png", bg: "bg-ivar-forestDeep", text: "text-white" },
  { label: "Combos", href: "/build", img: "/assets/products/eat/collection-tile-combos.png", bg: "bg-[#E6B339]", text: "text-ivar-forestDeep" },
];

export default function AllCollections() {
  return (
    <section className="bg-white py-10 md:py-16">
      <div className="max-w-[1200px] mx-auto px-[15px] md:px-[50px]">
        <h2 className="text-[32px] md:text-[56px] font-normal text-ivar-ink leading-tight mb-8 md:mb-10">
          All Collections
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-5">
          {COLLECTIONS.map((c) => (
            <Link
              key={c.label}
              href={c.href}
              className={`group relative aspect-square rounded-2xl overflow-hidden ${c.bg} p-5 flex flex-col justify-between`}
            >
              <div
                className="absolute -top-10 -right-10 size-[70%] rounded-full bg-black/10 pointer-events-none"
                aria-hidden="true"
              />
              <div
                className="absolute top-1/4 -left-10 size-[40%] rounded-full bg-black/15 pointer-events-none"
                aria-hidden="true"
              />

              <div className="relative z-10">
                <h3 className={`text-[20px] md:text-[24px] font-bold leading-[1.1] mb-3 ${c.text}`}>
                  {c.label}
                </h3>
                <span
                  className={`size-9 rounded-full flex items-center justify-center shrink-0 ${
                    c.text === "text-white" ? "bg-white/15 text-white" : "bg-ivar-forestDeep text-white"
                  }`}
                >
                  <LineIcon name="arrow" size={15} stroke={2.2} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>

              <div className="absolute -bottom-2 -right-2 w-[92%] h-[82%] transition-transform duration-300 group-hover:scale-105">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.img} alt="" aria-hidden="true" className="w-full h-full object-contain object-bottom drop-shadow-xl" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
