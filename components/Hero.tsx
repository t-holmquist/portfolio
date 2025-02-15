import { FaEnvelope, FaWandMagicSparkles } from 'react-icons/fa6'
import MagicButton from './ui/MagicButton'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import Link from 'next/link'


const Hero = () => {
  return (
    <div className='mt-8 md:mt-14'>
        <Spotlight className='-top-40 -right-10 md:-right-32 md:-top-20 h-screen' fill='#86B2CE'/>
        <div className='flex relative mb-20 z-10'>
          <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col gap-6'>
            <TextGenerateEffect 
            className='text-[40px] md:text-5xl lg:text-5xl font-oswald'
            words='Passionate about designing and developing user-centered front-end applications'
            />
            <p className='mb-4 text-small md:text-lg lg:max-w-lg font-sourceSans text-brandTextWhite'>
               I&apos;m Tjalfe Holmquist. A Front-end & Digital Design student based in Copenhagen.
            </p>
            <div className='flex items-center gap-4'>
              <Link href="/cases">
                <MagicButton 
                title='See my work'
                icon={<FaWandMagicSparkles/>}
                position='right'
                otherClasses='bg-brandAccent'
                />
              </Link>
              <Link href="#contact">
                <MagicButton 
                title='Get in touch'
                icon={<FaEnvelope/>}
                position='right'
                otherClasses='border border-brandBorder'
                />
              </Link>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero