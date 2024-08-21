import { FaEnvelope } from "react-icons/fa6"
import MagicButton from "./ui/MagicButton"
import { socialMedia } from "@/data";
import { BackgroundGradientDemo } from "./ui/CardGradient";
import Image from "next/image";

const Footer = () => {

    let currentYear = new Date().getFullYear();

  return (
    <footer className="w-full mb-[100px] md:mb-5 sm:pb-10" id="contact">
        <div className="flex flex-col items-center dark:bg-dot-white/[0.2]">
            <BackgroundGradientDemo/>
            {/* Opacity hidden images reveal on hover - not visible on mobile */}
            <div id="right-hand" className="hidden lg:block opacity-0 w-40 h-40 ml-6 mt-20 self-start absolute z-50">
                <Image className="rounded-3xl" src="/right_hand.webp" alt="hand" width={150} height={150}/>
            </div>
            <div id="left-hand" className="hidden lg:block opacity-0 mt-20 mr-20 w-40 h-40 self-end absolute z-50">
                <Image className="rounded-3xl" src="/left_hand.webp" alt="hand" width={150} height={150}/>
            </div>
            <h1 className="mt-28 heading lg:max-w-[45vw]">Feel free to
                <span className="text-brandPrimary"> reach out</span> to me
            </h1>
            <p className="text-white-200 md:mt-10 my-10 text-center">I&apos;m always interested in meeting new people</p>
            <a href="mailto:tjalfeholmquist@gmail.com">
            <MagicButton
            title="Let's get in touch"
            icon={<FaEnvelope/>}
            position="right"
            />
            </a>
        </div>

        <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
            <p className="text-sm md:font-normal font-light text-white-200">Copyright © {currentYear} Tjalfe Holmquist</p>
            <div className="flex items-center md:gap-3 gap-6">
                {socialMedia.map((profile) => (
                    <a href={profile.link} key={profile.id} className="w-10 h-10 mt-2 cursor-pointer flex items-center justify-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                        <Image src={profile.img} alt={profile.alt} width={20} height={20}/>
                    </a>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer