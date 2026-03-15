interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  ref?: React.Ref<HTMLDivElement>;
}

export default function SectionContainer({ children, className = '', id, ref }: SectionContainerProps) {
  return (
    <div ref={ref} id={id} className={`max-w-[1600px] px-5 mx-auto mt-30 max-lg:mt-10  ${className}`}>
      {children}
    </div>
  );
}
