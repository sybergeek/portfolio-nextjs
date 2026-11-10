import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';

const Details = ({type, time, place, info} : {type: string, time: string, place: string, info: string}) => {
  const ref = useRef(null);
  return <li ref={ref} className='relative grid w-full grid-cols-[2.5rem_1fr] gap-5 py-6 first:pt-0 last:pb-0 md:grid-cols-[4rem_1fr] md:gap-8'>
    <div className='relative flex justify-center'><span className='relative z-10 mt-1 h-4 w-4 rounded-full border-4 border-light bg-mint shadow-[0_0_0_4px_rgba(142,227,208,0.18)] dark:border-dark' /></div>
    <motion.div
    initial={{opacity: 0, y: 18}}
    whileInView={{opacity: 1, y: 0}}
    viewport={{ once: true, margin: "-80px" }}
    transition={{duration: 0.45}}
    className='min-w-0 rounded-2xl border border-ink/10 bg-light p-5 shadow-sm dark:border-light/10 dark:bg-dark sm:p-7'
    >
      <div className='flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between'><h3 className='text-xl font-bold leading-tight sm:text-2xl'>{type}</h3><span className='shrink-0 text-xs font-bold uppercase tracking-[0.14em] text-dark/45 dark:text-light/45 sm:pt-1'>{time}</span></div>
      <p className='mt-2 text-sm font-medium text-accent'>{place}</p>
      <p className='mt-4 text-sm leading-7 text-dark/70 dark:text-light/70 sm:text-base'>
        {info}
      </p>
    </motion.div>
  </li>
}

const Education = () => {

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
        Education
      </h2>
      <div ref={ref} className='relative mx-auto w-full max-w-4xl'>
        <motion.div
        style={{ scaleY: scrollYProgress }}
        className='absolute bottom-0 left-[1.18rem] top-0 w-px origin-top bg-mint/70 md:left-[1.9rem]' />
        <ul className='relative flex w-full flex-col'>
          <Details type="Bachelor of Engineering In Computer Science & Engineering" time="2017-2021"
          place="Ramaiah Institute of Technology (RIT), Bangalore"
          info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
          Intelligence." />
          <Details type="CBSE Senior Secondary Education" time="2004-2017"
          place="DAV Model School, Durgapur"
          info="Relevant courses included Mathematics and Computer Science." />
          {/* <Details type="Bachelor Of Science In Computer Science" time="2016-2020"
          place="Massachusetts Institute Of Technology (MIT)"
          info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
          Intelligence." />
          <Details type="Bachelor Of Science In Computer Science" time="2016-2020"
          place="Massachusetts Institute Of Technology (MIT)"
          info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
          Intelligence." />
          <Details type="Bachelor Of Science In Computer Science" time="2016-2020"
          place="Massachusetts Institute Of Technology (MIT)"
          info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
          Intelligence." /> */}
        </ul>
      </div>
    </div>
  )
}

export default Education;
