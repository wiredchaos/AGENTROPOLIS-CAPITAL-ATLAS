import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"button"> & {
  href?: string;
  variant?: "primary" | "secondary";
};

const base =
  "inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400";

export function Button({ className, variant = "primary", href, ...props }: Props) {
  const variantClass =
    variant === "primary"
      ? "border-cyan-400/50 bg-cyan-500/20 text-cyan-100 hover:bg-cyan-500/30"
      : "border-red-500/50 bg-red-500/15 text-red-100 hover:bg-red-500/25";

  if (href) {
    return (
      <Link href={href} className={cn(base, variantClass, className)}>
        {props.children}
      </Link>
    );
  }

  return <button className={cn(base, variantClass, className)} {...props} />;
}
