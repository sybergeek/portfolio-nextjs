import React from 'react';

const skills = ['Java', 'Spring', 'React', 'Next.js', 'TypeScript', 'JavaScript', 'Angular', 'Kafka', 'DB2', 'Figma', 'Web design', 'Product thinking'];

const Skills = () => {
  return <section className='mt-28 md:mt-40'>
    <div className='mb-10 flex flex-col gap-4 border-b border-ink/10 pb-8 dark:border-light/10 sm:flex-row sm:items-end sm:justify-between'>
      <div><p className='eyebrow'>Toolkit</p><h2 className='mt-3 text-4xl font-bold tracking-[-0.05em] md:text-6xl'>Skills &amp; tools</h2></div>
      <p className='max-w-sm text-sm leading-6 text-dark/55 dark:text-light/55'>A practical mix of product thinking, frontend craft, and backend systems.</p>
    </div>
    <div className='flex flex-wrap gap-3'>
      {skills.map((skill, index) => <span key={skill} className={`rounded-full border px-4 py-2.5 text-sm font-semibold transition hover:-translate-y-1 ${index % 4 === 0 ? 'border-accent bg-accent text-light' : index % 4 === 1 ? 'border-mint bg-mint text-dark' : 'border-ink/10 dark:border-light/10'}`}>{skill}</span>)}
    </div>
  </section>;
};

export default Skills;
