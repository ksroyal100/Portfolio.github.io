import React from 'react'
import {motion } from 'framer-motion'

const Skills = ({ name, x, y }) => {
  return(
    <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-4 shadow-dark cursor-pointer absolute py-3 px-6  dark:bg-light dark:text-dark '
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
      <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
      <div className='w-full h-screen relation flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark'>
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light  dark:bg-light dark:text-dark  p-4 shadow-dark cursor-pointer' whileHover={{scale: 1.05}}>
          Full Stack
        </motion.div>

        <Skills name="HTML" x="13vw" y="2vw" />
        <Skills name="CSS" x="-6vw" y="-8vw" />
        <Skills name="JAVASCRIPT" x="-6vw" y="8vw" />
        <Skills name="JAVA" x="6vw" y="12vw" />
        <Skills name="TYPESCRIPT" x="24vw" y="8vw" />
        <Skills name="REACTJS" x="10vw" y="-6vw" />
        <Skills name="NODEJS" x="-20vw" y="-5vw" />
        <Skills name="REACT NATIVE" x="-20vw" y="-12vw" />
        <Skills name="EXPRESSJS" x="-20vw" y="12vw" />
        <Skills name="SPRING BOOT" x="23vw" y="-2vw" />
        <Skills name="MONGODB" x="20vw" y="-12vw" />
        <Skills name="SQL" x="-20vw" y="2vw" />
        <Skills name="TAILWINDCSS" x="-2vw" y="-16vw" />
        <Skills name="DEPLOYMENT" x="0vw" y="20vw" />
      


      </div>

  </>

  )
}
export default Skill