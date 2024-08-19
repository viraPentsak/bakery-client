import * as React from "react";
import {StaticImage} from "gatsby-plugin-image";

interface HeroProps {
    children?: React.ReactNode;
    className?: string;
}

const Hero: React.FC<HeroProps> = (
    {
        children,
        className
    }) => {
    return (
        <div className={className}>
            <div className="relative">
                <StaticImage src={"./../images/hero_banner.jpg"}
                             placeholder="blurred"
                             layout={"fullWidth"}
                             style={{height: "900px"}}
                             alt={"Bakery hero banner"}/>
                {children && <div className="absolute inset-0">
                    {children}
                </div>}
            </div>

        </div>

    );
};

export default Hero;