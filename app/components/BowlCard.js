"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";
import { useProductModal } from "../context/ProductModalContext";
import { money } from "../data/products";
import LineIcon from "./LineIcon";

function dietTag(p) {
  const hay = `${p.name} ${p.cat} ${(p.ingredients || []).join(" ")}`;
  if (/chicken|steak|prawn|salmon|fish|mutton/i.test(hay) || p.cat === "Non-Veg Snacks") return "Non-Veg";
  if (/egg/i.test(hay)) return "Egg";
  return "Veg";
}

export default function BowlCard({ product, tag, discountPct = 0, showTags = true }) {
  const { add, closeCart } = useCart();
  const { openProduct } = useProductModal();
  const router = useRouter();
  const n = product.nutrition || {};
  const discounted = discountPct ? Math.round(product.price * (1 - discountPct / 100)) : null;
  const tags = [dietTag(product), n.proteinG >= 20 ? "High Protein" : null, n.kcal && n.kcal <= 250 ? "Light" : null].filter(Boolean);

  function orderNow() {
    add(product.id, 1);
    closeCart();
    router.push("/checkout");
  }

  const attribute = tags.find((t) => t !== dietTag(product));

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="group bg-white rounded-2xl overflow-hidden border border-[#ece8da] hover:shadow-[0_10px_28px_rgba(11,53,31,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
    >
      <button
        onClick={() => openProduct(product)}
        className="relative block w-full aspect-[4/3] bg-ivar-cream overflow-hidden"
        aria-label={`View ${product.name}`}
        suppressHydrationWarning
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <motion.img
          src={product.img}
          alt={product.name}
          loading="lazy"
          initial={{ opacity: 0, scale: 1.08 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {tag && (
            <span className="bg-ivar-dark text-white text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full">
              {tag}
            </span>
          )}
          {showTags && attribute && (
            <span className="bg-white/95 text-ivar-forest text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full">
              {attribute}
            </span>
          )}
        </div>
        {discountPct > 0 && (
          <span className="absolute top-3 right-3 bg-ivar-success text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
            {discountPct}% OFF
          </span>
        )}
      </button>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-1.5">
          <h3 className="font-display text-[18px] leading-snug text-ivar-ink line-clamp-2 min-h-[46px]">{product.name}</h3>
          <div className="shrink-0 text-right">
            {discounted && <p className="text-[11px] text-ivar-muted line-through leading-tight">{money(product.price)}</p>}
            <p className="font-display text-[17px] text-ivar-forest leading-tight">{money(discounted ?? product.price)}</p>
          </div>
        </div>
        {product.desc && (
          <p className="text-[12.5px] leading-relaxed text-ivar-muted line-clamp-2 mb-3">{product.desc}</p>
        )}
        {showTags && (
          <p className="text-[11.5px] font-medium text-[#6b7771] mb-4">
            {[dietTag(product), n.proteinG ? `${n.proteinG}g protein` : null, n.kcal ? `${n.kcal} kcal` : null].filter(Boolean).join(" · ")}
          </p>
        )}

        <div className="flex gap-2 mt-auto pt-1">
          <button
            onClick={() => add(product.id, 1)}
            aria-label="Add to Cart"
            className="flex-1 inline-flex items-center justify-center gap-2 border border-ivar-forest/25 text-ivar-forest text-[12.5px] font-semibold rounded-full py-2.5 hover:bg-ivar-cream transition-colors cursor-pointer"
            suppressHydrationWarning
          >
            <LineIcon name="bag" size={15} stroke={1.8} />
            Add to Cart
          </button>
          <button
            onClick={orderNow}
            aria-label="Order Now"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-ivar-forest text-white text-[12.5px] font-semibold rounded-full py-2.5 hover:bg-ivar-forestDeep transition-colors cursor-pointer"
            suppressHydrationWarning
          >
            Order Now
            <LineIcon name="arrow" size={14} stroke={2.2} />
          </button>
        </div>
      </div>
    </motion.article>
  );
}
