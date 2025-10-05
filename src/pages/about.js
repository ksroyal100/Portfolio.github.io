import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import profilePic from '../../public/images/profile/MyProfile.png'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skill from '@/components/Skill'
// import Experience from '@/components/Experience'
import Education from '@/components/Education'

const AnimatedNumbers = ({value}) => {
    const ref = useRef(null);

    const motionValue = useMotionValue(0)
    const springvalue = useSpring(motionValue, { duration: 3000 })
    const isInView = useInView(ref, {once: true});

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue])
    useEffect(() => {
        springvalue.on('change', (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0)
            }
        })
    },[springvalue, value])

    return <span ref={ref}></span>
}

const about = () => {
  return (
      <div>
          <Head>
              <title>Kishan Sahu | About Me</title>
              <meta name='description' content='any descrption' />
          </Head>
          <main className='flex w-full flex-col items-center justify-center dark:text-light overflow-hidden'>
          <Layout className='pt-16'>
                  <AnimatedText text='Innovation Empower!' className="mb-16 text-[3rem] lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-16"/>
                  <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                      <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                          <h2 className='mb-4 text-lg font-bold uppercase text-black-300'>Biography</h2>
                          <p className='font-medium'> Hi, I am Kishan Sahu, a full stack developer & designer with a passion for creating beautiful, functional, 
and user-centered digital experiences. With 4 years of experience in the field. I am always looking for 
new and innovative ways to bring my clients visions to life. </p>
<p className='my-4 font-medium'> I believe that design is about more than just making things look pretty it is about solving problems and 
creating intuitive, enjoyable experiences for users. 
</p>

<p className='font-medium'> Whether I am working on a website, mobile app, or 
other digital product, I bring my commitment to design excellence and user-centered thinking to 
every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.</p>
                      </div>
 
                      <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'>
                          <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark' />
                          <Image src={profilePic} alt='kishan sahu' className='w-full h-auto rounded-2xl' 
                               priority
                sizes='(max-width:260px) 100vw, (max-width: 1200px) 50vw, 33vw'
                          />
                      </div>
                      <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3 md:col-span-8 md:mt-10'>
                          <div className='flex flex-col items-end justify-center xl:items-center'>
                              <span className='inline-block text-7xl font-bold md:text-6xl sm:text-3xl'>
                              <AnimatedNumbers value={100} />+
                              </span>
                              <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm'>Leetcode </h2>
                          </div>
                          <div className='flex flex-col items-end justify-center xl:items-center'>
                              <span className='inline-block text-7xl font-bold md:text-6xl sm:text-3xl'><AnimatedNumbers value={10} />+</span>
                              <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm'>Projects</h2>
                          </div>
                          <div className='flex flex-col items-end justify-center xl:items-center'>
                              <span className='inline-block text-7xl font-bold md:text-6xl sm:text-3xl'><AnimatedNumbers value={1800} />+</span>
                              <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm'>Hours of Coding</h2>
                          </div>
                          
                      </div>
                  </div>
                  <Skill />
                  {/* <Experience /> */}
                  <Education />
          </Layout>
          </main>
         
    </div>
  )
}

export default about
