'use client'

import { ArrowRightIcon, ArrowUpRightIcon } from '@phosphor-icons/react'
import Link from 'next/link'
import React, { useRef } from 'react'
import gsap from 'gsap'
import AnimatedUnderlineLink from '@/components/AnimatedUnderlineLink'

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  const ishitWrapRef = useRef<HTMLSpanElement>(null)
  const ishitTextRef = useRef<HTMLSpanElement>(null)

  const handleLogoEnter = () => {
    const fullWidth = ishitTextRef.current?.scrollWidth ?? 0
    gsap.to(ishitWrapRef.current, {
      width: fullWidth,
      duration: 0.35,
      ease: 'sine.out',
    })
  }

  const handleLogoLeave = () => {
    gsap.to(ishitWrapRef.current, {
      width: 0,
      duration: 0.35,
      ease: 'sine.inOut',
    })
  }

  return (
    <div className="relative">
      <div className="relative z-10 bg-background">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex justify-between items-center pt-10">
          <Link
            href="/"
            className="cursor-pointer select-none"
            onMouseEnter={handleLogoEnter}
            onMouseLeave={handleLogoLeave}
          >
            <span className="text-4xl tracking-tight inline-flex items-baseline pl-3">
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
          </Link>
          <div className="group relative overflow-hidden border border-foreground py-8 px-12 rounded-full cursor-pointer">
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
        {children}
      </div>

      <div className="sticky bottom-0 bg-foreground pb-10 -mt-20">
        <div className="text-center">
          <p className="text-[18rem] tracking-tight text-background">
            Rishit
            <span
              style={{ fontFamily: 'var(--font-apparel)' }}
              className="font-medium ml-8"
            >
              Gupta
            </span>
          </p>
          <div className="flex justify-between items-center gap-2 text-3xl w-[1400px] mx-auto -mt-2">
            <AnimatedUnderlineLink
              href="https://www.youtube.com/@rishit30g"
              className="text-background"
            >
              YouTube{' '}
              <ArrowUpRightIcon
                size={25}
                weight="regular"
                className="inline-block ml-1 transition-transform duration-300 ease-in-out group-hover:rotate-45"
              />
            </AnimatedUnderlineLink>
            <AnimatedUnderlineLink
              href="https://github.com/Rishit30G"
              className="text-background"
            >
              GitHub{' '}
              <ArrowUpRightIcon
                size={25}
                weight="regular"
                className="inline-block ml-1 transition-transform duration-300 ease-in-out group-hover:rotate-45"
              />
            </AnimatedUnderlineLink>
            <AnimatedUnderlineLink
              href="https://www.linkedin.com/in/rishit-gupta-4b18841b1/"
              className="text-background"
            >
              LinkedIn{' '}
              <ArrowUpRightIcon
                size={25}
                weight="regular"
                className="inline-block ml-1 transition-transform duration-300 ease-in-out group-hover:rotate-45"
              />
            </AnimatedUnderlineLink>
            <AnimatedUnderlineLink
              href="https://x.com/rishit30g"
              className="text-background"
            >
              Twitter{' '}
              <ArrowUpRightIcon
                size={25}
                weight="regular"
                className="inline-block ml-1 transition-transform duration-300 ease-in-out group-hover:rotate-45"
              />
            </AnimatedUnderlineLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogLayout