'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { SKILLS_ROWS } from '@/lib/constants';
import SectionContainer from '@/components/SectionContainer';
import SectionHeader from '@/components/SectionHeader';

export default function SkillsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const highlightRef = useRef<HTMLDivElement>(null);
  const activeSkillRef = useRef<HTMLParagraphElement | null>(null);

  const allSkills = SKILLS_ROWS.flatMap((row) => row.skills).filter(Boolean);

  const handleSkillHover = (e: React.MouseEvent<HTMLParagraphElement>) => {
    const el = e.currentTarget;
    const container = containerRef.current;
    const highlight = highlightRef.current;
    if (!container || !highlight) return;

    // Kill any in-flight tweens on the highlight to prevent race conditions
    gsap.killTweensOf(highlight);

    if (!el.textContent?.trim()) {
      if (activeSkillRef.current) {
        gsap.set(activeSkillRef.current, { clearProps: 'color' });
        activeSkillRef.current = null;
      }
      gsap.to(highlight, { opacity: 0, duration: 0.3, ease: 'sine.out' });
      return;
    }

    if (activeSkillRef.current && activeSkillRef.current !== el) {
      gsap.set(activeSkillRef.current, { clearProps: 'color' });
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
    const highlight = highlightRef.current;
    if (!highlight) return;

    // Kill any in-flight tweens so they don't resolve after we reset
    gsap.killTweensOf(highlight);

    if (activeSkillRef.current) {
      gsap.set(activeSkillRef.current, { clearProps: 'color' });
      activeSkillRef.current = null;
    }

    gsap.to(highlight, { opacity: 0, duration: 0.3, ease: 'sine.out' });
  };

  return (
    <SectionContainer id="skills">
      <SectionHeader number="002" title="Skills" numberFirst={false} />
      <div ref={containerRef} className="relative max-lg:hidden" onMouseLeave={handleSkillsLeave}>
        <div
          ref={highlightRef}
          className="absolute top-0 left-0 bg-foreground pointer-events-none opacity-0"
        />
        {SKILLS_ROWS.map((row, i) => (
          <div key={i} className={`grid grid-cols-8 text-center text-2xl justify-between mt-10 ${row.className}`}>
            {row.skills.map((skill, j) => (
              <p key={j} className="py-8 relative z-10 cursor-pointer" onMouseEnter={handleSkillHover}>{skill}</p>
            ))}
          </div>
        ))}
      </div>
      <div className="lg:hidden">
        <div className="flex flex-wrap gap-6 justify-center mt-8">
          {allSkills.map((skill, index) => (
            <span key={index} className="px-3 py-1.5 text-xl">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
