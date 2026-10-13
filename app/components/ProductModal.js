"use client";

import { useEffect } from "react";
import { useProductModal } from "../context/ProductModalContext";
import { money } from "../data/products";
import { buildWhatsAppLink } from "../lib/whatsapp";

const DETAILS_LABEL = {
  Eat: "Ingredients",
};

export default function ProductModal() {
  const { product, closeProduct } = useProductModal();

  useEffect(() => {
    if (!product) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [product]);

  if (!product) return null;

  const waLink = buildWhatsAppLink(`Hi Ivar 🌿 I'd like to enquire about ${product.name}.`);
  const label = DETAILS_LABEL[product.group] || "Details";

  return (
    <div
      className="fixed inset-0 bg-[#0c221b66] z-[60] flex items-end md:items-center justify-center"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeProduct();
      }}
    >
      <div className="bg-[#fffdf8] w-full md:w-[860px] md:max-h-[88vh] max-h-[92vh] overflow-y-auto rounded-t-3xl md:rounded-3xl relative">
        <button
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white border border-[#e6e4dc] flex items-center justify-center text-xl leading-none text-[#68766f] hover:text-ivar-dark transition-colors"
          onClick={closeProduct}
          aria-label="Close"
          suppressHydrationWarning
        >
          ×
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-10 md:p-8">
          <div className="bg-[#ECECE9] h-[240px] md:h-[420px] md:rounded-2xl overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center p-6 md:p-0">
            <div className="text-[9px] tracking-[0.2em] text-[#6b8276] uppercase">
              {product.cat}
            </div>
            <h2 className="font-serif font-medium text-[26px] md:text-[34px] leading-[1.1] mt-2 mb-3">
              {product.name}
            </h2>
            <div className="flex items-center gap-3 mb-3">
              <p className="font-serif text-xl font-medium text-ivar-dark m-0">
                {money(product.price)}
              </p>
            </div>
            <p className="text-[#68766f] leading-[1.7] font-light text-sm">
              {product.desc}
            </p>

            {product.ingredients?.length > 0 && (
              <div className="mt-5">
                <h4 className="text-[10px] tracking-[0.2em] uppercase text-[#6b8276] font-semibold mb-2">
                  {label}
                </h4>
                <ul className="flex flex-wrap gap-2">
                  {product.ingredients.map((item) => (
                    <li
                      key={item}
                      className="text-xs bg-[#ECECE9] text-ivar-text rounded-full px-3 py-1.5"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex items-center gap-4 mt-6 flex-wrap">
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex justify-center items-center rounded-full px-7 py-3 font-semibold text-[13px] tracking-wide cursor-pointer border border-transparent bg-ivar-dark text-white transition-colors duration-200 hover:bg-ivar-green"
              >
                Enquire Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
