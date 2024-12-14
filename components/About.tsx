import { CardGradient } from "./ui/CardGradient";
import Image from "next/image";
import FloatingIllustration from "./ui/floatingIllustration";

const About = () => {

  return (
    <section className="w-full mb-[100px] md:mb-5 sm:pb-10 bg-dot-white/[0.1]" id="contact">
        <div className="flex relative flex-col items-center">
            <CardGradient/>
            {/* Opacity hidden images reveal on hover - not visible on mobile */}
            <div id="right-hand" className="hidden lg:block opacity-0 w-40 h-40 top-80 self-start absolute z-50">
                <Image className="rounded-3xl" src="/right_hand.webp" alt="hand" width={150} height={150}/>
            </div>
            <div id="left-hand" className="hidden lg:block opacity-0 top-80 right-20 w-40 h-40 self-end absolute z-50">
                <Image className="rounded-3xl" src="/left_hand.webp" alt="hand" width={150} height={150}/>
            </div>
            <FloatingIllustration />
        </div>
    </section>
  )
}

export default About