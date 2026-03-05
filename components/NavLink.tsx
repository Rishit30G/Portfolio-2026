'use client';

import { ArrowUpRightIcon } from '@phosphor-icons/react';

interface NavLinkProps {
  text: string;
}

export default function NavLink({ text }: NavLinkProps) {
  const chars = text.split('');

  return (
    <div className="group cursor-pointer inline-flex items-center text-2xl tracking-tight">
      <span className="inline-flex">
        {chars.map((char, i) => (
          <span
            key={i}
            className="overflow-hidden inline-flex"
            style={{ height: '1.3em' }}
          >
            <span
              className="flex flex-col transition-transform duration-500 ease-in-out group-hover:-translate-y-full"
              style={{ transitionDelay: `${i * 8}ms` }}
            >
              <span style={{ height: '1.3em', lineHeight: '1.3em' }}>
                {char}
              </span>
              <span style={{ height: '1.3em', lineHeight: '1.3em' }}>
                {char}
              </span>
            </span>
          </span>
        ))}
      </span>
      <ArrowUpRightIcon size={20} weight="regular" className="ml-2" />
    </div>
  );
}
