"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "./components/Layout";
import profilePic from "../public/images/profile/developer-pic-1.png";
import { GithubIcon, LinkedInIcon, LinkArrow } from "./components/Icons";

const highlights = [["03+", "years building for the web"], ["10+", "projects shipped"], ["$10M", "risk reduction enabled"]];

export default function Home() {
  return (
    <main className="bg-light text-dark dark:bg-dark dark:text-light">
      <Layout className="section-shell pb-20 pt-16 sm:pt-24 lg:pb-28 lg:pt-28">
        <section className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            <p className="eyebrow mb-6">Software engineer · Bengaluru</p>
            <h1 className="max-w-4xl text-[clamp(3.5rem,8vw,7.5rem)] font-bold leading-[0.92] tracking-[-0.07em]">I build <span className="text-accent">useful</span> things for the web.</h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-dark/70 dark:text-light/70 sm:text-xl">Full-stack engineer translating complex systems into clear, dependable experiences. Currently working on workflow intelligence at JPMorgan Chase.</p>
            <div className="mt-10 flex flex-wrap items-center gap-4"><Link href="/projects" className="inline-flex items-center gap-2 rounded-full bg-dark px-6 py-3.5 text-sm font-bold text-light transition hover:-translate-y-0.5 hover:bg-accent dark:bg-light dark:text-dark dark:hover:bg-mint">See selected work <LinkArrow className="w-5" /></Link><Link href="mailto:abhishek13dgp5@gmail.com" className="outline-button">Let&apos;s talk ↗</Link></div>
            <div className="mt-12 flex items-center gap-5"><span className="text-xs font-bold uppercase tracking-[0.2em] text-dark/40 dark:text-light/40">Find me</span><Link aria-label="GitHub" href="https://github.com/sybergeek" target="_blank" className="w-5 transition hover:text-accent"><GithubIcon /></Link><Link aria-label="LinkedIn" href="https://linkedin.com/in/abhishek-sen-url" target="_blank" className="w-5 transition hover:text-accent"><LinkedInIcon /></Link></div>
          </div>
          <div className="relative mx-auto w-full max-w-md lg:ml-auto"><div className="absolute -right-5 -top-5 h-full w-full rounded-[2rem] border border-accent/60" /><div className="relative overflow-hidden rounded-[2rem] bg-mint p-5 dark:bg-accent"><Image src={profilePic} alt="Abhishek Sen" priority className="aspect-[4/5] w-full rounded-[1.25rem] object-cover object-top grayscale transition duration-500 hover:grayscale-0" /><div className="absolute bottom-10 left-10 rounded-full bg-light px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-dark shadow-xl">Curious by default</div></div></div>
        </section>
        <section className="mt-24 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 dark:border-light/10 dark:bg-light/10 sm:grid-cols-3">{highlights.map(([value, label], index) => <motion.div key={label} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="bg-light p-7 dark:bg-dark"><p className="text-4xl font-bold tracking-[-0.05em] text-accent">{value}</p><p className="mt-2 text-sm font-medium text-dark/60 dark:text-light/60">{label}</p></motion.div>)}</section>
        <section className="mt-28 grid gap-8 border-t border-ink/10 pt-10 dark:border-light/10 md:grid-cols-[0.8fr_1.2fr]"><div><p className="eyebrow">A little context</p><h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Good software feels inevitable.</h2></div><p className="max-w-2xl text-lg leading-8 text-dark/70 dark:text-light/70">I care about the space where product thinking, interface design, and reliable engineering overlap. Whether I&apos;m simplifying a dashboard or untangling a backend, my goal is the same: make the next step obvious.</p></section>
      </Layout>
    </main>
  );
}
