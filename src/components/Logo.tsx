import React from "react"
import {SVGProps} from "react";
import LogoSVG from "@svg/logo.svg";
import {twMerge} from "tw-merge";
import clsx from "clsx";

interface LogoProps {
    className?: string
}

const Logo: React.FC<SVGProps<SVGSVGElement> & LogoProps> = (props) => {
    const className = twMerge(clsx("w-32 h-auto", props.className));
    return (
        <LogoSVG className={className}/>
    )
}

export default Logo