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
  'font-bold text-3xl mx-1 tracking-normal bg-foreground text-background px-4 py-2 group-hover:rounded-2xl transition-all ease-in-out duration-300';

function TestimonialContent({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className={testimonial.cardClassName}>
      <p className="text-2xl tracking-tight leading-loose">
        {testimonial.before}
        <span className={HIGHLIGHT_CLASS}>{testimonial.highlight}</span>
        {testimonial.after}
      </p>
      <div className="flex justify-between items-end mt-20">
        <p className="text-sm tracking-tight text-foreground-muted">{testimonial.author}</p>
        <p className="text-sm tracking-tight">
          <span className="text-2xl ml-1">{testimonial.company}</span> . {testimonial.role}
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
  }, []);

  return (
    <SectionContainer ref={sectionRef} id="people">
      <SectionHeader number="003" title="People" />
      <div className="mt-10 overflow-hidden">
        <div ref={trackRef} className="flex gap-10">
          {TESTIMONIALS.map((testimonial, i) =>
            testimonial.linkWrapped ? (
              <Link key={i} href={testimonial.href} target="_blank">
                <TestimonialContent testimonial={testimonial} />
              </Link>
            ) : (
              <Fragment key={i}>
                <Link href={testimonial.href} target="_blank"></Link>
                <TestimonialContent testimonial={testimonial} />
              </Fragment>
            )
          )}
        </div>
      </div>
    </SectionContainer>
  );
}
