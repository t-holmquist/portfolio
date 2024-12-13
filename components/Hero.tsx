import { FaEnvelope, FaWandMagicSparkles } from 'react-icons/fa6'
import MagicButton from './ui/MagicButton'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import Link from 'next/link'


const Hero = () => {
  return (
    <div>
        <div className='pb-20'>
        <Spotlight className='-top-40 -right-10 md:-right-32 md:-top-20 h-screen' fill='#86B2CE'/>
        </div>
        <div className='flex relative mb-20 z-10'>
          <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col gap-6'>
            <TextGenerateEffect 
            className='text-[40px] md:text-5xl lg:text-5xl font-oswald'
            words='Need help designing & implementing front-end solutions?'
            />
            <p className='mb-4 text-small md:text-large lg:text-xl lg:max-w-lg font-sourceSans text-brandTextWhite'>
               I&apos;m Tjalfe Holmquist. A Front-end developer and design engineer based in Copenhagen.
            </p>
            <div className='flex items-center gap-4'>
              <Link href="#projects">
                <MagicButton 
                title='See my work'
                icon={<FaWandMagicSparkles/>}
                position='right'
                otherClasses='bg-brandPrimary'
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