import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { ReactNode } from "react";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function GlobalLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className={`container mx-auto px-4 md:px-2 lg:px-0 ${inter.className}`}
    >
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
