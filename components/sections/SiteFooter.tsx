import { ArrowUpRightIcon } from '@phosphor-icons/react';
import AnimatedUnderlineLink from '@/components/AnimatedUnderlineLink';
import { SOCIAL_LINKS } from '@/lib/constants';

export default function SiteFooter() {
  return (
    <div className="sticky bottom-0 bg-foreground lg:pb-10 lg:-mt-20 max-lg:pt-5">
      <div className="text-center">
        <p className="text-[clamp(4.5rem,15vw,18rem)] max-lg:text-7xl tracking-tighter text-background">
          Rishit
          <span
            style={{ fontFamily: 'var(--font-apparel)' }}
            className="font-medium ml-8 max-lg:ml-4"
          >
            Gupta
          </span>
        </p>
        <div className="flex justify-between items-center gap-2 text-3xl max-lg:text-sm max-w-[1400px] px-4 mx-auto -mt-2 ">
          {SOCIAL_LINKS.map((link) => (
            <AnimatedUnderlineLink key={link.label} href={link.href} className="text-background mt-8 mb-4">
              {link.label}
                <ArrowUpRightIcon
                  weight="regular"
                  className="inline-block ml-1 w-[15px] h-[15px] lg:w-[25px] lg:h-[25px] transition-transform duration-300 ease-in-out group-hover:rotate-45"
                />
            </AnimatedUnderlineLink>
          ))}
        </div>
      </div>
    </div>
  );
}
