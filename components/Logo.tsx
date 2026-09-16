import Image from "next/image";

type LogoProps = {
  className?: string;
  variant?: "mark" | "seal";
};

export function Logo({ className = "", variant = "mark" }: LogoProps) {
  if (variant === "seal") {
    return (
      <Image
        src="/images/logo-sello.png"
        alt="Senderos Libres"
        width={80}
        height={80}
        className={`h-16 w-16 ${className}`}
      />
    );
  }

  return (
    <Image
      src="/images/logo.png"
      alt="Senderos Libres, agencia de viajes y turismo"
      width={280}
      height={136}
      className={`h-14 w-auto md:h-16 ${className}`}
      priority
    />
  );
}
