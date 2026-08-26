"use client";

import Footer from "@/components/Footer";

export default function NotFound() {
  const goBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      window.history.back();
      return;
    }

    window.location.href = "/";
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center">
      <div className="max-w-xl rounded-2xl border-2 border-(--border)/40 bg-background p-8 shadow-2xl">
        <h1 className="text-xl font-semibold uppercase tracking-[0.2em] text-(--accent)">
          404 Page not found
        </h1>

        <button
          type="button"
          onClick={goBack}
          className="mt-6 inline-flex items-center justify-center rounded-md cursor-pointer border border-(--accent) bg-(--accent) px-8 py-2 text-sm font-medium text-background transition hover:opacity-90"
        >
          Go back
        </button>
      </div>
      <Footer />
    </div>
  );
}
