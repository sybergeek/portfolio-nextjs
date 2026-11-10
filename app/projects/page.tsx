"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "../components/Layout";
import { GithubIcon, LinkArrow } from "../components/Icons";
import crypto from "../../public/images/projects/crypto-screener-cover-image.jpg";
import fashion from "../../public/images/projects/fashion-studio-website.jpg";
import agency from "../../public/images/projects/agency-website-cover-image.jpg";
import devdreaming from "../../public/images/projects/devdreaming.jpg";

type Project = { title: string; type: string; summary: string; image: StaticImageData; link: string; github: string; tags: string[] };
const projects: Project[] = [
  { title: "Crypto Screener", type: "Product interface", summary: "A fast, approachable way to explore crypto markets, compare currencies, and make sense of noisy data.", image: crypto, link: "https://github.com/sybergeek", github: "https://github.com/sybergeek", tags: ["React", "Tailwind", "Recharts"] },
  { title: "Fashion Studio", type: "E-commerce concept", summary: "A tactile editorial storefront designed to make browsing feel more like discovery.", image: fashion, link: "https://github.com/sybergeek", github: "https://github.com/sybergeek", tags: ["React", "Motion", "UI"] },
  { title: "Agency Website", type: "Web experience", summary: "A flexible, expressive marketing site with a strong visual voice and clear conversion paths.", image: agency, link: "https://github.com/sybergeek", github: "https://github.com/sybergeek", tags: ["Next.js", "Design", "Responsive"] },
  { title: "DevDreaming", type: "Community platform", summary: "A clean home for sharing practical ideas, tutorials, and experiments with other developers.", image: devdreaming, link: "https://github.com/sybergeek", github: "https://github.com/sybergeek", tags: ["JavaScript", "Content", "UX"] },
];

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return <motion.article whileHover={{ y: -6 }} transition={{ duration: 0.2 }} className={featured ? "group overflow-hidden rounded-3xl border border-ink/10 bg-dark text-light dark:border-light/10" : "group overflow-hidden rounded-3xl border border-ink/10 bg-light dark:border-light/10 dark:bg-dark"}>
    <Link href={project.link} target="_blank" className="block overflow-hidden"><Image src={project.image} alt={project.title} className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105" /></Link>
    <div className="p-7 sm:p-9"><p className={featured ? "eyebrow text-mint" : "eyebrow"}>{project.type}</p><h2 className="mt-3 text-3xl font-bold tracking-tight">{project.title}</h2><p className={featured ? "mt-4 max-w-2xl leading-7 text-light/70" : "mt-4 leading-7 text-dark/65 dark:text-light/65"}>{project.summary}</p><div className="mt-7 flex flex-wrap items-center gap-2">{project.tags.map(tag => <span key={tag} className={featured ? "rounded-full border border-light/20 px-3 py-1 text-xs" : "rounded-full border border-ink/10 px-3 py-1 text-xs dark:border-light/10"}>{tag}</span>)}<Link href={project.github} target="_blank" aria-label={`${project.title} on GitHub`} className="ml-auto w-5"><GithubIcon /></Link><Link href={project.link} target="_blank" className={featured ? "inline-flex items-center gap-2 rounded-full bg-mint px-4 py-2 text-xs font-bold text-dark" : "inline-flex items-center gap-2 rounded-full bg-dark px-4 py-2 text-xs font-bold text-light dark:bg-light dark:text-dark"}>View project <LinkArrow className="w-4" /></Link></div></div>
  </motion.article>;
}

export default function Projects() { return <main className="bg-light text-dark dark:bg-dark dark:text-light"><Layout className="section-shell pb-24 pt-16 lg:pb-32 lg:pt-24"><header className="max-w-3xl"><p className="eyebrow">Selected work</p><h1 className="mt-5 text-6xl font-bold leading-[0.95] tracking-[-0.07em] sm:text-8xl">Things I&apos;ve made.</h1><p className="mt-7 max-w-xl text-lg leading-8 text-dark/65 dark:text-light/65">A handful of interfaces and products that reflect how I think: clear, curious, and built for real people.</p></header><div className="mt-16 grid gap-7 md:grid-cols-2"><div className="md:col-span-2"><ProjectCard project={projects[0]} featured /></div>{projects.slice(1).map(project => <ProjectCard key={project.title} project={project} />)}</div></Layout></main>; }
