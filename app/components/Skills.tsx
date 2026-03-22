import React from 'react';
import { motion } from "framer-motion";

const Skill = ({name, x="0vw", y="0vw"} : {name: any, x: any, y: any}) => {
  return <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
  py-1.5 px-3 text-sm md:py-3 md:px-6 md:text-base shadow-dark cursor-pointer absolute
  dark:bg-light dark:text-dark'
  whileHover={{scale:1.1}}
  initial={{x: 0, y: 0}}
  whileInView={{x: x, y: y}}
  transition={{ duration: 1.5 }}
  viewport={{ once: true }}
  >
    {name}
  </motion.div>
}

const Skills = () => {
  return (
    <>
    <h2 className='font-bold text-4xl md:text-6xl lg:text-8xl mt-32 md:mt-64 w-full text-center'>Skills</h2>
    <div className='w-full h-[50vh] md:h-[80vh] lg:h-screen relative flex items-center justify-center rounded-full bg-circularLightSm md:bg-circularLightMd lg:bg-circularLight'>
      <Skill name="Web" x="0vw" y="0vw" />
      <Skill name="HTML" x="-20vw" y="2vw" />
      <Skill name="CSS" x="-5vw" y="-8vw" />
      <Skill name="Javascript" x="15vw" y="6vw" />
      <Skill name="ReactJS" x="0vw" y="10vw" />
      <Skill name="NextJS" x="-15vw" y="-14vw" />
      <Skill name="Web Design" x="25vw" y="-5vw" />
      <Skill name="Figma" x="0vw" y="-18vw" />
      <Skill name="Firebase" x="-18vw" y="15vw" />
      <Skill name="Java" x="15vw" y="-15vw" />
      <Skill name="Spring" x="15vw" y="-8vw" />
      <Skill name="Kafka" x="-25vw" y="-8vw" />
      <Skill name="Angular" x="-25vw" y="9vw" />
      <Skill name="DB2" x="15vw" y="15vw" />
    </div>
    </>
  )
}

export default Skills;