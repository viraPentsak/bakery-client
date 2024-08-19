import * as React from "react";
import NavLink, {NavLinkProps} from "./NavLink";
import Logo from "./Logo";

interface NavLogoProps {
    className?: string;
    logoClassName?: string;
    href: string
}

const NavLogo: React.FC<NavLogoProps & NavLinkProps> = (props) => {
    return (
        <NavLink href={props.href}
                 activeClassName={props.activeClassName}
                 className={props.className}>
            <Logo className={props.logoClassName}/>
        </NavLink>
    );
};

export default NavLogo;