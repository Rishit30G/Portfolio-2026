'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRightIcon, ArrowUpRightIcon } from '@phosphor-icons/react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CityTimeFlipper from '@/components/CityTimeFlipper';
import NavLink from '@/components/NavLink';
import AnimatedUnderlineLink from '@/components/AnimatedUnderlineLink';

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

const NAV_LINKS = ['Home', 'About', 'Services', 'Contact'] as const;

const BLOG_POSTS = [
  { title: 'My 2026 Setup & Tech Stack', date: '6th March 2026', slug: '', image: '/Portrait.png' },
  { title: 'Delhi food is getting better', date: '6th March 2026', slug: '', image: '/Portrait2.png' },
  { title: 'My 2026 Setup & Tech Stack', date: '6th March 2026', slug: '', image: '/Portrait3.png' },
] as const;

export default function Home() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const paraRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const ishitWrapRef = useRef<HTMLSpanElement>(null);
  const ishitTextRef = useRef<HTMLSpanElement>(null);
  const skillsContainerRef = useRef<HTMLDivElement>(null);
  const skillHighlightRef = useRef<HTMLDivElement>(null);
  const activeSkillRef = useRef<HTMLParagraphElement | null>(null);
  const blogCursorRef = useRef<HTMLDivElement>(null);
  const blogImgRef = useRef<HTMLImageElement>(null);
  const blogIsOpenRef = useRef(false);
  const aboutTextRef = useRef<HTMLDivElement>(null);
  const peopleSectionRef = useRef<HTMLDivElement>(null);
  const peopleTrackRef = useRef<HTMLDivElement>(null);
  const [showOverlay, setShowOverlay] = useState(true);

  const handleLogoEnter = () => {
    const fullWidth = ishitTextRef.current?.scrollWidth ?? 0;
    gsap.to(ishitWrapRef.current, {
      width: fullWidth,
      duration: 0.35,
      ease: 'sine.out',
    });
  };

  const handleLogoLeave = () => {
    gsap.to(ishitWrapRef.current, {
      width: 0,
      duration: 0.35,
      ease: 'sine.inOut',
    });
  };

  const handleSkillHover = (e: React.MouseEvent<HTMLParagraphElement>) => {
    const el = e.currentTarget;
    const container = skillsContainerRef.current;
    const highlight = skillHighlightRef.current;
    if (!container || !highlight) return;

    if (!el.textContent?.trim()) {
      if (activeSkillRef.current) {
        gsap.set(activeSkillRef.current, { color: 'var(--color-foreground)' });
        activeSkillRef.current = null;
      }
      gsap.to(highlight, { opacity: 0, duration: 0.3, ease: 'sine.out' });
      return;
    }

    if (activeSkillRef.current && activeSkillRef.current !== el) {
      gsap.set(activeSkillRef.current, { color: 'var(--color-foreground)' });
    }

    const cr = container.getBoundingClientRect();
    const er = el.getBoundingClientRect();
    const isFirst = !activeSkillRef.current;
    activeSkillRef.current = el;

    if (isFirst) {
      gsap.set(highlight, {
        x: er.left - cr.left,
        y: er.top - cr.top,
        width: er.width,
        height: er.height,
      });
      gsap.to(highlight, { opacity: 1, duration: 0.25 });
    } else {
      gsap.to(highlight, {
        x: er.left - cr.left,
        y: er.top - cr.top,
        width: er.width,
        height: er.height,
        opacity: 1,
        duration: 0.35,
        ease: 'power3.out',
      });
    }

    gsap.set(el, { color: 'var(--color-background)' });
  };

  const handleSkillsLeave = () => {
    const highlight = skillHighlightRef.current;
    if (!highlight) return;

    if (activeSkillRef.current) {
      gsap.set(activeSkillRef.current, { color: 'var(--color-foreground)' });
      activeSkillRef.current = null;
    }

    gsap.to(highlight, { opacity: 0, duration: 0.3, ease: 'sine.out' });
  };

  const handleBlogMouseEnter = (image: string) => {
    if (blogImgRef.current) blogImgRef.current.src = image;
    if (!blogIsOpenRef.current) {
      blogIsOpenRef.current = true;
      gsap.fromTo(
        blogCursorRef.current,
        { clipPath: 'inset(50% 50% 50% 50%)' },
        { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.5, ease: 'power3.out' }
      );
    }
  };

  const handleBlogMouseLeave = () => {
    blogIsOpenRef.current = false;
    gsap.killTweensOf(blogCursorRef.current, 'clipPath');
    gsap.to(blogCursorRef.current, {
      clipPath: 'inset(50% 50% 50% 50%)',
      duration: 0.4,
      ease: 'power3.in',
    });
  };

  const handleBlogMouseMove = (e: React.MouseEvent) => {
    gsap.to(blogCursorRef.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.25,
      ease: 'power2.out',
    });
  };

  useGSAP(() => {

    const nameSplit = SplitText.create(nameRef.current, {
      type: 'words',
      mask: 'words',
    });
    gsap.set(nameSplit.words, { yPercent: 100 });

    const buttonSplit = SplitText.create(buttonRef.current, {
      type: 'words',
      mask: 'words',
    });
    gsap.set(buttonSplit.words, { yPercent: 100 });

    const paraSplit = SplitText.create(paraRef.current, {
      type: 'lines',
      mask: 'lines',
    });
    gsap.set(paraSplit.lines, { yPercent: 100 });

    const tl = gsap.timeline();

    tl.to(counterRef.current, {
      innerText: 100,
      duration: 4,
      snap: { innerText: 1 },
      ease: 'power4.out',
    });

    tl.to(counterRef.current, {
      y: -100,
      duration: 0.6,
      ease: 'sine.in',
    });

    tl.to(
      overlayRef.current,
      {
        clipPath: 'inset(0 0 100% 0)',
        duration: 1.2,
        ease: 'power2.inOut',
        onComplete: () => setShowOverlay(false),
      },
      '-=0.6'
    );

    tl.to(
      [nameSplit.words, buttonSplit.words],
      {
        yPercent: 0,
        duration: 0.6,
        ease: 'power3.out',
      },
      '-=0.4'
    );

    tl.to(
      paraSplit.lines,
      {
        yPercent: 0,
        duration: 1,
        ease: 'power3.out',
      },
      '+=0.3'
    );

    tl.fromTo(
      imageRef.current,
      { clipPath: 'inset(100% 0% 0% 0%)' },
      {
        clipPath: 'inset(0% 0% 0% 0%)',
        duration: 1.2,
        ease: 'power3.inOut',
      },
      '-=0.6'
    );

    if (aboutTextRef.current) {
      const aboutParas = gsap.utils.toArray<HTMLParagraphElement>(
        aboutTextRef.current.querySelectorAll('p')
      );
      aboutParas.forEach((para) => {
        const split = SplitText.create(para, { type: 'lines', mask: 'lines' });
        gsap.set(split.lines, { yPercent: 100 });
        gsap.to(split.lines, {
          yPercent: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: para,
            start: 'top 85%',
          },
        });
      });
    }

    const section = peopleSectionRef.current;
    const track = peopleTrackRef.current;
    if (section && track) {
      const scrollAmount = track.scrollWidth - section.offsetWidth;
      gsap.to(track, {
        x: -scrollAmount,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${scrollAmount}`,
          pin: true,
          scrub: 1,
        },
      });
    }
  }, []);

  return (
    <>
      {showOverlay && (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground [clip-path:inset(0_0_0_0)]"
        >
          <div className="overflow-hidden">
            <span
              ref={counterRef}
              className="text-background text-3xl tracking-tight block"
            >
              0
            </span>
          </div>
        </div>
      )}

      <div className="relative z-10 bg-background">
      <div className="flex flex-col justify-end h-screen">
        {/* Header */}
        <div className="flex justify-between items-start w-full h-1/5 pr-10 pl-4">
          <div
            className="pt-8 cursor-pointer select-none"
            onMouseEnter={handleLogoEnter}
            onMouseLeave={handleLogoLeave}
          >
            <span className="text-4xl tracking-tight inline-flex items-baseline">
              R/
              <span
                ref={ishitWrapRef}
                className="inline-block overflow-hidden"
                style={{ width: 0 }}
              >
                <span ref={ishitTextRef} className="inline-block whitespace-nowrap">
                  ishit
                </span>
              </span>
              30G.
            </span>
          </div>
          <div className="pt-10">
            <CityTimeFlipper />
          </div>
          <nav className="flex gap-10 pt-8">
            {NAV_LINKS.map((link) => (
              <NavLink key={link} text={link} />
            ))}
          </nav>
        </div>

        {/* Hero */}
        <div className="flex justify-between items-center w-full h-3/5 pl-4">
          <p
            ref={paraRef}
            className="text-4xl tracking-tight w-sm text-balance leading-tight"
          >
            A CREATIVE WEB DESIGNER AND AI GENERALIST WHO
            BUILDS THE BEST.
          </p>
          <div
            ref={imageRef}
            className="w-110 h-110 mb-20"
            style={{ clipPath: 'inset(100% 0% 0% 0%)' }}
          >
            <img
              src="/Portrait.png"
              alt="Portrait of Rishit Gupta"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Footer row */}
        <div className="flex justify-between items-end w-full h-1/5">
          <h1 ref={nameRef} className="text-[10rem] tracking-tighter">
            Rishit
            <span
              style={{ fontFamily: 'var(--font-apparel)' }}
              className="font-medium ml-8"
            >
              Gupta
            </span>
          </h1>
          <div
            ref={buttonRef}
            className="group relative overflow-hidden border border-foreground py-8 px-12 rounded-full mr-10 mb-14 cursor-pointer"
          >
            <div className="absolute inset-x-0 bottom-0 h-0 bg-foreground transition-[height] duration-300 ease-in-out group-hover:h-full rounded-full" />
            <div className="relative z-10 flex items-center">
              <span className="text-3xl transition-colors duration-300 group-hover:text-background">
                LET&apos;S TALK{' '}
              </span>
              <ArrowRightIcon
                size={50}
                weight="light"
                className="inline-block ml-4 transition-transform duration-300 ease-out group-hover:rotate-[-40deg] group-hover:text-background"
              />
            </div>
          </div>
        </div>
      </div>
      <div className='w-[1600px] mx-auto mt-30'>
      <div className='justify-between flex items-baseline border-b border-foreground-muted/40'>
          <span className='text-3xl tracking-wide text-foreground-muted font-mono'>001</span>
          <h2 className='text-[10rem] tracking-tighter'>
            About
          </h2>
        </div>
        <div className='flex justify-between mt-20'>
           <div className='w-1/2'>
              <video src='/video.mp4' autoPlay loop muted className='w-full h-full object-cover aspect-video' />
           </div>
           <div ref={aboutTextRef} className='w-md'>
            <p className='text-4xl tracking-tight text-justify text-right leading-tight'> 
             23 Y/O AI ENGINEER WORKING REMOTELY.
            </p>
            <p className='text-4xl tracking-tight  text-justify text-right leading-tight mt-8'> 
               YAPPING ABOUT AI AND WEB DEVELOPMENT.
            </p>
           
            <p className='text-4xl tracking-tight  text-justify text-right leading-tight mt-30'> 
               LIFE MAKES US LEARN NEW THINGS EVERYDAY.
            </p>
            <p className='text-4xl tracking-tight text-justify text-right leading-tight mt-8'> 
              DOING WFH FOR A US-PUNE BASED AGENCY.
            </p>
           </div>
        </div>
      </div>
      <div className='w-[1600px] mx-auto mt-30'>
        <div className='justify-between flex items-baseline border-b border-foreground-muted/40'>
        <h2 className='text-[10rem] tracking-tighter'>
            Skills
          </h2>
          <span className='text-3xl tracking-wide text-foreground-muted font-mono'>002</span>
        </div>
        <div ref={skillsContainerRef} className='relative' onMouseLeave={handleSkillsLeave}>
          <div
            ref={skillHighlightRef}
            className='absolute top-0 left-0 bg-foreground pointer-events-none opacity-0'
          />
          <div className='grid grid-cols-8 text-center text-xl justify-between mt-10 ml-20'>
            {['MCP', 'AI Agents', 'AI Skills', '', 'LLMs', 'AI Automation', 'RAG', 'Prompt Eng'].map((skill, i) => (
              <p key={i} className='py-8 relative z-10 cursor-pointer' onMouseEnter={handleSkillHover}>{skill}</p>
            ))}
          </div>
          <div className='grid grid-cols-8 text-center text-xl justify-between mt-10 mr-20'>
            {['Next.js', 'Typescript', 'React', 'Tailwind CSS', '', '', 'PostgreSQL', 'WordPress'].map((skill, i) => (
              <p key={i} className='py-8 relative z-10 cursor-pointer' onMouseEnter={handleSkillHover}>{skill}</p>
            ))}
          </div>
          <div className='grid grid-cols-8 text-center text-xl justify-between mt-10 ml-20'>
            {['Speaker', 'Content', 'Mentor', '', '', 'Design', 'Writing', 'AI Consulting'].map((skill, i) => (
              <p key={i} className='py-8 relative z-10 cursor-pointer' onMouseEnter={handleSkillHover}>{skill}</p>
            ))}
          </div>
        </div>
      </div>
      <div ref={peopleSectionRef} className='w-[1600px] mx-auto mt-30'>
        <div className='justify-between flex items-baseline border-b border-foreground-muted/40'>
          <span className='text-3xl tracking-wide text-foreground-muted font-mono'>003</span>
          <h2 className='text-[10rem] tracking-tighter'>
            People
          </h2>
        </div>
        <div className='mt-10 overflow-hidden'>
          <div ref={peopleTrackRef} className='flex gap-20'>
          <Link href='https://www.linkedin.com/in/rishit-gupta-4b18841b1/' target='_blank'>
           <div className='py-8 border-r border-foreground-muted/40 pr-12 min-w-[700px]'>
              <p className='text-2xl tracking-tight leading-loose'>Rishit works at <span className='font-bold text-3xl mx-1 tracking-normal bg-foreground text-background px-4 py-2 group-hover:rounded-2xl transition-all ease-in-out duration-300'>blazing speed</span>. He sets up processes and executes efficiently. He completed all assignments on time with higher-than-expected quality.</p>
              <div className='flex justify-between items-end mt-20'>
                <p className='text-sm tracking-tight text-foreground-muted'>Gaurav Sen</p>
                <p className='text-sm tracking-tight'><span className='text-2xl ml-1'>InterviewReady</span> . CEO</p>
              </div>
            </div>
            </Link>

            <Link href='https://turtlnest.com' target='_blank'></Link>
            <div className='py-8 pr-20 border-r border-foreground-muted/40 min-w-[700px]'>
              <p className='text-2xl tracking-tight leading-loose'>Rishit worked <span className='font-bold text-3xl mx-1 tracking-normal bg-foreground text-background px-4 py-2 group-hover:rounded-2xl transition-all ease-in-out duration-300'>excpetionally well</span> on our website. His attention to detail and commitment to quality made him a valuable asset to our team.</p>
              <div className='flex justify-between items-end mt-20'>
                <p className='text-sm tracking-tight text-foreground-muted'>Ankur Sharma</p>
                <p className='text-sm tracking-tight'><span className='text-2xl ml-1'>TurtlNest</span> . Co-Founder</p>
              </div>
            </div>

            <Link href='https://www.linkedin.com/in/rishit-gupta-4b18841b1/' target='_blank'>
            <div className='py-8 pr-20 border-r border-foreground-muted/40 min-w-[700px]'>
              <p className='text-2xl tracking-tight leading-loose'>Rishit&apos;s <span className='font-bold text-3xl mx-1 tracking-normal bg-foreground text-background px-4 py-2 group-hover:rounded-2xl transition-all ease-in-out duration-300'>outstanding performance</span> at Code For Gov Tech earned him a SamagraX internship. His npm package powers Ama Krushi for Odisha farmers.</p>
              <div className='flex justify-between items-end mt-20'>
                <p className='text-sm tracking-tight text-foreground-muted'>Abhishek Kumar</p>
                <p className='text-sm tracking-tight'><span className='text-2xl ml-1'>Delta6Labs</span> . Tech Lead</p>
              </div>
            </div>
            </Link>

          
          <Link href='https://www.linkedin.com/in/rishit-gupta-4b18841b1/' target='_blank'>
            <div className='py-8 pr-8 min-w-[700px]'>
              <p className='text-2xl tracking-tight leading-loose'>Rishit designed the full system from ground zero. He learned real-world product functioning and built modular, extensible products. I <span className='font-bold text-3xl mx-1 tracking-normal bg-foreground text-background px-4 py-2 group-hover:rounded-2xl transition-all ease-in-out duration-300'>highly recommend</span> him.</p>
              <div className='flex justify-between items-end mt-20'>
                <p className='text-sm tracking-tight text-foreground-muted'>Nischal Gaba</p>
                <p className='text-sm tracking-tight'><span className='text-2xl ml-1'>Prodigal AI</span> . CEO</p>
              </div>
            </div>
            </Link>
          </div>
        </div>
      </div>
      <div className='w-[1600px] mx-auto mt-30'>
        <div className='justify-between flex items-baseline'>
          <h2 className='text-[10rem] tracking-tighter'>
            Blogs
          </h2>
          <span className='text-3xl tracking-wide text-foreground-muted font-mono'>004</span>
        </div>
        <div
          className='mt-10'
        >
          <div className='grid grid-cols-12 border-b border-foreground-muted/40 pb-4'>
            <h3 className='text-md tracking-tight col-span-6 pl-4'>TITLE</h3>
            <p className='text-md tracking-tight col-span-4'>DATE</p>
            <p className='text-md tracking-tight col-span-2'>VISIT</p>
          </div>
          <div onMouseMove={handleBlogMouseMove}>
          {BLOG_POSTS.map((post, i) => (
            <Link
              key={i}
              href={post.slug ? `/blog/${post.slug}` : '#'}
              onMouseEnter={() => handleBlogMouseEnter(post.image)}
              onMouseLeave={handleBlogMouseLeave}
              className={`group relative overflow-hidden block ${
                i < BLOG_POSTS.length - 1 ? 'border-b border-dashed border-foreground-muted/40' : ''
              }`}
            >
              <div className='absolute inset-x-0 bottom-0 h-0 bg-foreground transition-[height] duration-300 ease-in-out group-hover:h-full' />
              <div className='relative z-10 grid grid-cols-12 py-6 text-2xl tracking-tight cursor-pointer'>
                <h3 className='col-span-6 transition-colors duration-300 group-hover:text-background pl-4'>{post.title}</h3>
                <p className='col-span-4 transition-colors duration-300 group-hover:text-background'>{post.date}</p>
                <p className='col-span-2'>
                  <ArrowRightIcon size={30} weight='light' className='inline-block group-hover:-rotate-45 group-hover:text-background transition-all duration-300 ease-in-out' />
                </p>
              </div>
            </Link>
          ))}

          </div>
          <div className='flex items-center justify-center mt-10'>
            <div className='p-4 border-foreground-muted/40 hover:bg-foreground hover:text-background group transition-all duration-300 ease-in-out'>
            <p className='text-xl tracking-tight group-hover:text-background'>View More <ArrowRightIcon size={25} weight='regular' className='inline-block group-hover:-rotate-45 ml-1 group-hover:text-background transition-all duration-300 ease-in-out' /></p>
            </div>
          </div>
        </div>
      </div>

      {/* Blog post cursor-following image */}
      <div
        ref={blogCursorRef}
        className='fixed top-0 left-0 w-52 h-52 pointer-events-none z-50'
        style={{ clipPath: 'inset(50% 50% 50% 50%)' }}
      >
        <img
          ref={blogImgRef}
          src='/Portrait.png'
          alt=''
          className='w-full h-full object-cover'
        />
      </div>



      <div className='w-[1600px] mx-auto mt-30'>
        <div className='justify-between flex items-baseline border-b border-foreground-muted/40'>
          <span className='text-3xl tracking-wide text-foreground-muted font-mono'>005</span>
          <h2 className='text-[10rem] tracking-tighter'>
            Contact
          </h2>
        </div>
        <p className='text-4xl tracking-tight w-md uppercase text-justify mt-10'>
          Actively building for those who dream big and want to create impactful solutions.
        </p>
        <div className='flex justify-between items-baseline mt-10'>
          <p className='text-xl tracking-tight font-mono'> mailto: <span className='underline underline-offset-10'>hello@rishitgupta.com</span></p>
        <div
            ref={buttonRef}
            className="group relative overflow-hidden border border-foreground py-8 px-12 rounded-full mr-10 mb-14 cursor-pointer"
          >
            <div className="absolute inset-x-0 bottom-0 h-0 bg-foreground transition-[height] duration-300 ease-in-out group-hover:h-full rounded-full" />
            <div className="relative z-10 flex items-center">
              <span className="text-3xl transition-colors duration-300 group-hover:text-background">
                LET&apos;S TALK{' '}
              </span>
              <ArrowRightIcon
                size={50}
                weight="light"
                className="inline-block ml-4 transition-transform duration-300 ease-out group-hover:rotate-[-40deg] group-hover:text-background"
              />
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className='sticky bottom-0 bg-foreground pb-10 -mt-20'>
          <div className='text-center'>
          <p className='text-[18rem] tracking-tight text-background'>
            Rishit 
            <span
              style={{ fontFamily: 'var(--font-apparel)' }}
              className="font-medium ml-8"
            >
              Gupta
            </span>
          </p>
          <div className='flex justify-between items-center gap-2 text-3xl w-[1400px] mx-auto -mt-2'>
            <AnimatedUnderlineLink href='https://www.youtube.com/@rishit30g' className='text-background'>YouTube <ArrowUpRightIcon size={25} weight='regular' className='inline-block ml-1 transition-transform duration-300 ease-in-out group-hover:rotate-45' /></AnimatedUnderlineLink>
            <AnimatedUnderlineLink href='https://github.com/Rishit30G' className='text-background'>GitHub <ArrowUpRightIcon size={25} weight='regular' className='inline-block ml-1 transition-transform duration-300 ease-in-out group-hover:rotate-45' /></AnimatedUnderlineLink>
            <AnimatedUnderlineLink href='https://www.linkedin.com/in/rishit-gupta-4b18841b1/' className='text-background'>LinkedIn <ArrowUpRightIcon size={25} weight='regular' className='inline-block ml-1 transition-transform duration-300 ease-in-out group-hover:rotate-45' /></AnimatedUnderlineLink>
            <AnimatedUnderlineLink href='https://x.com/rishit30g' className='text-background'>Twitter <ArrowUpRightIcon size={25} weight='regular' className='inline-block ml-1 transition-transform duration-300 ease-in-out group-hover:rotate-45' /></AnimatedUnderlineLink>
          </div>
        </div>
      </div>


    </>
  );
}
