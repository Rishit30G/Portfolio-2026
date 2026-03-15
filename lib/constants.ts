export const NAV_LINKS = ['Skills', 'People', 'Blogs', 'Contact'] as const;

export const BLOG_POSTS = [
  { title: 'My 2026 Setup & Tech Stack', date: '6th March 2026', slug: '', image: '/Portrait.png' },
  { title: 'Delhi food is getting better', date: '6th March 2026', slug: '', image: '/Portrait2.png' },
  { title: 'My 2026 Setup & Tech Stack', date: '6th March 2026', slug: '', image: '/Portrait3.png' },
] as const;

export const SKILLS_ROWS = [
  { skills: ['MCP', 'AI Agents', 'AI Skills', '', 'LLMs', 'AI Automation', 'RAG', 'Prompt Eng'], className: 'ml-20' },
  { skills: ['Next.js', 'Typescript', 'React', 'Tailwind CSS', '', '', 'PostgreSQL', 'WordPress'], className: 'mr-20' },
  { skills: ['Speaker', 'Content', 'Mentor', '', '', 'Design', 'Writing', 'AI Consulting'], className: 'ml-20' },
] as const;

export interface Testimonial {
  before: string;
  highlight: string;
  after: string;
  author: string;
  company: string;
  role: string;
  href: string;
  cardClassName: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    before: 'Rishit works at ',
    highlight: 'blazing speed',
    after: '. He sets up processes and executes efficiently. He completed all assignments on time with higher-than-expected quality.',
    author: 'Gaurav Sen',
    company: 'InterviewReady',
    role: 'CEO',
    href: 'https://www.linkedin.com/in/rishit-gupta-4b18841b1/',
    cardClassName: 'py-8 pr-10 border-r border-foreground-muted/40 max-lg:px-4 max-lg:py-0 lg:w-[700px] w-[350px] '
  },
  {
    before: 'Rishit worked ',
    highlight: 'excpetionally well',
    after: ' on our website. His attention to detail and commitment to quality made him a valuable asset to our team.',
    author: 'Ankur Sharma',
    company: 'TurtlNest',
    role: 'Co-Founder',
    href: 'https://turtlnest.com',
    cardClassName: 'py-8 px-10 border-r border-foreground-muted/40 max-lg:px-4 max-lg:py-0 lg:w-[700px] w-[350px] '
  },
  {
    before: "Rishit's ",
    highlight: 'outstanding performance',
    after: ' at Code For Gov Tech earned him a SamagraX internship. His npm package powers Ama Krushi for Odisha farmers.',
    author: 'Abhishek Kumar',
    company: 'Delta6Labs',
    role: 'Tech Lead',
    href: 'https://www.linkedin.com/in/rishit-gupta-4b18841b1/',
    cardClassName: 'py-8 px-10  border-r border-foreground-muted/40 max-lg:px-4 max-lg:py-0 lg:w-[700px] w-[350px]',
  },
  {
    before: 'Rishit designed the full system from ground zero. He learned real-world product functioning and built modular, extensible products. I ',
    highlight: 'highly recommend',
    after: ' him.',
    author: 'Nischal Gaba',
    company: 'Prodigal AI',
    role: 'CEO',
    href: 'https://www.linkedin.com/in/rishit-gupta-4b18841b1/',
    cardClassName: 'py-8 pl-10  max-lg:px-4 max-lg:py-0 lg:w-[700px] w-[350px]',
  },
];

export const SOCIAL_LINKS = [
  { label: 'YouTube', href: 'https://www.youtube.com/@rishit30g' },
  { label: 'GitHub', href: 'https://github.com/Rishit30G' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rishit-gupta-4b18841b1/' },
  { label: 'Twitter', href: 'https://x.com/rishit30g' },
] as const;
