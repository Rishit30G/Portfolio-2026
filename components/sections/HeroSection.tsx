'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { NAV_LINKS } from '@/lib/constants';
import CityTimeFlipper from '@/components/CityTimeFlipper';
import NavLink from '@/components/NavLink';
import LetsTalkButton from '@/components/LetsTalkButton';
import Image from 'next/image';

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

  return (
  
    <div className="flex flex-col justify-end h-screen">
      <div className="flex justify-between items-start w-full h-1/5 pr-10 pl-4">
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
        <div className="pt-10">
          <CityTimeFlipper />
        </div>
        <nav className="flex gap-10 pt-8">
          {NAV_LINKS.map((link) => {
            const hrefMap: Record<string, string> = {
              Skills: '#skills',
              People: '#people',
              Blogs: '/blogs',
              Contact: 'https://cal.com/rishit-gupta/quick-connect',
            };
            return <NavLink key={link} text={link} href={hrefMap[link] ?? '#'} />;
          })}
        </nav>
      </div>

      <div className="flex justify-between items-center w-full pl-4">
        <h3
          ref={paraRef}
          className="text-4xl tracking-tight w-sm text-balance leading-tight"
        >
          A CREATIVE WEB DESIGNER AND AI GENERALIST WHO
          BUILDS THE BEST.
        </h3>
        <div
          ref={imageRef}
          className="w-110 h-120 mb-20"
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
        <LetsTalkButton ref={buttonRef} textRef={buttonTextRef} iconWrapRef={buttonIconWrapRef} />
      </div>
    </div>
  );
}
