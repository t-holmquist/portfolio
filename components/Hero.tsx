import { FaEnvelope, FaWandMagicSparkles } from 'react-icons/fa6'
import MagicButton from './ui/MagicButton'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import Link from 'next/link'
import MagicSecondaryButton from './ui/MagicSecondaryButton'


const Hero = () => {
  return (
    <div>
        <div className='pb-20'>
        <Spotlight className='-top-40 -right-10 md:-right-32 md:-top-20 h-screen' fill='#877EFF'/>
      
        </div>
        {/* Grid background */}
        <div className="h-screen w-full dark:bg-black-100 bg-white  
         flex items-center justify-center absolute top-0 left-0">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
        </div>

        <div className='flex relative mt-8 mb-20 z-10'>
          <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col gap-6'>
            <TextGenerateEffect 
            className='text-[40px] md:text-5xl lg:text-5xl'
            words='Need help designing & implementing front-end solutions?'
            />
            <p className='md:tracking-wider mb-4 text-small md:text-large lg:text-xl lg:max-w-lg font-light'>
               I&apos;m Tjalfe, currently studying Web design and Front-end development in Copenhagen.
            </p>
            <div className='flex items-center gap-4'>
              <Link href="#projects">
                <MagicButton 
                title='See my work'
                icon={<FaWandMagicSparkles/>}
                position='right'
                />
              </Link>
              <Link href="#contact">
                <MagicSecondaryButton 
                title='Get in touch'
                icon={<FaEnvelope/>}
                position='right'
                />
              </Link>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero