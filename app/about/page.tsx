"use client";

import Image from "next/image";
import Link from "next/link";
import profilePic from "../../public/images/profile/developer-pic-2.jpg";
import Layout from "../components/Layout";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Education from "../components/Education";

export default function About() {
  return <main className="bg-light text-dark dark:bg-dark dark:text-light"><Layout className="section-shell pb-20 pt-16 lg:pb-32 lg:pt-24">
    <header className="max-w-4xl"><p className="eyebrow">About me</p><h1 className="mt-5 text-5xl font-bold leading-[0.95] tracking-[-0.06em] sm:text-7xl">I like making complicated things feel simple.</h1></header>
    <section className="mt-20 grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20"><div className="relative max-w-sm"><div className="absolute -bottom-4 -left-4 h-full w-full rounded-3xl bg-accent/20" /><Image src={profilePic} alt="Abhishek Sen" className="relative aspect-[4/5] w-full rounded-3xl object-cover object-top" /></div><div className="max-w-2xl text-lg leading-8 text-dark/70 dark:text-light/70"><p>Hi, I&apos;m Abhishek — a full-stack software engineer with a soft spot for thoughtful interfaces and resilient systems. I&apos;ve spent the last few years building internal products that help people make faster, better decisions.</p><p className="mt-6">My best work happens at the intersection of design and engineering: understanding the real problem, finding the simplest useful shape, then building it with care.</p><Link href="mailto:abhishek13dgp5@gmail.com" className="mt-8 inline-flex font-bold text-dark underline decoration-accent decoration-2 underline-offset-8 dark:text-light">Start a conversation ↗</Link></div></section>
    <section className="mt-24 grid grid-cols-2 gap-6 border-y border-ink/10 py-8 dark:border-light/10 sm:grid-cols-4"><div><p className="text-3xl font-bold text-accent">3+</p><p className="mt-1 text-sm text-dark/60 dark:text-light/60">years experience</p></div><div><p className="text-3xl font-bold text-accent">10+</p><p className="mt-1 text-sm text-dark/60 dark:text-light/60">projects completed</p></div><div><p className="text-3xl font-bold text-accent">3</p><p className="mt-1 text-sm text-dark/60 dark:text-light/60">teams supported</p></div><div><p className="text-3xl font-bold text-accent">∞</p><p className="mt-1 text-sm text-dark/60 dark:text-light/60">things to learn</p></div></section>
    <Skills /><Experience /><Education />
  </Layout></main>;
}
