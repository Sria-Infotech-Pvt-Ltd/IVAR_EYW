"use client";

import { buildWhatsAppLink } from "../lib/whatsapp";
import { useCart } from "../context/CartContext";

export default function FloatingWhatsApp() {
  const link = buildWhatsAppLink("Hi Ivar 🌿 I'd like to place an order.");
  const { count } = useCart();

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className={`fixed ${count > 0 ? "bottom-[128px]" : "bottom-[76px]"} md:bottom-6 right-5 z-40 size-14 rounded-full bg-[#25D366] text-white flex items-center justify-center text-2xl shadow-xl hover:scale-105 transition-transform`}
    >
      💬
    </a>
  );
}
