import { ArrowUpRightIcon } from '@phosphor-icons/react';
import AnimatedUnderlineLink from '@/components/AnimatedUnderlineLink';
import { SOCIAL_LINKS } from '@/lib/constants';

export default function SiteFooter() {
  return (
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
          {SOCIAL_LINKS.map((link) => (
            <AnimatedUnderlineLink key={link.label} href={link.href} className="text-background">
              {link.label} <ArrowUpRightIcon size={25} weight="regular" className="inline-block ml-1 transition-transform duration-300 ease-in-out group-hover:rotate-45" />
            </AnimatedUnderlineLink>
          ))}
        </div>
      </div>
    </div>
  );
}
