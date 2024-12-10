import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

export default function Home() {
    return (
      <div className="relative w-full bg-brandBackgroundBlack flex 
      flex-col justify-center items-center overflow-clip">
        <FloatingNav navItems={navItems} />
        <div className="w-6/12">
            blog
        </div>
        <section className="w-6/12">
            blog
        </section>
      </div>
    );
  }