import { FaEnvelope } from "react-icons/fa6"
import MagicButton from "./ui/MagicButton"
import { socialMedia } from "@/data";
import Image from "next/image";

const About = () => {

  return (
    <footer className="w-full mt-20 lg:mt-20 mb-[100px] md:mb-5 sm:pb-10 flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">Feel free to
            <span className="text-brandAccent"> reach out</span> to me
        </h1>
        <p className="text-white-200 md:mt-10 my-10 text-center font-sourceSans text-lg">I&apos;m always interested in meeting new people</p>
        <a href="mailto:tjalfeholmquist@gmail.com">
        <MagicButton
        title="Send me an email"
        icon={<FaEnvelope/>}
        position="right"
        otherClasses="bg-brandAccent"
        />
        </a>
        <div className="flex mt-16 md:flex-row flex-col items-center justify-center">
            <div className="flex items-center md:gap-3 gap-6">
                {socialMedia.map((profile) => (
                    <a href={profile.link} key={profile.id} className="w-10 h-10 mt-2 cursor-pointer flex items-center justify-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-brandBackgroundGrey rounded-lg border border-black-300 hover:bg-brandBackgroundBlack">
                        <Image src={profile.img} alt={profile.alt} width={20} height={20}/>
                    </a>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default About