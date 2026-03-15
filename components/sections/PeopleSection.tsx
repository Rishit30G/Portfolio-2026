'use client';

import { useRef, Fragment } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TESTIMONIALS, type Testimonial } from '@/lib/constants';
import SectionContainer from '@/components/SectionContainer';
import SectionHeader from '@/components/SectionHeader';

gsap.registerPlugin(ScrollTrigger);

const HIGHLIGHT_CLASS =
  'font-bold text-[clamp(1.2rem,3vw,2.5rem)] mx-1 tracking-normal bg-foreground text-background px-4 max-lg:px-2 max-lg:py-1 py-2 group-hover:rounded-2xl transition-all ease-in-out duration-300';

function TestimonialContent({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className={testimonial.cardClassName}>
      <p className="text-2xl max-lg:text-base tracking-tight leading-loose">
        {testimonial.before}
        <span className={HIGHLIGHT_CLASS}>{testimonial.highlight}</span>
        {testimonial.after}
      </p>
      <div className="flex justify-between items-end mt-20">
        <p className="text-sm tracking-tight text-foreground-muted">{testimonial.author}</p>
        <p className="text-sm max-lg:text-xs tracking-tight">
          <span className="text-[clamp(1.3rem,3vw,2.0rem)] ml-1">{testimonial.company}</span> . {testimonial.role}
        </p>
      </div>
    </div>
  );
}

export default function PeopleSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const scrollAmount = track.scrollWidth - section.offsetWidth + 50;
    gsap.to(track, {
      x: -scrollAmount,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: "top top+=100px",
        end: () => `+=${scrollAmount}`,
        pin: true,
        pinSpacing: true,
        scrub: 1,
      },
    });
  }, []);

  return (
    <SectionContainer ref={sectionRef} id="people">
      <SectionHeader number="003" title="People" />
      <div className="mt-10 max-lg:mt-8 overflow-hidden">
        <div ref={trackRef} className="flex">
          {TESTIMONIALS.map((testimonial, i) =>
            (
              <Link key={i} href={testimonial.href} target="_blank">
                <TestimonialContent testimonial={testimonial} />
              </Link>
            )
          )}
        </div>
      </div>
    </SectionContainer>
  );
}
