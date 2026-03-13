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
    <span className="text-3xl max-lg:text-6xl tracking-wide text-foreground-muted font-mono">{number}</span>
  );
  const titleEl = <h2 className="text-[10rem] max-lg:text-[13rem] tracking-tighter">{title}</h2>;

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
