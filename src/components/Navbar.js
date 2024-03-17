import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import { GithubIcon, LinkedInIcon, TwitterIcon } from './icons'
import {motion} from "framer-motion"

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span className={`h-[2px] inline-block w-0 bg-black absolute left-0 -bottom-0.5
      group-hover:w-full translate-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
    </Link>
  )
}

const Navbar = () => {
  return (
    <header className='w-full px-32 py-2 font-medium flex items-center justify-between'>
      
      <div >
          <Logo />
      </div>

          <nav>
        <CustomLink href="/" title="Home" className='mx-4 font-bold text-xl' />
        <CustomLink href="/about" title="About" className='mx-4 font-bold text-xl'/>
            <CustomLink href="/projects" title="Projects" className='mx-4 font-bold text-xl'/>
            <CustomLink href="/blogs" title="Blogs" className='mx-4 font-bold text-xl'/>
            {/* <CustomLink href="/contact" title="Contact" className='mx-4 font-bold'/> */}
              
      </nav>
      
          <nav className='flex items-center justify-center flex-wrap'>
        <motion.a href="https://github.com/ksroyal100" target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{scale: 0.9}}
          className='w-8 mr-3'
        >
          
          <GithubIcon />
              </motion.a>
        <motion.a href="https://www.linkedin.com/in/kishansahu492" target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{scale: 0.9}}
          className='w-8 mr-3'
          
        >
          <LinkedInIcon />
              </motion.a>

          </nav>
    </header>
  )
}

export default Navbar