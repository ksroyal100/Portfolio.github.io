import React from 'react'
import {motion } from 'framer-motion'

const Skills = ({ name, x, y }) => {
  return(
    <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-4 shadow-dark cursor-pointer absolute py-3 px-6  dark:bg-light dark:text-dark lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold'
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{once: true}}
    >
  {name}
    </motion.div>
  )
}

const Skill = () => {
  return (
    <>
      <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>Skills</h2>
      <div className='w-full h-screen relation flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]'>
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light  dark:bg-light dark:text-dark  p-4 shadow-dark cursor-pointer lg:p-6 md:p-4 xs:text-xs xs:p-2' whileHover={{scale: 1.05}}>
          Full Stack
        </motion.div>

        <Skills name="PYTHON" x="18vw" y="6vw" />
        <Skills name="CSS" x="-2vw" y="-10vw" />
        <Skills name="JAVASCRIPT" x="-13vw" y="20vw" />
        <Skills name="JAVA" x="-2vw" y="11vw" />
        <Skills name="TYPESCRIPT" x="22vw" y="16vw" />
        {/* <Skills name="REACTJS" x="10vw" y="-6vw" /> */}
        <Skills name="NODEJS" x="-22vw" y="-2vw" />
        <Skills name="REACT NATIVE" x="-22vw" y="-14vw" />
        {/* <Skills name="EXPRESSJS" x="-20vw" y="12vw" /> */}
        <Skills name="SPRING BOOT" x="25vw" y="-2vw" />
        <Skills name="MONGODB" x="20vw" y="-12vw" />
        <Skills name="SQL" x="-23vw" y="8vw" />
        <Skills name="TAILWINDCSS" x="0vw" y="-21vw" />
        {/* <Skills name="DEPLOYMENT" x="0vw" y="20vw" /> */}
      


      </div>

  </>

  )
}
export default Skill