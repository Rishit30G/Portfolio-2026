'use client'

import Link from 'next/link'
import React, { useRef } from 'react'
import gsap from 'gsap'
import LetsTalkButton from '@/components/LetsTalkButton'
import SiteFooter from '@/components/sections/SiteFooter'

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
            <span className="text-4xl tracking-tight inline-flex items-baseline pl-8 max-lg:pl-6">
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
          <LetsTalkButton />
        </div>
      </div>
        {children}
      </div>

      <SiteFooter />
    </div>
  )
}

export default BlogLayout