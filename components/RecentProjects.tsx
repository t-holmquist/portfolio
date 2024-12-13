import { projects } from "@/data"
import { ProjectCard } from "./ui/ProjectCard"
import { FaEye, FaLocationArrow } from "react-icons/fa6"
import Image from "next/image"

const RecentProjects = () => {
  return (
    <div id="projects" className="mt-20 lg:mt-40">
        <h1 className="heading">
            Some of my {' '}
            <span className="text-brandAccent">work</span>
        </h1>
        <div className="flex flex-col justify-center mt-6 max-w-lg">
            <p className="text-white-200 font-sourceSans">
                These are some projects I have built using the React ecosystem. 
                The web apps are configured using the modern metaframework Next.js to get improved performance and dev experience.
            </p>
            <div className="flex items-center mt-2">
                <p className="text-white-200 font-sourceSans">Take a look</p>
                <FaEye className="ml-2 text-white-200"/>
                <FaEye className="ml-2 text-white-200"/>
            </div>
        </div>
        <div className="flex xl:flex-row flex-col items-center justify-center p-4 gap-x-24 gap-y-8 md:gap-y-16 lg:gap-y-8 mt-16">
            {projects.map(({ id, title, des, img, iconLists, link }) => (
                <div key={id} className="flex lg:h-[41] lg:w-[570px] items-center justify-center lg:min-h-[32.5] w-[80vw]">
                    <ProjectCard id={id} title={link} href={link}>
                        <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden lg:h-[40vh] h-[30vh] mb-10">
                            <Image src={img} alt={title} className="z-10 rounded-xl" width={1163} height={720}/>
                        </div>
                        <h1 className="font-bold font-oswald lg:text-2xl md:text-xl text-base line-clamp-1">
                            {title}
                        </h1>
                        <p className="lg:text-xl font-sourceSans lg:font-normal font-light text-sm line-clamp-2">
                            {des}
                        </p>

                        <div className="flex items-center justify-between mt-7 mb-3">
                            <div className="flex items-center">
                                <p className="text-white-200 mr-2 text-sm font-sourceSans">Build with: </p>
                                {iconLists.map((icon, index) => (
                                    <div style={{
                                        transform: `translateX(-${5 * index * 2}px)
                                        `}} key={icon} className="flex items-center justify-center border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8">
                                        <Image src={icon} alt={icon} className="p-[6px]" width={40} height={40}/>
                                    </div>
                                ))}
                            </div>
                            
                            <div className="flex justify-center items-center">
                                <p className="hidden sm:flex lg:text-xl md:text-xs text-sm text-brandTextWhite font-sourceSans">See case</p>
                                <FaLocationArrow className="ms-3" color="#CBACF9"/>
                            </div>
                        </div>
                    </ProjectCard>
                </div>
            ))}
        </div>
    </div>
  )
}

export default RecentProjects