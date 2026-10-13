"use client";

import { buildWhatsAppLink } from "../lib/whatsapp";

export default function ProductDetails({ product }) {
  const n = product.nutrition || {};
  const waLink = buildWhatsAppLink(`Hi Ivar 🌿 I'd like to enquire about ${product.name}.`);

  return (
    <div className="grid grid-cols-1 md:grid-cols-[minmax(0,400px)_1fr] gap-8 md:gap-12 items-start">
      <div className="relative rounded-2xl overflow-hidden bg-ivar-cream w-full max-w-[400px] mx-auto md:mx-0 aspect-square md:sticky md:top-24">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.img}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover blur-2xl scale-125 opacity-60"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.img}
          alt={product.name}
          className="relative w-full h-full object-contain"
        />
      </div>
      <div className="flex flex-col">
        <div className="text-[11px] tracking-[0.16em] text-[#668A73] uppercase font-semibold">
          {product.cat}
        </div>
        <h1 className="font-serif font-semibold text-[28px] md:text-[34px] leading-[1.15] mt-2 mb-3">
          {product.name}
        </h1>
        <p className="text-[#4b564f] text-[15px] leading-[1.7] max-w-[460px]">
          {product.desc}
        </p>

        {product.ingredients?.length > 0 && (
          <div className="mt-6">
            <p className="text-[11px] tracking-[0.16em] uppercase text-[#668A73] font-semibold mb-3">Ingredients</p>
            <div className="flex flex-wrap gap-2">
              {product.ingredients.map((ing) => (
                <span key={ing} className="px-4 py-2 rounded-full border border-ivar-forest/20 text-[12.5px] font-medium text-ivar-ink">
                  {ing}
                </span>
              ))}
            </div>
          </div>
        )}

        {n.kcal && (
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[13.5px] text-[#4b564f]">
            <span>{n.kcal} kcal</span>
            {n.proteinG != null && <span>{n.proteinG}g protein</span>}
            {n.carbsG != null && <span>{n.carbsG}g carbs</span>}
            {n.fatG != null && <span>{n.fatG}g fat</span>}
            {n.fiberG != null && <span>{n.fiberG}g fibre</span>}
          </div>
        )}

        <div className="mt-8">
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex justify-center items-center rounded-full px-8 py-3.5 font-semibold text-[13px] tracking-wide cursor-pointer border border-transparent bg-ivar-dark text-white transition-colors duration-200 hover:bg-ivar-green"
          >
            Enquire Now
          </a>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 text-[#617169] text-[11px] tracking-wide mt-6">
          <span>✓ Thoughtfully made</span>
          <span>✓ Nature inspired</span>
          <span>✓ Everyday goodness</span>
        </div>
      </div>
    </div>
  );
}
