import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Syed Konain Nasir | Full-Stack Developer",
  description: "Full-Stack Developer specializing in Next.js, TypeScript, and modern web architectures. Building scalable production applications including dashboards, e-commerce flows, and AI-powered solutions.",
  keywords: ["Full-Stack Developer", "Next.js", "TypeScript", "React", "Node.js", "Portfolio"],
  authors: [{ name: "Syed Konain Nasir" }],
  openGraph: {
    title: "Syed Konain Nasir | Full-Stack Developer",
    description: "Full-Stack Developer specializing in Next.js, TypeScript, and modern web architectures.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
