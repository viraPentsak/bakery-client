import React from "react";
import NavLink, {NavLinkProps} from "./NavLink";
import Logo from "./Logo";

interface NavLogoProps {
    className?: string;
    logoClassName?: string;
    href: string,
    destination: string
}

const NavLogo: React.FC<NavLogoProps & NavLinkProps> = (props) => {
    return (
        <NavLink href={props.href}
                 activeClassName={props.activeClassName}
                 className={props.className}>
            <span className="sr-only">{props.destination}</span>
            <Logo className={props.logoClassName}/>
        </NavLink>
    );
};

export default NavLogo;