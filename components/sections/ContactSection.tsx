import LetsTalkButton from '@/components/LetsTalkButton';
import SectionContainer from '@/components/SectionContainer';
import SectionHeader from '@/components/SectionHeader';

interface ContactSectionProps {
  buttonRef: React.RefObject<HTMLDivElement | null>;
}

export default function ContactSection({ buttonRef }: ContactSectionProps) {
  return (
    <SectionContainer>
      <SectionHeader number="005" title="Contact" />
      <p className="text-4xl tracking-tight w-md uppercase text-justify mt-10 max-lg:text-2xl max-lg:w-xs">
        Actively building for those who dream big and want to create impactful solutions.
      </p>
      <div className="flex justify-between max-lg:justify-end items-baseline mt-10">
        <p className="text-xl tracking-tight font-mono max-lg:hidden"> mailto: <span className="underline underline-offset-10">hello@rishitgupta.com</span></p>
        <div className='pb-10 max-lg:pb-5'>
          <LetsTalkButton ref={buttonRef} />
        </div>
      </div>
    </SectionContainer>
  );
}
