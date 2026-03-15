'use client';

import { useRef, useState } from 'react';
import gsap from 'gsap';
import { NAV_LINKS } from '@/lib/constants';
import CityTimeFlipper from '@/components/CityTimeFlipper';
import NavLink from '@/components/NavLink';
import LetsTalkButton from '@/components/LetsTalkButton';
import Image from 'next/image';
import { List, X } from '@phosphor-icons/react';

interface HeroSectionProps {
  nameRef: React.RefObject<HTMLHeadingElement | null>;
  paraRef: React.RefObject<HTMLParagraphElement | null>;
  imageRef: React.RefObject<HTMLDivElement | null>;
  buttonRef: React.RefObject<HTMLDivElement | null>;
  buttonTextRef: React.RefObject<HTMLSpanElement | null>;
  buttonIconWrapRef: React.RefObject<HTMLDivElement | null>;
}

export default function HeroSection({ nameRef, paraRef, imageRef, buttonRef, buttonTextRef, buttonIconWrapRef }: HeroSectionProps) {
  const ishitWrapRef = useRef<HTMLSpanElement>(null);
  const ishitTextRef = useRef<HTMLSpanElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const hrefMap: Record<string, string> = {
    Skills: '#skills',
    People: '#people',
    Blogs: '/blogs',
    Contact: 'https://cal.com/rishit-gupta/quick-connect',
  };

  return (
    <div className="flex flex-col h-screen min-h-screen">
      <div className="flex justify-between items-start w-full pr-10 pl-4 max-lg:pr-4">
        <div
          className="pt-8 cursor-pointer select-none"
          onMouseEnter={handleLogoEnter}
          onMouseLeave={handleLogoLeave}
        >
          <p className="text-4xl tracking-tight inline-flex items-baseline">
            R/
            <span
              ref={ishitWrapRef}
              className="inline-block overflow-hidden"
              style={{ width: 0 }}
            >
              <span ref={ishitTextRef} className="inline-block">
                ishit
              </span>
            </span>
            30G.
          </p>
        </div>

        <div className="pt-10 max-lg:hidden">
          <CityTimeFlipper />
        </div>

        <nav className="flex gap-10 pt-8 max-lg:hidden">
          {NAV_LINKS.map((link) => (
            <NavLink key={link} text={link} href={hrefMap[link] ?? '#'} />
          ))}
        </nav>

        <button
          className="hidden max-lg:block pt-8 relative z-50"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X size={32} weight="bold" /> : <List size={32} weight="bold" />}
        </button>
      </div>

      {menuOpen && (
        <div className="hidden max-lg:flex fixed inset-0 z-40 bg-background flex-col items-center justify-center gap-10">
          {NAV_LINKS.map((link) => (
            <div key={link} onClick={() => setMenuOpen(false)}>
              <NavLink text={link} href={hrefMap[link] ?? '#'} />
            </div>
          ))}
        </div>
      )}

     <div className='lg:hidden max-lg:flex max-lg:justify-start max-lg:items-center max-lg:w-full max-lg:mt-10 max-lg:pl-4 '>
      <h1
          ref={nameRef}
          className="text-[clamp(3.5rem,10vw,10rem)] tracking-tighter leading-none"
        >
          Rishit
          <span
            style={{ fontFamily: 'var(--font-apparel)' }}
            className="font-medium ml-8 max-lg:ml-3"
          >
            Gupta
          </span>
        </h1>
      </div>

      <div className="flex justify-between max-lg:flex-col-reverse max-lg:items-center max-lg:justify-center max-lg:gap-4 items-center w-full max-lg:pt-6 lg:pt-20 lg:pl-4 max-lg:px-4 h-3/5 min-h-0">
        <h3
          ref={paraRef}
          className="text-4xl max-lg:text-2xl tracking-tight w-sm max-lg:w-auto text-balance leading-tight max-lg:self-start max-lg:shrink-0"
        >
          A CREATIVE WEB DESIGNER AND AI GENERALIST WHO
          BUILDS THE BEST.
        </h3>
        <div
          ref={imageRef}
          className="max-w-100 lg:h-120 max-lg:flex-1 max-lg:min-h-0 max-lg:w-full shrink"
          style={{ clipPath: 'inset(100% 0% 0% 0%)' }}
        >
          <Image
            src="/P1.png"
            alt="Portrait of Rishit Gupta"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="flex max-lg:justify-end justify-between items-end w-full max-lg:h-1/5 h-2/5 pb-5">
        <h1
          ref={nameRef}
          className="text-[clamp(3.5rem,10vw,10rem)] tracking-tighter leading-none max-lg:hidden"
        >
          Rishit
          <span
            style={{ fontFamily: 'var(--font-apparel)' }}
            className="font-medium ml-8 max-lg:ml-3"
          >
            Gupta
          </span>
        </h1>
        <div className='lg:pr-10  max-lg:pb-2 max-lg:pr-4'>
          <LetsTalkButton ref={buttonRef} textRef={buttonTextRef} iconWrapRef={buttonIconWrapRef} />
        </div>
      </div>
    </div>
  );
}
