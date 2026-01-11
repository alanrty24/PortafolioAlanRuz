import React from "react";

export type SubtitleVariant = "sm" | "md" | "lg" | "xl" | "4xl" | "5xl";

interface SubtitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    className?: string;
    variant?: SubtitleVariant;
    icon?: React.ReactNode;
    children?: React.ReactNode;
}

/**
 * Subtitle — elemento h2 reutilizable.
 * Recibe className, variant, icon y props adicionales para el h2.
 */
export default function Subtitle({
    className = "",
    variant = "md",
    icon,
    children,
    ...props
}: SubtitleProps) {
    const variantClasses: Record<SubtitleVariant, string> = {
        sm: "text-sm font-medium",
        md: "text-base font-semibold",
        lg: "text-lg font-semibold",
        xl: "text-xl font-bold",
        "4xl": "text-4xl font-bold",
        "5xl": "text-5xl font-bold",
    };

    return (
        <h2
            {...props}
            className={`${variantClasses[variant]} ${className} mb-8`.trim()}
        >
            {icon ? (
                <span style={{ display: "inline-flex", alignItems: "center", gap: 8, justifyContent: "center" }}>
                    <span>{icon}</span>
                    <span>{children}</span>
                </span>
            ) : (
                children
            )}
        </h2>
    );
} 