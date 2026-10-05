"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import IvarLoader from "./IvarLoader";

// Next's built-in loading.js only fires when a route segment is genuinely
// still fetching/rendering. Every page here is client-rendered with no
// server delay, so that gap never exists and loading.js never gets a
// chance to paint. This shows a branded loader the instant an internal
// link is clicked, and hides it once the route has actually changed.
export default function RouteTransitionOverlay() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const prevPathname = useRef(pathname);
  const pendingShowTimer = useRef(null);

  useEffect(() => {
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname;
      clearTimeout(pendingShowTimer.current);
      setVisible(false);
    }
  }, [pathname]);

  useEffect(() => {
    function onClick(e) {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const anchor = e.target.closest("a");
      if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) return;
      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return;

      let url;
      try {
        url = new URL(anchor.href, window.location.href);
      } catch {
        return;
      }
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname) return;

      // Only show the loader for navigations that actually take a moment —
      // showing it unconditionally flashed a full white screen on every
      // click, even instant ones, which looked like navigation was broken.
      const t = setTimeout(() => setVisible(true), 200);
      pendingShowTimer.current = t;
    }
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
      clearTimeout(pendingShowTimer.current);
    };
  }, []);

  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => setVisible(false), 4000);
    return () => clearTimeout(t);
  }, [visible]);

  if (!visible) return null;
  return <IvarLoader fullScreen size="lg" label="Loading…" />;
}
