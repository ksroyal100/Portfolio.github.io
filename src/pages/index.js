import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from '../../public/images/profile/moveimg.gif'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/icons'
import Hireme from '@/components/Hireme'

export default function Home() {
  return (
    <>
      <Head>
        
        
        <title>Kishan Sahu | Software Developer</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light overflow-hidden'>
        <Layout className='pt-0 md:p-16 sm:pt-8'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-2/5 mr-10 mt-8 sm:w-full'>
              <Image src={profilePic} alt='CodeBucket' className='w-full h-auto rounded-3xl lg:hidden md:inline-block md:w-full mb-12 sm:ml-4' 
                priority
                sizes='(max-width:260px) 100vw, (max-width: 1200px) 50vw, 33vw'
              />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full'>
              <AnimatedText text={`Turning Vision Into Reality With Codes and Logics`} className={`!text-4xl !text-left xl:!text-3xl lg:!text-center lg:!text-4xl md:!text-3xl sm:!text-3xl `} />
              <p className='my-4 text-base font-medium lg:!text-center'>
              As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
Explore my latest projects and articles, showcasing my expertise in React.js and web apps development.
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center sm:pt-8'>
                <Link href='/RESUMEKS.pdf' target='_blank' className='flex items-center bg-black text-white p-2.5 px-6 mr-2 rounded-lg font-semibold hover:bg-white hover:text-black border-2 border-solid border-transparent hover:border-black dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-light sm:!px-3'>Resume <LinkArrow className='w-6 ml-1'/></Link>

                
                <Link href='mailto:guptakishan492@gmail.com' target='_blank' className='ml-4 text-lg font-medium capitalize text-black underline dark:text-light'>Contact</Link>
              </div>
            </div>

          </div>
        </Layout>
        
        {/* <Hireme /> */}
   </main>
    </>
  )
}
