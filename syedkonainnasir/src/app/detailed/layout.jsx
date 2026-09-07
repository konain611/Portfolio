'use client';

import { useEffect } from "react";
import Footer from "@/components/Footer";

export default function DetailedLayout({ children }) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    window.history.scrollRestoration = "manual";
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  return (
    <div className="min-h-screen">
      <main className="grow md:ml-16">{children}</main>
      <Footer />
    </div>
  );
}
