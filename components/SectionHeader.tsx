interface SectionHeaderProps {
  number: string;
  title: string;
  numberFirst?: boolean;
  showBorder?: boolean;
}

export default function SectionHeader({
  number,
  title,
  numberFirst = true,
  showBorder = true,
}: SectionHeaderProps) {
  const numberEl = (
    <span className="text-[clamp(1.5rem,4vw,3rem)] tracking-wide text-foreground-muted font-mono">{number}</span>
  );
  const titleEl = <h2 className="text-[clamp(5.2rem,8vw,10rem)] tracking-tighter">{title}</h2>;

  return (
    <div
      className={`justify-between flex items-baseline${showBorder ? ' border-b border-foreground-muted/40' : ''}`}
    >
      {numberFirst ? (
        <>
          {numberEl}
          {titleEl}
        </>
      ) : (
        <>
          {titleEl}
          {numberEl}
        </>
      )}
    </div>
  );
}
