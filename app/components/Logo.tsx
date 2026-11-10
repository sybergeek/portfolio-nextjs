import Link from 'next/link';
import React from 'react';
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className='flex items-center justify-center'>
      <MotionLink href="/" className='flex h-14 w-14 items-center justify-center rounded-full bg-dark text-xl font-bold text-light
      border border-solid border-transparent dark:border-light'
      whileHover={{
        backgroundColor: ["#121212", "rgba(131,58,180,1)", "rgba(253,29,29,1)", "rgba(252,176,69,1)", "rgba(131,58,180,1)", "#121212"],
        transition: {duration: 1, repeat: Infinity}
      }}>
        AS
      </MotionLink>
    </div>
  )
}

export default Logo;
