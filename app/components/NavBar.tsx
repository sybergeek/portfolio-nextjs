"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon, TwitterIcon } from './Icons';
import Logo from './Logo';
import { motion } from "framer-motion";
import useThemeSwitcher from './hooks/useThemeSwitcher';

const CustomLink = ({href, title, className=""} : {href: string, title: string, className?: string}) => {
  const pathname = usePathname();
  return (
    <Link href={href} className={`${className} relative group text-dark dark:text-light`}>
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
    <header className='sticky top-0 z-40 grid min-h-[76px] w-full grid-cols-3 items-center border-b border-ink/10 bg-light/95 px-4 py-3 text-dark backdrop-blur-md dark:border-light/10 dark:bg-dark/95 sm:px-10 lg:grid-cols-[1fr_auto_1fr] lg:px-16'>

      <button className='col-start-1 flex flex-col items-center justify-center justify-self-start lg:hidden' onClick={handleClick} aria-label="Toggle menu">
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
      </button>

      {/* Desktop nav */}
      <nav className='col-start-1 hidden items-center justify-start gap-7 text-sm text-dark dark:text-light lg:flex'>
        <CustomLink href="/" title="Home" />
        <CustomLink href="/about" title="About" />
        <CustomLink href="/projects" title="Work" />
        <CustomLink href="/articles" title="Notes" />
      </nav>
      <nav className='col-start-3 hidden items-center justify-end text-dark dark:text-light lg:flex'>
        <motion.a href="https://github.com/sybergeek" target={"_blank"}
        whileHover={{ y:-2 }}
        whileTap={{ scale:0.9 }}
          className='mx-3 w-6 text-dark dark:text-light'>
          <GithubIcon />
        </motion.a>
        <motion.a href="https://linkedin.com/in/abhishek-sen-url" target={"_blank"}
        whileHover={{ y:-2 }}
        whileTap={{ scale:0.9 }}
          className='mx-3 w-6 text-dark dark:text-light'>
          <LinkedInIcon />
        </motion.a>

        <button aria-label="Toggle color theme"
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
      initial={{ scale: 0.98, opacity: 0, y: -8 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      className='fixed left-4 right-4 top-20 z-30 flex max-h-[calc(100dvh-6rem)] flex-col items-center justify-between overflow-y-auto rounded-2xl border border-light/20 bg-dark/95 py-12 backdrop-blur-md dark:border-dark/20 dark:bg-light/95 sm:py-16'>
        <nav className='flex flex-col items-center justify-center text-light dark:text-dark'>
          <CustomMobileLink href="/" title="Home" className='' toggle={handleClick} />
          <CustomMobileLink href="/about" title="About" className='' toggle={handleClick} />
          <CustomMobileLink href="/projects" title="Work" className='' toggle={handleClick} />
          <CustomMobileLink href="/articles" title="Notes" className='' toggle={handleClick} />
        </nav>
        <nav className='flex items-center justify-center flex-wrap mt-2'>
          <motion.a href="https://github.com/sybergeek" target={"_blank"}
          whileHover={{ y:-2 }}
          whileTap={{ scale:0.9 }}
          className='mx-3 w-6 rounded-full bg-light text-dark dark:bg-dark dark:text-light sm:mx-1'>
            <GithubIcon />
          </motion.a>
          <motion.a href="https://linkedin.com/in/abhishek-sen-url" target={"_blank"}
          whileHover={{ y:-2 }}
          whileTap={{ scale:0.9 }}
          className='mx-3 w-6 text-dark dark:text-light sm:mx-1'>
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

      <div className='col-start-2 row-start-1 flex items-center justify-center'>
        <Logo />
      </div>
    </header>
  )
}

export default NavBar;
