'use client';

import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LoadingOverlay from '@/components/sections/LoadingOverlay';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import PeopleSection from '@/components/sections/PeopleSection';
import BlogsSection from '@/components/sections/BlogsSection';
import ContactSection from '@/components/sections/ContactSection';
import SiteFooter from '@/components/sections/SiteFooter';

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function Home() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const buttonTextRef = useRef<HTMLSpanElement>(null);
  const buttonIconWrapRef = useRef<HTMLDivElement>(null);
  const contactButtonRef = useRef<HTMLDivElement>(null);
  const [showOverlay, setShowOverlay] = useState(true);

  useGSAP(() => {
    const nameSplit = SplitText.create(nameRef.current, {
      type: 'words',
      mask: 'words',
    });
    gsap.set(nameSplit.words, { yPercent: 100 });

    const buttonTextSplit = SplitText.create(buttonTextRef.current, {
      type: 'words',
      mask: 'words',
    });
    gsap.set(buttonTextSplit.words, { yPercent: 100 });

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
      nameSplit.words,
      {
        yPercent: 0,
        duration: 0.6,
        ease: 'power3.out',
      },
      '-=0.4'
    );

    tl.to(
      buttonTextSplit.words,
      {
        yPercent: 0,
        duration: 0.6,
        ease: 'power3.out',
      },
      '<'
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
      <LoadingOverlay show={showOverlay} overlayRef={overlayRef} counterRef={counterRef} />

      <div className="relative z-10 bg-background">
        <HeroSection
          nameRef={nameRef}
          paraRef={paraRef}
          imageRef={imageRef}
          buttonRef={buttonRef}
          buttonTextRef={buttonTextRef}
          buttonIconWrapRef={buttonIconWrapRef}
        />
        <AboutSection />
        <SkillsSection />
        <PeopleSection />
        <BlogsSection />
        <ContactSection buttonRef={contactButtonRef} />
      </div>

      <SiteFooter />
    </>
  );
}
