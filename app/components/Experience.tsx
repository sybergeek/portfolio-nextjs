import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';

const Details = ({position, company, companyLink, time, address, work} : {position: string, company: string, companyLink: string, time: string, address: string, work: string}) => {
  const ref = useRef(null);
  return <li ref={ref} className='relative grid w-full grid-cols-[2.5rem_1fr] gap-5 py-6 first:pt-0 last:pb-0 md:grid-cols-[4rem_1fr] md:gap-8'>
    <div className='relative flex justify-center'><span className='relative z-10 mt-1 h-4 w-4 rounded-full border-4 border-light bg-accent shadow-[0_0_0_4px_rgba(239,111,81,0.16)] dark:border-dark' /></div>
    <motion.div
    initial={{opacity: 0, y: 18}}
    whileInView={{opacity: 1, y: 0}}
    viewport={{ once: true, margin: "-80px" }}
    transition={{duration: 0.45}}
    className='min-w-0 rounded-2xl border border-ink/10 bg-light p-5 shadow-sm dark:border-light/10 dark:bg-dark sm:p-7'
    >
      <div className='flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between'><h3 className='text-xl font-bold leading-tight sm:text-2xl'>{position}&nbsp;<a href={companyLink}
      target="_blank"
      rel='noreferrer'
      className='text-accent'>@{company}</a></h3><span className='shrink-0 text-xs font-bold uppercase tracking-[0.14em] text-dark/45 dark:text-light/45 sm:pt-1'>{time}</span></div>
      <p className='mt-2 text-sm font-medium text-dark/55 dark:text-light/55'>{address}</p>
      <p className='mt-4 text-sm leading-7 text-dark/70 dark:text-light/70 sm:text-base'>
        {work}
      </p>
    </motion.div>
  </li>
}

const Experience = () => {

  const ref = useRef(null);
  const {scrollYProgress} = useScroll(
    {
      target: ref,
      offset: ["start end", "center start"]
    }
  )

  return (
    <div className='my-28 md:my-40'>
      <h2 className='mb-12 text-center text-4xl font-bold tracking-[-0.05em] md:mb-16 md:text-6xl'>
        Experience
      </h2>
      <div ref={ref} className='relative mx-auto w-full max-w-4xl'>
        <motion.div
        style={{ scaleY: scrollYProgress }}
        className='absolute bottom-0 left-[1.18rem] top-0 w-px origin-top bg-accent/40 md:left-[1.9rem]' />
        <ul className='relative flex w-full flex-col'>
          <Details position="Software Engineer 2" company="JPMorgan Chase" companyLink="https://www.jpmorganchase.com/"
          time="2024-Present" address="Bengaluru, India"
          work="Designed and developed the firmwide centralized workflow monitoring system using dynamic filtering and visualization tools, enhancing UX and reporting, reducing user toil by 1 hour daily per user. Tech Stack: Java, Spring, React." />
          <Details position="Software Engineer 3" company="Morgan Stanley" companyLink="https://www.morganstanley.com/"
          time="2021-2024" address="Bengaluru, India"
          work="Redesigned the Realtime Funding Dashboard from a .NET monolith to a web-based microservices architecture, enhancing UX and saving $230K annually. Automated EOD balance reporting, reducing toil by 3.5 hours daily. Designed real-time funding automation to mitigate risk and save ~$10M annually. Developed a DevOps Metrics platform, improved IT processes, mentored engineers, and hosted coding best practice sessions. Led disaster recovery planning and scalability assessments. Provided on-call support and root cause analysis. Tech Stack: Java, Spring, Angular, React, Kafka, DB2." />
          <Details position="PRISM Intern" company="Samsung Research" companyLink="https://research.samsung.com/sri-b"
          time="2023-2023" address="Bengaluru, India"
          work="Developed a Web Survey application for Search DCG Computation as part of Samsung PRISM, focusing on backend development with Node.js, Express.js, and MongoDB. Implemented optimizations for large-scale data processing, enabling real-time computation. Delivered on time, meeting performance benchmarks." />
          {/* <Details position="Software Engineer" company="Google" companyLink="http://google.com"
          time="2022-Present" address="Mountain View, CA"
          work="Worked on a team responsible for developing new features for Google's 
          search engine, including improving the accuracy and relevance of search results and 
          developing new tools for data analysis and visualization." /> */}
        </ul>
      </div>
    </div>
  )
}

export default Experience;
