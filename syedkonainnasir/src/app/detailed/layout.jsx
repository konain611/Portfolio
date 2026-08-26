import Footer from "@/components/Footer";

export default function DetailedLayout({ children }) {
  return (
    <div className="min-h-screen">
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
}
