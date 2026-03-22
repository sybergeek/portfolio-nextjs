"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon, TwitterIcon } from './Icons';
import Logo from './Logo';
import { motion } from "framer-motion";
import useThemeSwitcher from './hooks/useThemeSwitcher';

const CustomLink = ({href, title, className=""} : {href: any, title: any, className: any}) => {
  const pathname = usePathname();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span className={`
      h-[1px] inline-block bg-dark dark:bg-light absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease duration-300
      ${pathname ==  href ? 'w-full' : 'w-0'}
      `}>&nbsp;</span>
    </Link>
  )
}

const CustomMobileLink = ({href, title, className="", toggle} : {href: any, title: any, className: any, toggle: () => void}) => {
  const pathname = usePathname();

  const handleClick = () => {
    toggle();
  }

  return (
    <Link href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
      {title}
      <span className={`
      h-[1px] inline-block bg-light dark:bg-dark absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease duration-300
      ${pathname === href ? 'w-full' : 'w-0'}
      `}>&nbsp;</span>
    </Link>
  )
}

const NavBar = () => {

  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <header className='w-full px-8 md:px-16 lg:px-32 py-8 font-medium flex items-center justify-between
    bg-light text-dark dark:bg-dark dark:text-light sticky top-0 z-10
    border-b-2 border-solid border-dark dark:border-light relative'>

      <button className='flex-col justify-center items-center lg:hidden flex' onClick={handleClick} aria-label="Toggle menu">
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
      </button>

      {/* Desktop nav */}
      <nav className='hidden lg:flex items-center justify-center flex-wrap'>
        <CustomLink href="/" title="Home" className='mr-4' />
        <CustomLink href="/about" title="About" className='mx-4' />
        <CustomLink href="/projects" title="Projects" className='mx-4' />
        <CustomLink href="/articles" title="Articles" className='ml-4' />
      </nav>
      <nav className='hidden lg:flex items-center justify-center flex-wrap'>
        <motion.a href="https://github.com/sybergeek" target={"_blank"}
        whileHover={{ y:-2 }}
        whileTap={{ scale:0.9 }}
        className='w-6 mx-3'>
          <GithubIcon />
        </motion.a>
        <motion.a href="https://linkedin.com/in/abhishek-sen-url" target={"_blank"}
        whileHover={{ y:-2 }}
        whileTap={{ scale:0.9 }}
        className='w-6 mx-3'>
          <LinkedInIcon />
        </motion.a>

        <button
        onClick={() => setMode(mode === "light" ? "dark" : "light") }
        className={`ml-3 flex items-center justify-center rounded-full p-1
        ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
        `}
        >
          {
            mode === "dark" ?
            <MoonIcon className="fill-dark" />
            : <SunIcon className="fill-light" />
          }
        </button>
      </nav>

      {/* Mobile nav */}
      {isOpen ?
      <motion.div
      initial={{scale: 0, opacity: 0, x: "-50%", y: "-50%"}}
      animate={{scale: 1, opacity: 1}}
      className='min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2
      -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32'>
        <nav className='flex items-center flex-col justify-center'>
          <CustomMobileLink href="/" title="Home" className='' toggle={handleClick} />
          <CustomMobileLink href="/about" title="About" className='' toggle={handleClick} />
          <CustomMobileLink href="/projects" title="Projects" className='' toggle={handleClick} />
          <CustomMobileLink href="/articles" title="Articles" className='' toggle={handleClick} />
        </nav>
        <nav className='flex items-center justify-center flex-wrap mt-2'>
          <motion.a href="https://github.com/sybergeek" target={"_blank"}
          whileHover={{ y:-2 }}
          whileTap={{ scale:0.9 }}
          className='w-6 mx-3 bg-light dark:bg-dark rounded-full sm:mx-1'>
            <GithubIcon />
          </motion.a>
          <motion.a href="https://linkedin.com/in/abhishek-sen-url" target={"_blank"}
          whileHover={{ y:-2 }}
          whileTap={{ scale:0.9 }}
          className='w-6 mx-3 sm:mx-1'>
            <LinkedInIcon />
          </motion.a>

          <button
          onClick={() => setMode(mode === "light" ? "dark" : "light") }
          className={`ml-3 flex items-center justify-center rounded-full p-1
          ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
          `}
          >
            {
              mode === "dark" ?
              <MoonIcon className="fill-dark" />
              : <SunIcon className="fill-light" />
            }
          </button>
        </nav>
      </motion.div>
      : null}

      <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo />
      </div>
    </header>
  )
}

export default NavBar;