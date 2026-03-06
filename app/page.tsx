'use client';

import { useRef, useState } from 'react';
import { ArrowRightIcon } from '@phosphor-icons/react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import CityTimeFlipper from '@/components/CityTimeFlipper';
import NavLink from '@/components/NavLink';

gsap.registerPlugin(useGSAP, SplitText);

const NAV_LINKS = ['Home', 'About', 'Services', 'Contact'] as const;

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
          <h1 ref={nameRef} className="text-[10rem] tracking-tight">
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
           <div className='w-md'>
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
        {/* <div className='text-6xl tracking-tight mt-20'>
          <p>AI</p>
        </div> */}
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
            {['Speaker', 'Content', 'Advisor', '', '', 'Design', 'Writing', 'AI Consulting'].map((skill, i) => (
              <p key={i} className='py-8 relative z-10 cursor-pointer' onMouseEnter={handleSkillHover}>{skill}</p>
            ))}
          </div>
        </div>
        <div className='text-6xl tracking-tight mt-20'>
          <p>Tech Stack</p>
        </div>
      </div>
    </>
  );
}
