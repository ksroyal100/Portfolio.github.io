import Link from 'next/link'
import React from 'react'
import Logo from './Logo'

const CustomLink = ({ href, title, className = "" }) => {
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span className='h-[2px] inline-block w-full bg-black absolute left-0 -bottom-0.5
      group-hover:w-full translate-[width] ease duration-300
      '>&nbsp;</span>
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
              <CustomLink href="/" title="Home" className='mx-4 font-bold'/>
            <CustomLink href="/about" title="About" className='mx-4 font-bold'/>
            <CustomLink href="/projects" title="Projects"className='mx-4 font-bold'/>
            <CustomLink href="/blogs" title="Blogs"className='mx-4 font-bold'/>
              
          </nav>
          <nav>
              <Link href="/" target={"_blank"}>A</Link>
              <Link href="/" target={"_blank"}>T</Link>
              <Link href="/" target={"_blank"}>T</Link>
              <Link href="/" target={"_blank"}>T</Link>
              <Link href="/" target={"_blank"}>T</Link>
              <Link href="/" target={"_blank"}>T</Link>

          </nav>
    </header>
  )
}

export default Navbar