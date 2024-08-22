import * as React from "react";
import Navigation from "./../Navigation";

const listClassName: string = "flex flex-row justify-items-center leading-4";
const listItemClassName: string = "flex-grow";

const linkClassName: string = [
    "relative",
    "uppercase text-sm ",
    "leading-none",
    "block p-5 md:p-7",
    "text-center",
    "text-white",
    "after:transition-all",
    "after:duration-500",
    "after:absolute",
    "after:w-full",
    "after:h-full",
    "after:inset-0",
    "after:border-slate-50",
    "after:-mt-[100%]",
    "hover:after:mt-0",
    "after:border-slate-50",
    "after:border-2",
    "after:bg-white/20",
].join(" ");

const HeaderNav = () => {
    return (
        <Navigation listClassName={listClassName}
                    listItemClassName={listItemClassName}
                    activeClassName="text-amber-600"
                    className={linkClassName}/>
    );
};

export default HeaderNav;