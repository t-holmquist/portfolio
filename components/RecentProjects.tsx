import { projects } from "@/data"
import { PinContainer } from "./ui/3d-pin"
import { FaEye, FaLocationArrow } from "react-icons/fa6"
import Image from "next/image"

const RecentProjects = () => {
  return (
    <div id="projects" className="py-20">
        <h1 className="heading">
            Project {' '}
            <span className="text-[#877EFF]">showcase</span>
        </h1>
        <div className="flex flex-col justify-center items-center mt-10">
            <p className="text-white-200">
                This project utilizes the latest web development technologies
            </p>
            <div className="flex items-center">
                <p className="text-white-200">Take a look</p>
                <FaEye className="ml-2 text-white-200"/>
                <FaEye className="ml-2 text-white-200"/>
            </div>
        </div>
        <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-14 md:mt-24">
            {projects.map(({ id, title, des, img, iconLists, link }) => (
                <div key={id} className="flex sm:h-[41] h-[32rem] sm:w-[570px] items-center justify-center lg:min-h-[32.5] w-[80vw]">
                    <PinContainer title={link} href={link}>
                        <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                            <Image src={img} alt={title} className="z-10 w-full h-full" width={500} height={500}/>
                        </div>
                        <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                            {title}
                        </h1>
                        <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                            {des}
                        </p>

                        <div className="flex items-center justify-between mt-7 mb-3">
                            <div className="flex items-center">
                                <p className="text-white-200 mr-2">Built with: </p>
                                {iconLists.map((icon, index) => (
                                    <div style={{
                                        transform: `translateX(-${5 * index * 2}px)
                                        `}} key={icon} className="flex items-center justify-center border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8">
                                        <Image src={icon} alt={icon} className="p-2" width={40} height={40}/>
                                    </div>
                                ))}
                            </div>
                            
                            <div className="flex justify-center items-center">
                                <p className="flex lg:text-xl md:text-xs text-sm text-[#877EFF]">Live site</p>
                                <FaLocationArrow className="ms-3" color="#CBACF9"/>
                            </div>
                        </div>
                    </PinContainer>
                </div>
            ))}
        </div>
    </div>
  )
}

export default RecentProjects