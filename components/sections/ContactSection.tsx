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
      <p className="text-4xl tracking-tight w-md uppercase text-justify mt-10">
        Actively building for those who dream big and want to create impactful solutions.
      </p>
      <div className="flex justify-between items-baseline mt-10">
        <p className="text-xl tracking-tight font-mono"> mailto: <span className="underline underline-offset-10">hello@rishitgupta.com</span></p>
        <LetsTalkButton ref={buttonRef} />
      </div>
    </SectionContainer>
  );
}
