import React from "react";
import {StaticImage} from "gatsby-plugin-image";
import {twMerge} from "tw-merge";
import clsx from "clsx";

interface HeroProps {
    children?: React.ReactNode;
    className?: string;
    childrenClassName?: string;
}

const Hero: React.FC<HeroProps> = (
    {
        children,
        className,
        childrenClassName : childrenCN= ''
    }) => {

    const childrenClassName = twMerge(clsx("absolute inset-0 flex flex-col justify-center", childrenCN));

    return (
        <div className={className}>
            <div className="relative min-h-dvh">
                <StaticImage src={"./../../images/hero_banner.jpg"}
                             placeholder="blurred"
                             layout={"fullWidth"}
                             alt={"Bakery hero banner"}/>
                {children && <div className={childrenClassName}>
                    {children}
                </div>}
            </div>

        </div>

    );
};

export default Hero;