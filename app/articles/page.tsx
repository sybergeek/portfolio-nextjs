"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "../components/Layout";
import pagination from "../../public/images/articles/pagination component in reactjs.jpg";
import loading from "../../public/images/articles/create loading screen in react js.jpg";
import forms from "../../public/images/articles/form validation in reactjs using custom react hook.png";

const articles: { title: string; summary: string; time: string; image: StaticImageData }[] = [
  { title: "Build a custom pagination component in React", summary: "A practical guide to building pagination from scratch, with the details that make it feel good to use.", time: "9 min read", image: pagination },
  { title: "Three ways to create better loading screens", summary: "Small moments matter. Here are three approaches to making waiting feel intentional instead of broken.", time: "10 min read", image: loading },
  { title: "A reusable form validation hook", summary: "A clean pattern for keeping input state, validation, and error handling predictable.", time: "8 min read", image: forms },
];

export default function Articles() { return <main className="bg-light text-dark dark:bg-dark dark:text-light"><Layout className="section-shell pb-24 pt-16 lg:pb-32 lg:pt-24"><header className="max-w-3xl"><p className="eyebrow">Notes &amp; experiments</p><h1 className="mt-5 text-6xl font-bold leading-[0.95] tracking-[-0.07em] sm:text-8xl">Thinking out loud.</h1><p className="mt-7 max-w-xl text-lg leading-8 text-dark/65 dark:text-light/65">Short, practical notes about frontend craft, product thinking, and the lessons hidden inside everyday engineering.</p></header><div className="mt-16 grid gap-7 md:grid-cols-2">{articles.map((article, index) => <motion.article key={article.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="group overflow-hidden rounded-3xl border border-ink/10 bg-light dark:border-light/10 dark:bg-dark"><Link href="https://github.com/sybergeek" target="_blank" className="block overflow-hidden"><Image src={article.image} alt={article.title} className="aspect-[16/9] w-full object-cover transition duration-500 group-hover:scale-105" /></Link><div className="p-7"><div className="flex items-center justify-between gap-4 text-xs font-bold uppercase tracking-[0.16em] text-accent"><span>Article</span><span>{article.time}</span></div><h2 className="mt-4 text-2xl font-bold leading-tight tracking-tight">{article.title}</h2><p className="mt-4 leading-7 text-dark/65 dark:text-light/65">{article.summary}</p><Link href="https://github.com/sybergeek" target="_blank" className="mt-6 inline-block font-bold underline decoration-accent decoration-2 underline-offset-8">Read note ↗</Link></div></motion.article>)}</div></Layout></main>; }
