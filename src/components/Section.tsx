import * as React from "react";

//Section allows
// - set up background
// - set up id
// - set up

interface SectionProps extends React.HTMLAttributes<HTMLDivElement>{
    children?: React.ReactNode;
    bgHref?: string;
    container?: boolean;
    className?: string;
}

const Section: React.FC<SectionProps >  = (
    {
        bgHref,
        children,
        className,
        container = true,
        ...rest
    }) => {
    return (
        <section className={className} {...rest}>
            <div className={container ? "container" : ""}>
                {children}
            </div>
        </section>
    );
};

export default Section;