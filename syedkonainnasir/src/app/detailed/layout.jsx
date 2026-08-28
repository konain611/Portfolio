import Footer from "@/components/Footer";

export default function DetailedLayout({ children }) {
  return (
    <div className="min-h-screen">
      <main className="grow md:ml-16">{children}</main>
      <Footer />
    </div>
  );
}
