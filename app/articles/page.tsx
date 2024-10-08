"use client";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import AnimatedText from "../components/AnimatedText";
import Layout from "../components/Layout";
import article1 from "../../public/images/articles/pagination component in reactjs.jpg";
import article2 from "../../public/images/articles/create loading screen in react js.jpg";
import { motion, useMotionValue } from "framer-motion";
import article3 from "../../public/images/articles/form validation in reactjs using custom react hook.png";
import { useRef } from "react";

const FramerImage = motion(Image);

const MovingImage = ({title, img, link} : {title: any, img: any, link: any}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  // function handleMouse({event}: {event: any}) {
  //   if (imgRef.current) {
  //     imgRef.current.style.display = "inline-block";
  //     x.set(event.pageX);
  //     y.set(-10);
  //   }
  // }

  // function handleMouseLeave({event} : {event: any}) {
  //   if (imgRef.current) {
  //     imgRef.current.style.display = "none";
  //   x.set(0);
  //   y.set(0);
  //   }
  // }

  return (
    <Link href={link} target="_blank"
    // onMouseMove={handleMouse}
    // onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">{title}</h2>
      <FramerImage
      style={{ x: x, y: y }}
      whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
      initial={{ opacity: 0 }}
      ref={imgRef} src={img} alt={title} className="z-10 w-96 h-auto hidden absolute rounded-lg" />
    </Link>
  )
}

const Article = ({img, title, date, link} : {img: any, title: any, date: any, link: any}) => {
  return <motion.li 
  initial={{ y: 200 }}
  whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
  viewport={{ once: true }}
  className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between
  bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4
  dark:bg-dark dark:text-light dark:border-light">
    <MovingImage title={title} img={img} link={link} />
    <span  className="text-primary dark:text-primaryDark font-semibold pl-4">{date}</span>
  </motion.li>
}

const FeaturedArticle = ({img, title, time, summary, link} : {img: any, title: any, time: any, summary: any, link: any}) => {
  return <li className="col-span-1 w-full p-4 bg-light border border-solid
  border-dark rounded-2xl relative dark:bg-dark dark:border-light">
    <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[102.5%]
      rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl" />
    <Link href={link} target="_blank"
      className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage src={img} alt={title} className="w-full h-auto"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 hover:underline mt-4">{title}</h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary dark:text-primaryDark font-semibold">{time}</span>
  </li>
}

export default function Articles() {
  return (
    <>
      <Head>
        <title>Abhishek Sen | Articles Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center overflow-hidden
      bg-light text-dark dark:bg-dark dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="Words Can Change The World!" className="mb-16" />
          <ul className="grid grid-cols-2 gap-16">
            <FeaturedArticle
            img={article1}
            title="Build A Custom Pagination Component In Reactjs From Scratch"
            time="9 min read"
            summary="Learn how to build a custom pagination component in ReactJS from scratch. 
            Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
            link="/"
            />
            <FeaturedArticle
            img={article2}
            title="Creating Stunning Loading Screens In React: Build 3 Types Of Loading Screens"
            time="10 min read"
            summary="Learn how to create stunning loading screens in React with 3 different methods. 
            Discover how to use React-Loading, React-Lottie & build a custom loading screen. 
            Improve the user experience."
            link="/"
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">All Articles</h2>
          <ul>
            <Article
            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
            img={article3}
            date="March 22, 2023"
            link="/"
            />
            <Article
            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
            img={article3}
            date="March 22, 2023"
            link="/"
            />
            <Article
            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
            img={article3}
            date="March 22, 2023"
            link="/"
            />
            <Article
            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
            img={article3}
            date="March 22, 2023"
            link="/"
            />
            <Article
            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
            img={article3}
            date="March 22, 2023"
            link="/"
            />
          </ul>
        </Layout>
      </main>
    </>
  );
}
