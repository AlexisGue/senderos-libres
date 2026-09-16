export function Logo({
  className = "",
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  const mountain = light ? "#F7F1E6" : "#17362B";
  const mountain2 = light ? "#8AA584" : "#2B5643";
  const line = light ? "#C9A24A" : "#8AA584";
  const title = light ? "text-cream" : "text-forest";
  const subtitle = light ? "text-sage" : "text-moss";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 72 48" className="h-10 w-14 shrink-0" aria-hidden="true">
        <circle cx="24" cy="16" r="7" fill="#E3B44A" />
        <path d="M8 38 L24 16 L36 32 L28 32 L36 42 H8 Z" fill={mountain} />
        <path d="M28 32 L44 14 L64 42 H36 L28 32 Z" fill={mountain2} />
        <path d="M4 42 H68" stroke={line} strokeWidth="1.5" />
        <path d="M48 10 C54 8 58 11 62 8" fill="none" stroke={mountain} strokeWidth="1.4" />
        <circle cx="63.5" cy="7.2" r="1.4" fill={mountain} />
      </svg>
      <span className="leading-none">
        <span className={`font-display block text-[1.35rem] font-semibold tracking-tight ${title}`}>
          Senderos Libres
        </span>
        <span className={`mt-0.5 block text-[0.62rem] uppercase tracking-[0.22em] ${subtitle}`}>
          Agencia de viajes
        </span>
      </span>
    </span>
  );
}
