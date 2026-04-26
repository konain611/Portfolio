import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import { CodeBackground } from "@/components/CodeBackground";
import ProCursor from "@/components/LinuxCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
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
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}>
      <body id="top" className="min-h-full flex flex-col font-sans">
        <ProCursor />
        <CodeBackground />
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <ScrollToTopButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
