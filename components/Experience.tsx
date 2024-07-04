import { workExperience } from "@/data"
import { Button } from "./ui/MovingBorders"
import Image from "next/image"

const Experience = () => {
  return (
    <div id="experience" className="lg:py-14">
        <h1 className="heading">
            My
            <span className="text-[#877EFF]"> qualifications</span>
        </h1>
        <div className="flex justify-center mt-10">
            <p className="text-white-200">
                An overview of my experience and certifications
            </p>
        </div>
        <div className="w-full mt-20 grid lg:grid-cols-4 grid-cols-1 gap-10">
            {workExperience.map((card) => (
                <Button 
                key={card.id}
                duration={Math.floor(Math.random() * 14000 + 6000)}
                borderRadius="1.75rem"
                className="flex-1 text-white border-neutral-200 dark:border-slate-800">
                    <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                        <div className="flex items-center rounded-lg p-3 bg-slate-800 border border-slate-700">
                            <p className="text-white-100">{card.year}</p>
                        </div>
                        <div className="lg:ms-5">
                            <div className="flex items-center gap-3">
                                <h1 className="text-start text-xl md:text-2xl font-bold">
                                    {card.title}
                                </h1>
                                {card.hasCertificate && (
                                    <p className="px-1 rounded-lg text-[#877EFF] bg-slate-900 border border-slate-700">Certificate</p>
                                )}
                            </div>
                            <p className="text-start text-white-100 mt-3 font-semibold">
                                {card.desc}
                            </p>
                        </div>
                    </div>
                </Button>
            ))}
        </div>
    </div>
  )
}

export default Experience