import React from "react";
import HeaderNav from "./HeaderNav";
import NavLogo from "./../NavLogo";
import clsx from "clsx";
import SocialLinks from "../SocialLinks";

interface HeaderProps {
    className?: string
}

const Header: React.FC<HeaderProps> = (props) => {
    const className = clsx("fixed top-0 w-full z-header", props.className)

    return (
        <div className={className}>
            <div className="container">
                <div className="grid grid-cols-6 gap-4 align-middle items-center">
                    <div className="col-span-1">
                        <NavLogo href="/"
                                 destination="Home page link"
                                 logoClassName="w-16 md:w-32 max-h-16 p-2"
                                 activeClassName="text-white"/>
                    </div>
                    <div className="col-span-4">
                        <HeaderNav/>
                    </div>
                    <div className="col-span-1">
                        <SocialLinks className="text-white active:text-white p-2 border border-transparent hover:border-white hover:bg-white/20"
                                     wrapperClassName="justify-end"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
