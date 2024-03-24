import Link from 'next/link'
import React, { useState } from 'react'
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


const CustomMobileLink = ({ href, title, className = "" , toggle}) => {
  const router = useRouter();


  const handleClickdown = () => {
    toggle()
    router.push(href)
  }

  return (
    <button href={href} className={`${className} relative group text-light dark:text-dark my-4`} onClick={handleClickdown}>
      {title}

      <span className={`h-[2px] inline-block w-0 bg-black absolute left-0 -bottom-0.5
      group-hover:w-full translate-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'} dark:bg-dark `}
      >&nbsp;</span>
    </button>
  )
}


const Navbar = () => {

  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen)
  }


  return (
    <header className='... sticky top-0 z-10 bg-white border-b-2 border-grey-100 w-full px-32 py-6 font-medium flex items-center justify-between dark:text-light dark:bg-dark lg:pb-8 sm:px-8 '>
      
      <button className=' flex-col cursor-pointer hidden lg:flex lg:mt-3' onClick={handleClick}>
      <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-0.5'}`}></span>
        <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${isOpen ?'opacity-0': 'opacity-100'}`}></span>
        <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-0.5'}`}></span>
      </button>

    
      <div className='w-full flex justify-between items-center lg:hidden'>

          <nav>
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
      </div>

      {
        isOpen ? 
          
          <motion.div
            initial={{ scale: 0, opacity:0, x:"-50%", y:"-50%" }}
            animate={{scale:1, opacity:1}}
            className='min-w-[70vw]  flex-col z-30 flex justify-center items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md  py-32'>

<nav className='flex items-center flex-col justify-center text-dark dark:text-light'>
<CustomMobileLink href="/" title="Home" className='mx-4 font-bold text-xl'  toggle={handleClick}/>
<CustomMobileLink href="/about" title="About" className='mx-4 font-bold text-xl' toggle={handleClick}/>
  <CustomMobileLink href="/projects" title="Projects" className='mx-4 font-bold text-xl' toggle={handleClick}/>
  <CustomMobileLink href="/blogs" title="Blogs" className='mx-4 font-bold text-xl' toggle={handleClick}/>
  {/* <CustomLink href="/contact" title="Contact" className='mx-4 font-bold'/> */}
    
</nav>

<nav className='flex items-center justify-center flex-wrap mt-2'>
<button
onClick={() => setMode(mode === "light" ? "dark" : "light")}
className={`mr-2 flex items-center justify-center rounded-full p-2 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
>
{
  mode === "dark" ? <MoonIcon className={ "fill-dark"} /> : <SunIcon className={'fill-dark'} />
}
</button>
<motion.a href="https://github.com/ksroyal100" target={"_blank"}
whileHover={{ y: -2 }}
whileTap={{scale: 0.9}}
className='w-8 mr-3 dark:bg-dark rounded-full bg-light'
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
</motion.div>
          : null
      }
      <div className='absolute left-[50%] translate-x-[-50%] lg:pt-3 sm:!left-[85%]'>
          <Logo /> 
      </div>
    </header>
  )
}

export default Navbar