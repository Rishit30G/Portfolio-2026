'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionContainer from '@/components/SectionContainer';
import SectionHeader from '@/components/SectionHeader';

gsap.registerPlugin(SplitText, ScrollTrigger);

const ABOUT_TEXT = 'text-4xl max-lg:text-[3.5zrem] tracking-tight text-justify text-right leading-tight';

export default function AboutSection() {
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!textRef.current) return;

    const paragraphs = gsap.utils.toArray<HTMLParagraphElement>(
      textRef.current.querySelectorAll('p')
    );
    paragraphs.forEach((para) => {
      const split = SplitText.create(para, { type: 'lines', mask: 'lines' });
      gsap.set(split.lines, { yPercent: 100 });
      gsap.to(split.lines, {
        yPercent: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: para,
          start: 'top 95%',
        },
      });
    });
  }, []);

  return (
    <SectionContainer>
      <SectionHeader number="001" title="About" />
      <div className="flex justify-between mt-20">
        <div className="w-1/2">
          <video src="/video.mp4" autoPlay loop muted className="w-full h-full object-cover aspect-video" />
        </div>
        <div ref={textRef} className="w-md">
          <p className={ABOUT_TEXT}>
            23 Y/O AI ENGINEER WORKING REMOTELY.
          </p>
          <p className={`${ABOUT_TEXT} mt-8`}>
            YAPPING ABOUT AI AND WEB DEVELOPMENT.
          </p>
           <p className={`${ABOUT_TEXT} mt-30`}>
            CLOCKING IN THOSE HOURS TO BUILD.
          </p>
          <p className={`${ABOUT_TEXT} mt-8`}>
             RUNNING SHORT ON COFFEE LATELY.
          </p>
         
        </div>
      </div>
    </SectionContainer>
  );
}
