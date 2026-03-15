interface LoadingOverlayProps {
  show: boolean;
  overlayRef: React.RefObject<HTMLDivElement | null>;
  counterRef: React.RefObject<HTMLSpanElement | null>;
}

export default function LoadingOverlay({ show, overlayRef, counterRef }: LoadingOverlayProps) {
  if (!show) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-foreground [clip-path:inset(0_0_0_0)]"
    >
      <div className="overflow-hidden">
        <span
          ref={counterRef}
          className="text-background text-3xl max-lg:text-[10rem] tracking-tight block"
        >
          0
        </span>
      </div>
    </div>
  );
}
