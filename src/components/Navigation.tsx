import React from "react";
import {getNavLinks} from "../hooks";
import NavLink from "./NavLink";

interface NavigationProps {
    className?: string;
    activeClassName?: string;
    listClassName?: string;
    listItemClassName?: string;
}

const Navigation: React.FC<NavigationProps> = (
    {
        className,
        activeClassName,
        listClassName,
        listItemClassName
    }) => {
    const links = getNavLinks();

    return (
        <nav>
            <ul className={listClassName}>
                {links.map(link => (
                    <li key={link.link} className={listItemClassName}>
                        <NavLink
                            className={className}
                            activeClassName={activeClassName}
                            href={link.link}>{link.name}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;