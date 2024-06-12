import { FaWandMagicSparkles } from 'react-icons/fa6'
import MagicButton from './ui/MagicButton'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'


const Hero = () => {
  return (
    <div>
        <div className='pb-20 pt-20'>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='#877EFF'/>
        <Spotlight className='-top-10 -left-full h-[80vh] w-[50vw]' fill='white'/>
        <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='#877EFF'/>
        </div>
        {/* Grid background */}
        <div className="h-screen w-full dark:bg-black-100 bg-white  
        dark:bg-dot-white/[0.3] flex items-center justify-center absolute top-0 left-0">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
        </div>

        <div className='flex justify-center relative my-20 z-10'>
          <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
            <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
            Great to see you, I'm
            </h2>

            <TextGenerateEffect 
            className='text-center text-[40px] md:text-5xl lg:text-6xl'
            words='Searching for new opportunities'
            />
            <p className='text-center md:tracking-wider mb-4 text-small md:text-large lg:text-2xl'>
              I'm Tjalfe, a developer looking to break into the industry.
            </p>
            <a className='mt-10' href="#projects">
              <MagicButton 
              title='See projects'
              icon={<FaWandMagicSparkles/>}
              position='right'
              />
            </a>
          </div>
        </div>
    </div>
  )
}

export default Hero