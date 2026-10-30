import Link from "next/link";

// stotodo/Dawn "All Collections" — solid yellow, no-radius tiles with a big
// bold category word and a product photo anchored at the corner. We don't
// have transparent product cut-outs yet, so a regular photo is cropped at
// the corner instead — swap in a cut-out PNG per tile when one exists.
const COLLECTIONS = [
  { label: "Makhana", href: "/makhana", img: "/assets/products/eat/makhana-crunch.jpg" },
  { label: "DateGo", href: "/date-go", img: "/assets/products/eat/datego-original-banner.jpg" },
  { label: "Gift Hampers", href: "/gift-hampers", img: "/assets/products/eat/trail-mix.jpg" },
  { label: "Combos", href: "/build", img: "/assets/products/eat/snacks-namkeen-spread.png" },
];

export default function AllCollections() {
  return (
    <section className="bg-white py-10 md:py-16">
      <div className="max-w-[1200px] mx-auto px-[15px] md:px-[50px]">
        <h2 className="text-[32px] md:text-[56px] font-normal text-ivar-ink leading-tight mb-8 md:mb-10">
          All Collections
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {COLLECTIONS.map((c) => (
            <Link
              key={c.label}
              href={c.href}
              className="group relative aspect-square bg-ivar-forest overflow-hidden p-4"
            >
              <div className="absolute top-3 right-3 w-[52%] aspect-[3/4] rotate-[-6deg] shadow-lg overflow-hidden rounded-sm transition-transform duration-300 group-hover:rotate-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.img} alt="" aria-hidden="true" className="w-full h-full object-cover" />
              </div>
              <span
                className="absolute left-4 bottom-5 text-[22px] md:text-[28px] font-bold text-white"
                style={{ textShadow: "0 2px 10px rgba(0,0,0,0.2)" }}
              >
                {c.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
