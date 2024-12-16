import { cn } from "@/utils/cn";
import Image from "next/image"
import SketchToDesign from "./ui/SketchToDesign";
import { ProjectData } from "@/data/projectData";
import { Video } from "./ui/video";

const ProjectDeeperDive = ( { className, projectId } : 
    {
        className?: string;
        projectId: number;
    }
) => {

    return (
        <section className={cn("space-y-6 mt-6", className)}>
            {/* A deeper dive section */}
            <div className="relative overflow-hidden flex flex-col justify-center items-center border border-brandBorder rounded-xl p-4 gap-2 bg-brandBackgroundBlack">
                <h2 className="font-oswald text-4xl font-bold">A deeper dive</h2>
                <p className="font-sourceSans">And a few project highlights</p>
                <Image src={"/floatingillustrations/line.svg"} width={200} height={200} alt="illustration" className="absolute left-0 opacity-10"/>
                <Image src={"/floatingillustrations/diamond.svg"} width={200} height={200} alt="illustration" className="absolute -right-20 md:right-0 opacity-10"/>
            </div>
            {/* Content */}
            <div className="bg-brandBackgroundBlack border border-brandBorder rounded-xl flex flex-col items-center justify-center p-6 md:py-8 md:px-10 gap-12">
                <div className="space-y-2">
                    <h3 className="font-oswald text-xl font-bold">{ProjectData[projectId].deeperDiveContent.aboutProjectHeader}</h3>
                    <p className="font-sourceSans text-lg">{ProjectData[projectId].deeperDiveContent.aboutProjectDescription}</p>
                </div>
                <SketchToDesign 
                sketchLink={ProjectData[projectId].deeperDiveContent.sketchLink}
                designLink={ProjectData[projectId].deeperDiveContent.designLink}
                title={ProjectData[projectId].deeperDiveContent.sketchToDesignTitle}
                />
                <div className="w-full space-y-2">
                    <h3 className="font-oswald text-xl font-bold">{ProjectData[projectId].deeperDiveContent.sketchToDesignHeader}</h3>
                    <p className="font-sourceSans text-lg">{ProjectData[projectId].deeperDiveContent.sketchToDesignDescription}</p>
                </div>
                {projectId == 3 && (
                    <>
                        <Video
                        key={projectId}
                        elementHighlightLink={ProjectData[projectId].deeperDiveContent.elementHightlightLink}
                        elementHighlightFallbackLink={ProjectData[projectId].deeperDiveContent.elementHightlightFallBackLink}
                        thumbnail={ProjectData[projectId].deeperDiveContent.thumbnail}
                        />
                        <div className="w-full space-y-2">
                            <h3 className="font-oswald text-xl font-bold">{ProjectData[projectId].deeperDiveContent.elementHightlightHeader}</h3>
                            <p className="font-sourceSans text-lg">{ProjectData[projectId].deeperDiveContent.elementHighlightDescription}</p>
                        </div>
                    </>
                )}
                <div className="p-8 bg-brandSecondary rounded-xl">
                    <Image src={ProjectData[projectId].deeperDiveContent.illustrationLink} width={250} height={250} alt="illustration" className="rounded-xl"/>
                </div>
                <div className="w-full space-y-2">
                    <h3 className="font-oswald text-xl font-bold">{ProjectData[projectId].deeperDiveContent.illustrationHeader}</h3>
                    <p className="font-sourceSans text-lg">{ProjectData[projectId].deeperDiveContent.illustrationDescription}</p>
                </div>
            </div>
        </section>
    );

}


export default ProjectDeeperDive;