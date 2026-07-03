import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center">
      <div className="max-w-xl rounded-2xl border-2 border-(--border)/40 bg-background p-8 shadow-2xl">
        <h1 className="text-xl font-semibold uppercase tracking-[0.2em] text-(--accent)">
          404 Page not found
        </h1>
       
      </div>
      <Footer />
    </div>
  );
}
