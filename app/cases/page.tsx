import Footer from "@/components/Footer";
import ProjectSummary from "@/components/ProjectSummary";
import CaseIllustration from "@/components/ui/caseIllustration";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { Spotlight } from "@/components/ui/Spotlight";
import { navItems } from "@/data";

export default function Home() {
    return (
      <div className="relative min-h-screen w-full bg-brandBackgroundBlack flex 
      flex-col justify-start items-center overflow-clip">
        <CaseIllustration />
        <Spotlight className='-top-40 -right-10 md:-right-32 md:-top-20 h-screen' fill='#86B2CE'/>
        <FloatingNav navItems={navItems} />
        <ProjectSummary className="w-11/12 lg:w-7/12 xl:w-6/12 mt-12 z-10"/>
        <Footer />
      </div>
    );
  }