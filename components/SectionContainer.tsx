interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  ref?: React.Ref<HTMLDivElement>;
}

export default function SectionContainer({ children, className = '', id, ref }: SectionContainerProps) {
  return (
    <div ref={ref} id={id} className={`w-[1600px] mx-auto mt-30 max-lg:px-20 ${className}`}>
      {children}
    </div>
  );
}
