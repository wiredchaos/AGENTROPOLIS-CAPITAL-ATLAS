import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-xl border border-white/10 bg-black/45 p-5 shadow-[0_0_30px_rgba(255,0,0,0.08)] backdrop-blur",
        className,
      )}
      {...props}
    />
  );
}
