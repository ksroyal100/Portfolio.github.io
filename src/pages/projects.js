import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '@/components/icons'
import ecommpic from '../../public/images/projects/ecommpic.png'
import cabbook from '../../public/images/projects/cabbook.png'
import elearnpic from '../../public/images/projects/elearnpic.png'
import chatapp from '../../public/images/projects/chatapppic.png'
import traslator from '../../public/images/projects/Translator.png'




import { motion } from 'framer-motion'

const FramerImage = motion(Image);


const FeaturedProject = ({type,title,summary, img, link, github}) => {
    return (
        <article className='relative w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 rounded-br-2xl dark:bg-dark dark:border-light dark:text-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
              <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]' />
            <Link href={link} target='_blank'
            className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'
            >
                <FramerImage src={img} alt={title} className='w-full h-auto'
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    priority
                sizes='(max-width:260px) 100vw, (max-width: 1200px) 50vw, 33vw'
                />
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-blue-600 font-medium text-xl xs:text-base'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light md:text-2xl'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target="_blank" className='w-8'><GithubIcon /></Link>
                    <Link href={link} target="_blank"
                        className='ml-4 rounded-lg bg-dark/85 text-light p-2 px-6 text-lg font-semibold  hover:bg-white hover:text-black border-2 border-solid border-transparent hover:border-black dark:border-light sm:px-4 sm:text-base'>
                        Visit project</Link>
                </div>
            </div>

        </article>
    )
}

const Project = ({title, type, img, link, github}) => {
    return (
        <article className='relatve w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-4 relative dark:bg-dark dark:border-light dark:text-light xs:p-4'>
              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]' />
            <Link href={link} target='_blank'
            className='w-full cursor-pointer overflow-hidden rounded-lg'
            >
                <FramerImage src={img} alt={title} className='w-full h-auto'
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    priority
                sizes='(max-width:260px) 100vw, (max-width: 1200px) 50vw, 33vw'
                />
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4 dark:bg-dark dark:border-light dark:text-light'>
                <span className='text-blue-600 font-medium text-xl lg::text-lg md:text-base'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-2xl font-bold lg:text-2xl'>{title}</h2>
                </Link>

                <div className='w-full mt-2 flex items-center justify-between'>
                    <Link href={link} target="_blank"
                        className='ml-4 rounded-lg bg-dark/85 text-light p-2 px-6 text-lg font-semibold  hover:bg-white hover:text-black border-2 border-solid border-transparent hover:border-black dark:border-light sm:px-4 sm:text-base'>
                        Visit</Link>
                    <Link href={github} target="_blank" className='w-8 md:w-6'><GithubIcon /></Link>
                </div>
            </div>
        </article>
    )
}

const projects = () => {
  return (
      <>
          <Head>
              <title>Kishan Sahu | My Projects</title>
              <meta name='description' content='any descrption' />
          </Head>
          <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden'>
              <Layout className='pt-16'>
                  <AnimatedText text='My Projects' className="mb-16 text-[3rem] md:!text-4xl"
                      
                  />
                  <div className='grid grid-cols-12 gap-24 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                      <div className='col-span-12'>
                          <FeaturedProject 
                              img={ecommpic}
                              title='V-Shop Web App'
                              summary='V-Shop is a Dynamic Ecommerce application built using
frontend – Reactjs and Tailwind CSS, MUI.Complete Backend Support using Nodejs and Express with
MongoDB Atlas Database, a fully Functional Web
Application.
'
                              link='https://ecommerce-frontend-dusky-alpha.vercel.app/'
                              github='https://github.com/ksroyal100/Ecommerce-Frontend'
                              type='Featured Projects'
                          />
                      </div>
                      <div className='col-span-12'>
                          <FeaturedProject 
                              img={cabbook}
                              title='Cab Booking Web App'
                              summary='Cab booking Web App is based on Nextjs with Javascript. Our cab booking website project aims to provide users with a seamless and efficient way to book transportation services with backend Support - Spring boot.
'
                              link='https://cabbooking-frontend.vercel.app/'
                              github='https://github.com/ksroyal100/CabBooking-Frontend'
                              type='Featured Projects'
                          />
                      </div>
                      <div className='col-span-12'>
                          <FeaturedProject 
                              img={elearnpic}
                              title='E-Learning Mobile App'
                              summary='E-learning app in React Native offers a seamless mobile learning experience. It features user authentication, interactive courses, video lectures, quizzes, and progress tracking. The app responsive design ensures compatibility across devices.
'
                              link='https://cabbooking-frontend.vercel.app/'
                              github='https://github.com/ksroyal100/CabBooking-Frontend'
                              type='Featured Projects'
                          />
                      </div>
                      <div className='col-span-12'>
                          <FeaturedProject 
                              img={chatapp}
                              title='Chit Chat Mobile App'
                              summary='A chat app in Android Studio using Java and Firebase provides real-time messaging with a modern and intuitive interface. Key features include user authentication, one-on-one chat, push notifications. Firebase handles backend services like real-time database, user authentication, and cloud storage, ensuring a seamless and responsive chat experience.
'
                              link='https://cabbooking-frontend.vercel.app/'
                              github='https://github.com/ksroyal100/CabBooking-Frontend'
                              type='Featured Projects'
                          />
                      </div>
                      <div className='col-span-12'>
                          <FeaturedProject 
                              img={traslator}
                              title='Translator App'
                              summary='A basic translator ui built using python and tkinter along with google translator api. The best part I created this translator within 3 hours that is so fast and easy.
'
                              link='https://cabbooking-frontend.vercel.app/'
                              github='https://github.com/ksroyal100/CabBooking-Frontend'
                              type='Featured Projects'
                          />
                      </div>
                     
                
                     
                  </div>
              </Layout>
          </main>
    </>
    )
    
}

export default projects