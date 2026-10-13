"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  {
    href: "/",
    label: "Home",
    icon: (active) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 11.5 12 4l8 7.5"
          stroke={active ? "#064C35" : "#8a938c"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 10v9a1 1 0 0 0 1 1h3v-5h4v5h3a1 1 0 0 0 1-1v-9"
          stroke={active ? "#064C35" : "#8a938c"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    href: "/shop",
    label: "Shop",
    icon: (active) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 8h16l-1.2 10.2a2 2 0 0 1-2 1.8H7.2a2 2 0 0 1-2-1.8L4 8Z"
          stroke={active ? "#064C35" : "#8a938c"}
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M8 8V6a4 4 0 0 1 8 0v2"
          stroke={active ? "#064C35" : "#8a938c"}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    href: "/cart",
    label: "Cart",
    icon: (active) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M3 4h2l2.4 12.1a2 2 0 0 0 2 1.6h7.2a2 2 0 0 0 2-1.6L20 8H6"
          stroke={active ? "#064C35" : "#8a938c"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="9" cy="20" r="1.4" fill={active ? "#064C35" : "#8a938c"} />
        <circle cx="17" cy="20" r="1.4" fill={active ? "#064C35" : "#8a938c"} />
      </svg>
    ),
  },
  {
    href: "/contact",
    label: "Account",
    icon: (active) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle
          cx="12"
          cy="8"
          r="3.4"
          stroke={active ? "#064C35" : "#8a938c"}
          strokeWidth="2"
        />
        <path
          d="M5 20c1.2-3.6 4-5.4 7-5.4s5.8 1.8 7 5.4"
          stroke={active ? "#064C35" : "#8a938c"}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function MobileTabBar() {
  const pathname = usePathname();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40">
      <nav className="bg-white border-t border-[#e8e5da] flex items-stretch pb-[env(safe-area-inset-bottom)]">
        {tabs.map((tab) => {
          const active =
            tab.href === "/" ? pathname === "/" : pathname.startsWith(tab.href);
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className="flex-1 flex flex-col items-center justify-center gap-1 py-2.5 relative"
            >
              {tab.icon(active)}
              <span
                className={`text-[10px] tracking-wide ${
                  active ? "text-ivar-dark font-semibold" : "text-[#8a938c]"
                }`}
              >
                {tab.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
