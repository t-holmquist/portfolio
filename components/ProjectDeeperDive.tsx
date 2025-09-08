import { cn } from "@/utils/cn";
import Image from "next/image"
import SketchToDesign from "./ui/SketchToDesign";
import { ProjectData } from "@/data/projectData";
import { Video } from "./ui/video";
import Link from "next/link";
import MagicButton from "./ui/MagicButton";
import PagetransitionSola from "./ui/pagetransitionSola";

const ProjectDeeperDive = ( { className, projectId } : 
    {
        className?: string;
        projectId: number;
    }
) => {



    return (
        <section className={cn("space-y-6 mt-6", className)}>
            {/* A deeper dive section */}
            <div className="relative overflow-hidden flex flex-col justify-center items-center border border-slate-600 rounded-xl p-4 gap-2 custom-blur bg-gradient-to-r from-brandSecondary/20 to-brandAccent/20 ">
                <h2 className="font-oswald text-4xl font-bold">A deeper dive</h2>
                <p className="font-sourceSans">And a few project highlights</p>
                <Image src={"/floatingillustrations/line.svg"} width={200} height={200} alt="illustration" className="absolute left-0 opacity-10"/>
                <Image src={"/floatingillustrations/diamond.svg"} width={200} height={200} alt="illustration" className="absolute -right-20 md:right-0 opacity-10"/>
            </div>
            {/* Content */}
            <div className="custom-blur bg-gradient-to-r from-brandSecondary/20 to-brandAccent/20 border border-slate-600 rounded-xl flex flex-col items-center justify-center p-6 md:py-8 md:px-10 gap-12">
                <div className="space-y-2 self-start">
                    <h3 className="font-oswald text-2xl font-bold">{ProjectData[projectId].deeperDiveContent.aboutProjectHeader}</h3>
                    <p className="font-sourceSans text-lg">{ProjectData[projectId].deeperDiveContent.aboutProjectDescription}</p>
                </div>
                {projectId == 1 && (
                    <>
                        <div className="md:p-8 rounded-xl">
                            <Image src={"/caseAssets/nespresso/brainstorm.webp"} width={600} height={450} alt="illustration" className="rounded-xl"/>
                        </div>
                        <div className="w-full space-y-2 self-start">
                            <h3 className="font-oswald text-2xl font-bold">My process</h3>
                            <p className="font-sourceSans text-lg">
                                Initially I was considering if Nespresso could have invented a new reusable capsule that could be swapped at a local return point.
                                Another idea was to upgrade their machines with a recyclable feature to refill a reusable capsule, so the user only had to buy the coffee
                                and Nespresso didn&apos;t have to produce all those aluminium capsules. Ultimately I decided that it would be too unrealistic, so instead
                                I chose to promote their existing solution in a better may with the introduction of the aforementioned Nespresso points reward system.
                            </p>
                        </div>
                    </>
                )}
                {projectId == 0 && (
                    <>
                        <div className="md:p-8 rounded-xl">
                            <Image src={"/caseAssets/portfolio/projectmanagement.webp"} width={600} height={450} alt="illustration" className="rounded-xl"/>
                        </div>
                        <div className="w-full space-y-2 self-start">
                            <h3 className="font-oswald text-2xl font-bold">My design process</h3>
                            <p className="font-sourceSans text-lg">
                                I used Trello as my tool for project management as it fits the size of this project very well.
                                Figma was of course an essential tool for brainstorming and making my designs come to live before diving into in development.
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
                    <h3 className="font-oswald text-2xl font-bold">{ProjectData[projectId].deeperDiveContent.sketchToDesignHeader}</h3>
                    <p className="font-sourceSans text-lg">{ProjectData[projectId].deeperDiveContent.sketchToDesignDescription}</p>
                </div>
                {projectId == 0 && (
                    <>
                        <div className="md:p-8 rounded-xl">
                            <Image src={"/caseAssets/portfolio/dataflow.webp"} width={600} height={450} alt="illustration" className="rounded-xl"/>
                        </div>
                        <div className="w-full space-y-2 self-start">
                            <h3 className="font-oswald text-2xl font-bold">Dataflow</h3>
                            <p className="font-sourceSans text-lg">
                                I created the data structure above to serve the different projects with the data needed to dynamically render a project page. I then only have one page that
                                renders all the different data instead of one page per project, which would be very repetitive and redundant. Since I only plan to show my top 3 projects, I didn&apos;t
                                worry about setting up a CMS, because this way obviously doesn&apos;t scale very well, if there are too many projects. It is also an efficient way of retrieving data,
                                since I have access to the project id and object property, so it will always have a constant runtime.
                            </p>
                        </div>
                    </>
                )}
                {projectId < 2 && (
                    <>
                        <Video
                        key={projectId}
                        elementHighlightLink={ProjectData[projectId].deeperDiveContent.elementHightlightLink}
                        elementHighlightFallbackLink={ProjectData[projectId].deeperDiveContent.elementHightlightFallBackLink}
                        thumbnail={ProjectData[projectId].deeperDiveContent.thumbnail}
                        />
                        <div className="w-full space-y-2 self-start">
                            <h3 className="font-oswald text-2xl font-bold">{ProjectData[projectId].deeperDiveContent.elementHightlightHeader}</h3>
                            <p className="font-sourceSans text-lg">{ProjectData[projectId].deeperDiveContent.elementHighlightDescription}</p>
                        </div>
                    </>
                )}
                {/* Page transition SOLA */}
                {projectId == 2 && (
                <>
                    <PagetransitionSola />
                    <div className="w-full space-y-2 self-start">
                            <h3 className="font-oswald text-2xl font-bold">Custom page transition</h3>
                            <p className="font-sourceSans text-lg">I made a page transition with the setTimeout webAPI. It works by adding a CSS-animation to the body HTML element to animate the color change, 
                                then setTimeout for a reasonable amount of ms, change the URL-route and remove the animation from the body.</p>
                    </div>
                </>
                )}
                {projectId == 1 && (
                    <>
                        <Video
                        key={projectId}
                        elementHighlightLink={"/caseAssets/nespresso/nespresso.webm"}
                        elementHighlightFallbackLink={"/caseAssets/nespresso/nespresso.mp4"}
                        thumbnail={"/caseAssets/nespresso/hero.webp"}
                        />
                        <div className="w-full space-y-2 self-start">
                            <h3 className="font-oswald text-2xl font-bold">Landingpage</h3>
                            <p className="font-sourceSans text-lg">The video above gives a quick view of the landingpage design and the different features that we have implemented.</p>
                        </div>
                    </>
                )}
                <Image src={ProjectData[projectId].deeperDiveContent.illustrationLink} width={500} height={350} alt="illustration" className="rounded-xl"/>
                <div className="w-full space-y-2 self-start">
                    <h3 className="font-oswald text-2xl font-bold">{ProjectData[projectId].deeperDiveContent.illustrationHeader}</h3>
                    <p className="font-sourceSans text-lg">{ProjectData[projectId].deeperDiveContent.illustrationDescription}</p>
                </div>
                <Link href={"/cases"} className="relative my-6">
                    <MagicButton
                    title="See another project"
                    otherClasses="border border-brandBorder"
                    >
                        <Image src={"/floatingillustrations/blackstar.svg"} alt="illustration" width={15} height={15} className="absolute -right-8 pointer-events-none"/>
                        <Image src={"/floatingillustrations/blackline.svg"} alt="illustration" width={15} height={15} className="absolute -left-8 pointer-events-none"/>
                        <Image src={"/floatingillustrations/blackdiamond.svg"} alt="illustration" width={15} height={15} className="absolute -bottom-4 -left-4 pointer-events-none"/>
                    </MagicButton>
                </Link>
            </div>
        </section>
    );

}


export default ProjectDeeperDive;