import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({position, company, companyLink, time, address, work} : {position: any, company: any, companyLink: any, time: any, address: any, work: any}) => {
  const ref = useRef(null);
  return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
    <LiIcon reference={ref} />
    <motion.div
    initial={{y: 50}}
    whileInView={{y: 0}}
    transition={{duration: 0.5, type: "spring"}}
    >
      <h3 className='capitalize font-bold text-2xl'>{position}&nbsp;<a href={companyLink}
      target="_blank"
      className='capitalize text-primary dark:text-primaryDark'>@{company}</a></h3>
      <span className='capitalize font-medium text-dark/75 dark:text-light/75'>
        {time} | {address}
      </span>
      <p className='font-medium w-full'>
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
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center'>
        Experience
      </h2>
      <div ref={ref} className='w-[75%] mx-auto relative'>
        <motion.div
        style={{ scaleY: scrollYProgress }}
        className='absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top' />
        <ul className='w-full flex flex-col items-start justify-between ml-4'>
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