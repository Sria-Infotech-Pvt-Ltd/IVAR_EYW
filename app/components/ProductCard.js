"use client";

import { useCart } from "../context/CartContext";

// Shared product card — stotodo/Dawn pattern: image on a light surface,
// title + chip, compact "Add" button. Price is hidden per site preference.
export default function ProductCard({ product }) {
  const { add } = useCart();

  return (
    <div className="group">
      <div className="relative aspect-square rounded-[14px] overflow-hidden bg-ivar-surface mb-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.img}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <p className="text-[12px] text-ivar-slate/60 mb-1">{product.cat}</p>
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-[15px] text-ivar-ink leading-snug line-clamp-2">{product.name}</h3>
        <button
          onClick={() => add(product.id, 1)}
          className="shrink-0 px-4 h-8 bg-ivar-slate text-white text-[12px] font-semibold tracking-wide"
          suppressHydrationWarning
        >
          Add
        </button>
      </div>
    </div>
  );
}
