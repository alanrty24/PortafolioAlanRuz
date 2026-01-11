import { cn } from "@/lib/utils";
import React from "react";


const DescInfo = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div className={cn("flex flex-col", className)} ref={ref} {...props}>
    {children}
  </div>
));
DescInfo.displayName = "DescInfo";

const DescInfoContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div className={cn("flex flex-row items-center gap-2 p-2 border-2 rounded-2xl", className)} ref={ref} {...props}>
    {children}
  </div>
));
DescInfoContent.displayName = "DescInfo";

DescInfo.displayName = "DescInfo";
const DescInfoIcon = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children ,...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex justify-center items-center w-20 h-20", className)}
    {...props}
  >
    {children}
    </div>
));
DescInfoIcon.displayName = "DescInfoIcon";

const DescInfoTitle = React.forwardRef<
    HTMLHeadingElement,
    React.HTMLAttributes<HTMLHeadingElement>>
    (
    (({ className, children ,...props }, ref) => (
    <h4
        className={cn("text-sm font-bold", className)}
        ref={ref}
        {...props}
    >
        {children}
    </h4>
    ))
);

DescInfoTitle.displayName = "DescInfoTitle";
    
export { DescInfo, DescInfoIcon, DescInfoTitle, DescInfoContent };
