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
                <div className="space-y-2 self-start">
                    <h3 className="font-oswald text-xl font-bold">{ProjectData[projectId].deeperDiveContent.aboutProjectHeader}</h3>
                    <p className="font-sourceSans text-lg">{ProjectData[projectId].deeperDiveContent.aboutProjectDescription}</p>
                </div>
                {projectId == 1 && (
                    <>
                        <div className="md:p-8 rounded-xl">
                            <Image src={"/caseImages/ludovico/brainstorm.webp"} width={450} height={450} alt="illustration" className="rounded-xl"/>
                        </div>
                        <div className="w-full space-y-2 self-start">
                            <h3 className="font-oswald text-xl font-bold">Our process</h3>
                            <p className="font-sourceSans text-lg">
                                Above is a quick view of our brainstorm who led to artist and focus on sustainability.
                                Initially we also wanted to an anniversary concert tour to be part of the campaign. Ultimately
                                we felt that this idea grabbed to much focus from the Vinyl product, which was the main
                                product to purchase. The landingpage also became cluttered with concerts and losts it simplicity
                                with two competing actions the user should take - buy the vinal or buy the concert.
                            </p>
                        </div>
                    </>
                )}
                {projectId == 3 && (
                    <>
                        <div className="md:p-8 rounded-xl">
                            <Image src={"/caseImages/nespresso/brainstorm.webp"} width={600} height={450} alt="illustration" className="rounded-xl"/>
                        </div>
                        <div className="w-full space-y-2 self-start">
                            <h3 className="font-oswald text-xl font-bold">Our process</h3>
                            <p className="font-sourceSans text-lg">
                                Initially we considered that Nespresso could have invented a new reusable capsule that could be swapped at a local return points.
                                Another idea was to upgrade their machines with a recyclable feature to refill a reusable, so the user only had to buy the coffee
                                and Nespresso didn&apos;t have to produce all those aluminium capsules. Ultimately we decided that it would be too unrealistic unviable, so instead
                                we chose to promote their existing solution in a better may with the introduction of the aforementioned Nespresso points reward system.
                            </p>
                        </div>
                    </>
                )}
                <SketchToDesign 
                sketchLink={ProjectData[projectId].deeperDiveContent.sketchLink}
                designLink={ProjectData[projectId].deeperDiveContent.designLink}
                title={ProjectData[projectId].deeperDiveContent.sketchToDesignTitle}
                size={ProjectData[projectId].deeperDiveContent.sketchToDesignSize}
                />
                <div className="w-full space-y-2 self-start">
                    <h3 className="font-oswald text-xl font-bold">{ProjectData[projectId].deeperDiveContent.sketchToDesignHeader}</h3>
                    <p className="font-sourceSans text-lg">{ProjectData[projectId].deeperDiveContent.sketchToDesignDescription}</p>
                </div>
                {projectId > 0 && (
                    <>
                        <Video
                        key={projectId}
                        elementHighlightLink={ProjectData[projectId].deeperDiveContent.elementHightlightLink}
                        elementHighlightFallbackLink={ProjectData[projectId].deeperDiveContent.elementHightlightFallBackLink}
                        thumbnail={ProjectData[projectId].deeperDiveContent.thumbnail}
                        videowidth={ProjectData[projectId].deeperDiveContent.videowidth}
                        />
                        <div className="w-full space-y-2 self-start">
                            <h3 className="font-oswald text-xl font-bold">{ProjectData[projectId].deeperDiveContent.elementHightlightHeader}</h3>
                            <p className="font-sourceSans text-lg">{ProjectData[projectId].deeperDiveContent.elementHighlightDescription}</p>
                        </div>
                    </>
                )}
                {projectId == 3 && (
                    <>
                        <Video
                        key={projectId}
                        elementHighlightLink={"/caseImages/nespresso/nespresso.webm"}
                        elementHighlightFallbackLink={"/caseImages/nespresso/nespresso.mp4"}
                        thumbnail={"/caseImages/nespresso/hero.webp"}
                        />
                        <div className="w-full space-y-2 self-start">
                            <h3 className="font-oswald text-xl font-bold">{ProjectData[projectId].deeperDiveContent.elementHightlightHeader}</h3>
                            <p className="font-sourceSans text-lg">{ProjectData[projectId].deeperDiveContent.elementHighlightDescription}</p>
                        </div>
                    </>
                )}
                <Image src={ProjectData[projectId].deeperDiveContent.illustrationLink} width={500} height={350} alt="illustration" className="rounded-xl"/>
                <div className="w-full space-y-2 self-start">
                    <h3 className="font-oswald text-xl font-bold">{ProjectData[projectId].deeperDiveContent.illustrationHeader}</h3>
                    <p className="font-sourceSans text-lg">{ProjectData[projectId].deeperDiveContent.illustrationDescription}</p>
                </div>
            </div>
        </section>
    );

}


export default ProjectDeeperDive;