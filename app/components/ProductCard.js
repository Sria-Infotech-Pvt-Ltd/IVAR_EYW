"use client";

import { useCart } from "../context/CartContext";
import { money } from "../data/products";

// Shared product card — stotodo/Dawn pattern: image on a light surface,
// title + chip, price left / compact "Add" button right.
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
      <h3 className="text-[15px] text-ivar-ink leading-snug mb-2 line-clamp-2">{product.name}</h3>

      <div className="flex items-center justify-between gap-3">
        <span className="text-[14px] font-bold text-ivar-ink">{money(product.price)}</span>
        <button
          onClick={() => add(product.id, 1)}
          className="px-4 h-8 bg-ivar-slate text-white text-[12px] font-semibold tracking-wide shrink-0"
          suppressHydrationWarning
        >
          Add
        </button>
      </div>
    </div>
  );
}
