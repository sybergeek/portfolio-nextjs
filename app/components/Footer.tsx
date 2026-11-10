import Link from 'next/link';
import React from 'react';
import Layout from './Layout';

const Footer = () => {
  return (
    <footer className='w-full border-t border-ink/10 font-medium dark:border-light/10'>
      <Layout className='section-shell flex flex-col items-center justify-between gap-4 py-8 text-sm md:flex-row'>
        <span>© {new Date().getFullYear()} Abhishek Sen</span>
        <div className='flex items-center text-dark/60 dark:text-light/60'>
          Crafted with <span className='px-1 text-accent'>♥</span> and curiosity
        </div>
        <Link href="mailto:abhishek13dgp5@gmail.com" className='font-bold underline underline-offset-4'>Say hello ↗</Link>
      </Layout>
    </footer>
  )
}

export default Footer;
