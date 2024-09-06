import React from "react"
import {Link} from "gatsby";
import clsx from "clsx";

export interface NavLinkProps {
    className?: string;
    activeClassName?: string;
    href: string;
    children?: React.ReactNode
}

// Basic links
const NavLink: React.FC<NavLinkProps> = (props) => {
    const className = clsx("transition", props.className, {"text-white hover:text-leather-400": !props.className});
    const activeClassName = props.activeClassName || "text-amber-700";
    return (
        <Link to={props.href} className={className} activeClassName={activeClassName}>
            <span>{props.children}</span>
        </Link>
    );
};

export default NavLink;