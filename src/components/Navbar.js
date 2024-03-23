import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon, TwitterIcon } from './icons'
import {motion} from "framer-motion"
import useThemeSwitcher from './hooks/useThemeSwitcher'

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span className={`h-[2px] inline-block w-0 bg-black absolute left-0 -bottom-0.5
      group-hover:w-full translate-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'} dark:bg-light`}
      >&nbsp;</span>
    </Link>
  )
}

const Navbar = () => {

  const [mode, setMode] = useThemeSwitcher();
  return (
    <header className='... sticky top-0 z-10 bg-white border-b-2 border-grey-100 w-full px-32 py-2 font-medium flex items-center justify-between dark:text-light dark:bg-dark'>
      
      <div >
          <Logo /> 
      </div>

          <nav className=''>
        <CustomLink href="/" title="Home" className='mx-4 font-bold text-xl' />
        <CustomLink href="/about" title="About" className='mx-4 font-bold text-xl'/>
            <CustomLink href="/projects" title="Projects" className='mx-4 font-bold text-xl'/>
            <CustomLink href="/blogs" title="Blogs" className='mx-4 font-bold text-xl'/>
            {/* <CustomLink href="/contact" title="Contact" className='mx-4 font-bold'/> */}
              
      </nav>
      
      <nav className='flex items-center justify-center flex-wrap'>
      <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={`mr-2 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
        >
          {
            mode === "dark" ? <MoonIcon className={ "fill-dark"} /> : <SunIcon className={'fill-dark'} />
          }
        </button>
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
          className='w-8 mr-1'
        >
          <LinkedInIcon />
        </motion.a>
        

      </nav>
    </header>
  )
}

export default Navbar