import * as React from "react";

import { cn } from "@/lib/utils";
interface InputProps extends React.ComponentProps<"input"> {
  label?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, type, ...props }:InputProps, ref) => {
    return (
      <div className="flex flex-col space-y-1.5 w-full">
        {label && <label className="text-base text-gray-600 dark:text-gray-300">{label}</label>}
        <input
          type={type}
          className={cn(
            "flex h-12 w-full rounded-xl bg-slate-50 shadow-2xl px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-(--color-accent) focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-(--color-border-dark) dark:bg-(--color-input-bg-dark) dark:focus:ring-(--color-accent-dark)",
            className,
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
