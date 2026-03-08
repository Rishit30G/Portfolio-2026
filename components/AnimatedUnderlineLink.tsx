'use client';

import Link from 'next/link';
import { useState } from 'react';

interface AnimatedUnderlineLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function AnimatedUnderlineLink({ href, children, className = '' }: AnimatedUnderlineLinkProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  const handleMouseEnter = () => {
    setIsLeaving(false);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsLeaving(true);
  };

  const handleTransitionEnd = () => {
    if (isLeaving) {
      setIsHovered(false);
      setIsLeaving(false);
    }
  };

  return (
    <Link
      href={href}
      target="_blank"
      className={`group relative inline-block ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="relative z-10">{children}</span>
      <span
        className={`absolute left-0 -bottom-1 h-[2px] w-full bg-current transition-transform duration-300 ease-in-out ${
          isLeaving ? 'origin-right scale-x-0' : isHovered ? 'origin-left scale-x-100' : 'origin-left scale-x-0'
        }`}
        onTransitionEnd={handleTransitionEnd}
      />
    </Link>
  );
}
