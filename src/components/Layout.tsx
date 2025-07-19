import Navbar from "./Navbar";
import Footer from "./Footer";
import SmoothScroll from "./SmoothScroll";
import FloatingParticles from "./FloatingParticles";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-background text-foreground relative">
        <FloatingParticles />
        <div className="relative z-10">
          <Navbar />
          <main className="pt-16">
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </SmoothScroll>
  );
}
