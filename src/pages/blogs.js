import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import blog1 from '../../public/images/articles/blog1.jpg'
import blog2 from '../../public/images/articles/blog2.png'
import { motion, useMotionValue } from 'framer-motion'

const FramerImage = motion(Image);

const MovingImage = ({ img, title, link }) => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const imgRef = useRef(null)

    function handleMouse(event) {
        imgRef.current.style.display = 'inline-block'
        x.set(event.pageX)
        y.set(-10)
    }
    function handleMouseLeave(event) {
        imgRef.current.style.display = 'none'
        x.set(0)
        y.set(0)
    }

    return (
        <Link href={link} target='_blank'
            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave}
        >
            <h2 className='capitalize text-xl font-semibold hover:underline'>{title}</h2>
            <FramerImage
                style={{ x: x, y: y }}
                initial={{opacity:0}}
                whileInView={{opacity:1, transition:{duration:0.2}}}
                ref={imgRef} src={img} alt={title} className='z-10 w-96 h-auto hidden absolute rounded-lg' 
                priority
                sizes='(max-width:260px) 100vw, (max-width: 1200px) 50vw, 33vw'
                />
        </Link>
    )
}

const Blogs = ({title, date, link}) => {
    return (
        <motion.li
            initial={{ y: 200 }}
            whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
            viewport={{once: true}}
            className='relative w-full p-4 py-4 my-4 rounded-xl flex items-center justify-between bg-light text-dark first-mt-0 border border-solid border-dark  dark:bg-dark dark:border-light dark:text-light sm:flex-col sm:py-2 xs:text-sm sm:text-sm'>
           <MovingImage title={title} img={blog2} link={link}/>
            <span className='sm:self-start'>{date}</span>
            
        </motion.li>
    )
}

const FeaturedBlog = ({img, title, time, summary, link,}) => {
    return (
        <li className='relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light dark:text-light md:flex md:flex-col'>
               <Link href={link} target='_blank'
            className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'
            >
                <FramerImage src={img} alt={title} className='w-full h-auto'
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    priority
                sizes='(max-width:260px) 100vw, (max-width: 1200px) 50vw, 33vw'
                />
            </Link>
            <Link href={link} target='_blank'>
                <h2 className='capitalize text-2xl font-bold my-2 hover:underline xs:text-lg'>{title}</h2>
            </Link>
            <p className='text-sm mb-2'>{summary}</p>
            <span className='text-blue-600 font-semibold'>{time}</span>

        </li>
    )
}


const blogs = () => {
  return (
      <>
          <Head>
              <title>Kishan Sahu | Blogs</title>
              <meta name="description" content="Generated by create next app"/>

          </Head>
          <main className='w-full flex items-center justify-center overflow-hidden '>
              <Layout className='pt-16'>
                  <AnimatedText text='Words Can Change The World!' className='mb-16 text-[3rem] md:!text-4xl'/>
                  <ul className=' grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16'>
                      <FeaturedBlog 
                          title='Build A Custom Pagination Component In Reactjs From Scratch'
                          summary='Learn how to build a custom pagination component in ReactJS from scratch. 
Follow this step-by-step guide to integrate Pagination component in your ReactJS project.'
                          time='9 min read'
                          link='/'
                          img={blog1}
                      />
                      <FeaturedBlog 
                          title='Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'
                          summary='Silky Smooth Scrolling In Reactjs: A Step-By-Step Guide For React Developers

Creating An Efficient Modal Component In React Using Hooks And Portals

Build A Fabulous Todo List App With React, Redux And Framer-Motion'
                          time='9 min read'
                          link='/'
                          img={blog2}
                      />
                       <FeaturedBlog 
                          title='Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'
                          summary='Silky Smooth Scrolling In Reactjs: A Step-By-Step Guide For React Developers

Creating An Efficient Modal Component In React Using Hooks And Portals

Build A Fabulous Todo List App With React, Redux And Framer-Motion'
                          time='9 min read'
                          link='/'
                          img={blog2}
                      />
                       <FeaturedBlog 
                          title='Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'
                          summary='Silky Smooth Scrolling In Reactjs: A Step-By-Step Guide For React Developers

Creating An Efficient Modal Component In React Using Hooks And Portals

Build A Fabulous Todo List App With React, Redux And Framer-Motion'
                          time='9 min read'
                          link='/'
                          img={blog2}
                      />
                   

                  </ul>
                  <h2 className='font-bold text-4xl w-full text-center my-32 dark:text-light'>All Blogs</h2>
                  <ul>
                      <Blogs 
                          title='What Is Higher Order Component (Hoc) In React?'
                          date='12 mar 2024'
                          link='/'
                          img={blog2}
                      />
                      <Blogs 
                          title='What Is Higher Order Component (Hoc) In React?'
                          date='12 mar 2024'
                          link='/'
                          img={blog2}
                      />
                      <Blogs 
                          title='What Is Higher Order Component (Hoc) In React?'
                          date='12 mar 2024'
                          link='/'
                          img={blog2}
                      />
                      <Blogs 
                          title='What Is Higher Order Component (Hoc) In React?'
                          date='12 mar 2024'
                          link='/'
                          img={blog2}
                      />
                      <Blogs 
                          title='What Is Higher Order Component (Hoc) In React?'
                          date='12 mar 2024'
                          link='/'
                          img={blog2}
                      />
                      <Blogs 
                          title='What Is Higher Order Component (Hoc) In React?'
                          date='12 mar 2024'
                          link='/'
                          img={blog2}
                      />
                      <Blogs 
                          title='What Is Higher Order Component (Hoc) In React?'
                          date='12 mar 2024'
                          link='/'
                          img={blog2}
                      />
                      <Blogs 
                          title='What Is Higher Order Component (Hoc) In React?'
                          date='12 mar 2024'
                          link='/'
                          img={blog2}
                      />
                      <Blogs 
                          title='What Is Higher Order Component (Hoc) In React?'
                          date='12 mar 2024'
                          link='/'
                          img={blog2}
                      />
                      <Blogs 
                          title='What Is Higher Order Component (Hoc) In React?'
                          date='12 mar 2024'
                          link='/'
                          img={blog2}
                      />
                      
                  </ul>
              </Layout>
          </main>
    </>
  )
}

export default blogs