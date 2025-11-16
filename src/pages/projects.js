import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/icons";
import ecommpic from "../../public/images/projects/ecommpic.png";
import livedocs from "../../public/images/projects/livedocs.png";
import smartbuddy from "../../public/images/projects/smartbuddy.png";
import planner from "../../public/images/projects/plannerapp.png";

import { motion } from "framer-motion";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="relative w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 rounded-br-2xl dark:bg-dark dark:border-light dark:text-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width:260px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-blue-600 font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light md:text-2xl">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-8">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark/85 text-light p-2 px-6 text-lg font-semibold  hover:bg-white hover:text-black border-2 border-solid border-transparent hover:border-black dark:border-light sm:px-4 sm:text-base"
          >
            Visit project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="relatve w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-4 relative dark:bg-dark dark:border-light dark:text-light xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width:260px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4 dark:bg-dark dark:border-light dark:text-light">
        <span className="text-blue-600 font-medium text-xl lg::text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-2xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>

        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark/85 text-light p-2 px-6 text-lg font-semibold  hover:bg-white hover:text-black border-2 border-solid border-transparent hover:border-black dark:border-light sm:px-4 sm:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Kishan Sahu | My Projects</title>
        <meta name="description" content="any descrption" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText
            text="My Projects"
            className="mb-16 text-[3rem] md:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                img={ecommpic}
                title="V-Shop Web App"
                summary="V-Shop is a Dynamic Ecommerce application built using
frontend – Reactjs and Tailwind CSS, MUI.Complete Backend Support using Nodejs and Express with
MongoDB Atlas Database, a fully Functional Web
Application.
"
                link="https://ecommerce-frontend-dusky-alpha.vercel.app/"
                github="https://github.com/ksroyal100/Ecommerce-Frontend"
                type="Featured Projects"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                img={planner}
                title="Budget Planner Mobile App"
                summary="Budget Planner app in React Native offers money management. It features user authentication, interactive data visualization, budget tracking. The app responsive design ensures compatibility across mobile devices.
"
                link="https://github.com/ksroyal100/Planner"
                github="https://github.com/ksroyal100/Planner"
                type="Featured Projects"
              />
            </div>
             <div className="col-span-12">
              <FeaturedProject
                img={smartbuddy}
                title="Smart Code Reviewer"
                summary=" a modern application code reviewer that uses Next.js on the frontend and the Gemini API for intelligent code analysis. The app reviews your code, analyzes structure and quality, and provides fine-tuned improvement suggestions — much like ChatGPT, but optimized specifically for code review workflows.
"
                link="https://smart-code-reviewer.vercel.app/"
                github="https://github.com/ksroyal100/Smart_Code_Reviewer"
                type="Featured Projects"
              />
            </div>
            <div className='col-span-12'>
                          <FeaturedProject 
                              img={livedocs}
                              title='LiveDocs Web App'
                              summary='LiveDocs Web App is based on Nextjs with Typescript.It is a             powerful document management system that allows users to upload, store, and manage their documents efficiently. The app features a user-friendly interface, secure authentication, and seamless document organization.
'
                              link='https://livesdocs.vercel.app/'
                              github='https://github.com/ksroyal100/Livesdocs'
                              type='Featured Projects'
                          />
                      </div>
           
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
