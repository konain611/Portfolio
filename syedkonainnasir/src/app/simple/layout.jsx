export default function SimpleLayout({ children }) {
  return (
    <div className="min-h-screen">
      <main className="grow">{children}</main>
      {/* <Footer /> */}
    </div>
  );
}
