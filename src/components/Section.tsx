import React from "react";

//Section allows
// - set up background
// - set up id
// - set up

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    bgHref?: string;
    container?: boolean;
    className?: string;
}

const Section: React.FC<SectionProps> = (
    {
        bgHref,
        children,
        className,
        container = true,
        ...rest
    }) => {
    return (
        <section className={className} {...rest}>
            {container
                ? <div className="container max-w-screen-xl">
                    {children}
                </div>
                : children}
        </section>
    );
};

export default Section;