import React from "react";
import {StaticImage} from "gatsby-plugin-image";
import {twMerge} from "tw-merge";
import clsx from "clsx";

interface HeroProps {
    children?: React.ReactNode;
    className?: string;
    childrenClassName?: string;
    imgClassName?: string;
}

const Hero: React.FC<HeroProps> = (
    {
        children,
        className,
        imgClassName,
        childrenClassName: childrenCN = ""
    }) => {

    const childrenClassName = twMerge(clsx("absolute inset-0 flex flex-col justify-center", childrenCN));
    const imageCN = twMerge(clsx("h-dvh", imgClassName));

    return (
        <div className={className}>
            <div className="relative">
                <StaticImage src={"./../../images/hero_banner.jpg"}
                             className={imageCN}
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