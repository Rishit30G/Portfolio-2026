'use client';

import { useRef, useState, useCallback, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionContainer from '@/components/SectionContainer';
import SectionHeader from '@/components/SectionHeader';

gsap.registerPlugin(SplitText, ScrollTrigger);

const ABOUT_TEXT = 'text-[clamp(1.6rem,4vw,2.5rem)] tracking-tight text-justify text-right leading-tight';

function SoundToggle({ videoRef }: { videoRef: React.RefObject<HTMLVideoElement | null> }) {
  const [isMuted, setIsMuted] = useState(true);
  const pathRef = useRef<SVGPathElement>(null);
  const amplitudeRef = useRef({ value: 1 });
  const phaseRef = useRef(0);
  const rafRef = useRef<number>(0);

  const generateWavePath = useCallback((phase: number, amplitude: number) => {
    const width = 30;
    const height = 14;
    const centerY = height/2;
    const waveAmp = 3.8 * amplitude;
    const cycles = 2.5;
    const steps: string[] = [];

    for (let x = 0; x <= width; x += 0.5) {
      const y = centerY + Math.sin((x / width) * Math.PI * 2 * cycles + phase) * waveAmp;
      steps.push(`${x === 0 ? 'M' : 'L'}${x},${y.toFixed(2)}`);
    }
    return steps.join(' ');
  }, []);

  useEffect(() => {
    const tick = () => {
      phaseRef.current += 0.07;
      if (pathRef.current) {
        pathRef.current.setAttribute('d', generateWavePath(phaseRef.current, amplitudeRef.current.value));
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [generateWavePath]);

  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;

    const newMuted = !isMuted;
    video.muted = newMuted;
    setIsMuted(newMuted);

    gsap.to(amplitudeRef.current, {
      value: newMuted ? 1 : 0,
      duration: 0.6,
      ease: 'power2.inOut',
    });
  };

  return (
    <button
      onClick={toggle}
      className="absolute top-3 right-3 z-10 size-11 rounded-full bg-black/20 flex items-center justify-center cursor-pointer transition-transform hover:scale-105 duration-300 ease-in-out"
      aria-label={isMuted ? 'Unmute video' : 'Mute video'}
    >
      <svg width="30" height="14" viewBox="0 0 30 14" fill="none">
        <path
          ref={pathRef}
          d={generateWavePath(0, 1)}
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </button>
  );
}

export default function AboutSection() {
  const textRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

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
      <div className="flex max-lg:flex-col max-lg:items-end justify-between mt-20 max-lg:mt-8 w-full">
        <div className="relative w-1/2 max-lg:w-full">
          <video ref={videoRef} src="/video.webm" autoPlay loop muted className="w-full h-full object-cover aspect-video" />
          <SoundToggle videoRef={videoRef} />
        </div>
        <div ref={textRef} className="w-md max-lg:w-xs max-lg:mt-8">
          <p className={`${ABOUT_TEXT}`}>
            23 Y/O AI ENGINEER WORKING REMOTELY.
          </p>
          <p className={`${ABOUT_TEXT} mt-8`}>
            YAPPING ABOUT AI AND WEB DEVELOPMENT.
          </p>
           <p className={`${ABOUT_TEXT} max-lg:mt-12 mt-30`}>
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
