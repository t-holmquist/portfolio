import ProjectDeeperDive from "@/components/ProjectDeeperDive";
import ProjectSummary from "@/components/ProjectSummary";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

export default function Home() {
    return (
      <div className="relative min-h-screen w-full bg-brandBackgroundBlack flex 
      flex-col justify-start items-center overflow-clip">
        <FloatingNav navItems={navItems} />
        <ProjectSummary className="w-10/12 md:w-6/12 mt-16"/>
        <ProjectDeeperDive className="w-6/12 border border-red-500"/>
      </div>
    );
  }