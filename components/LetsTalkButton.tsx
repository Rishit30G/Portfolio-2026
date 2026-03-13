import { ArrowRightIcon } from '@phosphor-icons/react';
import Link from 'next/link';

interface LetsTalkButtonProps {
  ref?: React.Ref<HTMLDivElement>;
  textRef?: React.Ref<HTMLSpanElement>;
  iconWrapRef?: React.Ref<HTMLDivElement>;
}

export default function LetsTalkButton({ ref, textRef, iconWrapRef }: LetsTalkButtonProps) {
  return (
    <>
    <Link href='https://cal.com/rishit-gupta/quick-connect' target='_blank'>
    <div
      ref={ref}
      className="group relative overflow-hidden border border-foreground py-8 px-12 rounded-full mr-10 mb-14 cursor-pointer"
    >
      <div className="absolute inset-x-0 bottom-0 h-0 bg-foreground transition-[height] duration-300 ease-in-out group-hover:h-full rounded-full" />
      <div className="relative z-10 flex items-center">
        <span ref={textRef} className="text-3xl transition-colors duration-300 group-hover:text-background">
          LET&apos;S TALK{' '}
        </span>
        <div ref={iconWrapRef} className="overflow-hidden">
          <ArrowRightIcon
            size={50}
            weight="light"
            className="inline-block ml-4 transition-transform duration-300 ease-out group-hover:rotate-[-40deg] group-hover:text-background"
          />
        </div>
      </div>
    </div>
    </Link>
    </>
  );
}
