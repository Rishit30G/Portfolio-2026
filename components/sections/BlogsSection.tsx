'use client';

import { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ArrowRightIcon } from '@phosphor-icons/react';
import { BLOG_POSTS } from '@/lib/constants';
import SectionContainer from '@/components/SectionContainer';
import SectionHeader from '@/components/SectionHeader';

export default function BlogsSection() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const isOpenRef = useRef(false);

  const handleMouseEnter = (e: React.MouseEvent, image: string) => {
    if (imgRef.current) imgRef.current.src = image;
    // Set position immediately so the image appears at the cursor, not at (0,0)
    gsap.set(cursorRef.current, { x: e.clientX, y: e.clientY });
    if (!isOpenRef.current) {
      isOpenRef.current = true;
      gsap.fromTo(
        cursorRef.current,
        { clipPath: 'inset(50% 50% 50% 50%)' },
        { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.5, ease: 'power3.out' }
      );
    }
  };

  const handleMouseLeave = () => {
    isOpenRef.current = false;
    gsap.killTweensOf(cursorRef.current, 'clipPath');
    gsap.to(cursorRef.current, {
      clipPath: 'inset(50% 50% 50% 50%)',
      duration: 0.4,
      ease: 'power3.in',
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    gsap.to(cursorRef.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.25,
      ease: 'power2.out',
    });
  };

  return (
    <>
      <SectionContainer>
        <SectionHeader number="004" title="Blogs" numberFirst={false} showBorder={false} />
        <div className="mt-10">
          <div className="grid grid-cols-12 border-b border-foreground-muted/40 pb-4">
            <h3 className="text-md tracking-tight col-span-6 pl-4">TITLE</h3>
            <p className="text-md tracking-tight col-span-4">DATE</p>
            <p className="text-md tracking-tight col-span-2">VISIT</p>
          </div>
          <div onMouseMove={handleMouseMove}>
            {BLOG_POSTS.map((post, i) => (
              <Link
                key={i}
                href={post.slug ? `/blog/${post.slug}` : '#'}
                onMouseEnter={(e) => handleMouseEnter(e, post.image)}
                onMouseLeave={handleMouseLeave}
                className={`group relative overflow-hidden block ${
                  i < BLOG_POSTS.length - 1 ? 'border-b border-dashed border-foreground-muted/40' : ''
                }`}
              >
                <div className="absolute inset-x-0 bottom-0 h-0 bg-foreground transition-[height] duration-300 ease-in-out group-hover:h-full" />
                <div className="relative z-10 grid grid-cols-12 py-6 text-2xl tracking-tight cursor-pointer">
                  <h3 className="col-span-6 transition-colors duration-300 group-hover:text-background pl-4">{post.title}</h3>
                  <p className="col-span-4 transition-colors duration-300 group-hover:text-background">{post.date}</p>
                  <p className="col-span-2">
                    <ArrowRightIcon size={30} weight="light" className="inline-block group-hover:-rotate-45 group-hover:text-background transition-all duration-300 ease-in-out" />
                  </p>
                </div>
              </Link>
            ))}
          </div>
            <div className="flex items-center justify-center mt-10">
              <Link href="/blogs">
              <div className="relative overflow-hidden p-4 border-foreground-muted/40 group cursor-pointer">
                <div className="absolute inset-x-0 bottom-0 h-0 bg-foreground transition-[height] duration-300 ease-in-out group-hover:h-full" />
                <p className="relative z-10 text-xl tracking-tight transition-colors duration-300 group-hover:text-background">View More <ArrowRightIcon size={25} weight="regular" className="inline-block group-hover:-rotate-45 ml-1 transition-all duration-300 ease-in-out" /></p>
              </div>
              </Link>
            </div>
        </div>
      </SectionContainer>

      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-52 h-52 pointer-events-none z-50"
        style={{ clipPath: 'inset(50% 50% 50% 50%)' }}
      >
        <img
          ref={imgRef}
          src="/Portrait.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </>
  );
}
