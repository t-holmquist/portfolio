import ProjectDeeperDive from "@/components/ProjectDeeperDive";
import ProjectSummary from "@/components/ProjectSummary";
import { FloatingNav } from "@/components/ui/FloatingNav";
import SketchToDesign from "@/components/ui/SketchToDesign";
import { Spotlight } from "@/components/ui/Spotlight";
import { navItems } from "@/data";

export default function Home() {
    return (
      <div className="relative min-h-screen w-full bg-brandBackgroundBlack flex 
      flex-col justify-start items-center overflow-clip">

        {/* Illustrations for background in here */}

        <Spotlight className='-top-40 -right-10 md:-right-32 md:-top-20 h-screen' fill='#86B2CE'/>
        <FloatingNav navItems={navItems} />
        <ProjectSummary className="w-11/12 lg:w-6/12 mt-16 z-10"/>
        <ProjectDeeperDive className="w-11/12 md:w-6/12">
          <SketchToDesign 
              sketchLink="/sketches/nespressoflow.png"
              designLink="/sketches/nespressoflow_finaldesign.png"
              title="Guide to return capsules"
          />
        </ProjectDeeperDive>
      </div>
    );
  }