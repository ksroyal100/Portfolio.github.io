import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
      <footer className='w-full border-t-2 border-solid border-black font-medium text-lg sm:text-sm dark:text-light dark:border-light '>
          <Layout className='py-8 flex items-center justify-between sm:py-8 '>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div className='flex items-center'>
         <Link href='/'>Workspace</Link>
          </div>
              <Link href='/' className='sm:hidden'>Say hello 👋</Link>
          </Layout>
   </footer>
  )
}

export default Footer