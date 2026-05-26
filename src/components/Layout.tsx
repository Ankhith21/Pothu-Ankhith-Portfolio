import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen relative bg-navy-950 text-navy-100 selection:bg-navy-500/30 selection:text-white">
      {/* Universal navigation bar (Sticky header) */}
      <Navbar />

      {/* Primary responsive page content */}
      <main className="flex-grow pt-20">
        <div className="w-full">
          {children}
        </div>
      </main>

      {/* Universal footer with active connections */}
      <Footer />
    </div>
  );
}
