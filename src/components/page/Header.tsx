import * as React from "react";
import HeaderNav from "./HeaderNav";
import NavLogo from "./../NavLogo";
import clsx from "clsx";

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
                        <NavLogo href="/" logoClassName="max-w-32 max-h-14" activeClassName="text-white"/>
                    </div>
                    <div className="col-span-4">
                        <HeaderNav/>
                    </div>
                    <div className="col-span-1">social links</div>
                </div>
            </div>
        </div>
    );
};

export default Header;