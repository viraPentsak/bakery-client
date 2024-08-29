import React from "react";
import {BiLogoTwitter, BiLogoFacebook, BiLogoInstagram, BiQuestionMark} from "react-icons/bi";
import {getSocialLinks} from "../hooks";
import {twMerge} from "tw-merge";
import clsx from "clsx";

const icons = {
    twitter: BiLogoTwitter,
    facebook: BiLogoFacebook,
    instagram: BiLogoInstagram
};

interface SocialLinksProps {
    className?: string;
    wrapperClassName?:string;
}

const SocialLinks: React.FC<SocialLinksProps> = (props) => {
    const links = getSocialLinks();
    const wrapperCN  = twMerge(clsx("flex flex-row flex-wrap gap-2 text-xl", props.wrapperClassName));
    const linkCN = twMerge(clsx("transition-colors", props.className));

    return (
        <div className={wrapperCN}>
            {links && links.map((link => {
                const Icon = icons[link.name] || BiQuestionMark;

                return <a href={link.link} key={link.name} className={linkCN}>
                    <Icon/>
                    <span className="sr-only">Social link to: {link.name}</span>
                </a>
            }))}

        </div>
    );
};

export default SocialLinks;
