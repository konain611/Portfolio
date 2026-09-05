import DeveloperHome from "@/components/DeveloperHome";
import Link from "next/link";

const pages = [
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
  { href: "/playground", label: "Playground" },
];

export default function DetailedPage() {
  return (
    <DeveloperHome />
  );
}
