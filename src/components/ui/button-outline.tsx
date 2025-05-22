
import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonOutlineProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "dark" | "light";
}

const ButtonOutline = React.forwardRef<HTMLButtonElement, ButtonOutlineProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center font-medium tracking-wider",
          "border border-gold px-6 py-3 text-sm transition-colors",
          "hover:bg-gold/10 active:bg-gold/20",
          {
            "text-gold": variant === "default",
            "text-background border-background hover:bg-background/10": variant === "light",
            "text-foreground": variant === "dark",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
ButtonOutline.displayName = "ButtonOutline";

export { ButtonOutline };
