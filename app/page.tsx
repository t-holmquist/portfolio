import Experience from "@/components/Experience";
import About from "@/components/About";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-brandBackgroundBlack flex justify-center items-center 
    flex-col mx-auto overflow-clip sm:px-16 px-5">
      <div className="max-w-7xl xl:max-w-[100rem] w-full">
        <FloatingNav
        navItems={navItems}
        />
        <Hero/>
        <Grid/>
        <RecentProjects/>
        <Experience/>
        <About/>
        <Footer />
      </div>
    </main>
  );
}
