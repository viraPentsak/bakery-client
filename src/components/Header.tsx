import * as React from "react";
import HeaderNav from "./HeaderNav";
import NavLogo from "./NavLogo";

const Header = () => {
    return (
        <div>
            <div className="fixed top-0 w-full z-header">
                <div className=" bg-stone-900/30">
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
            </div>
        </div>
    );
};

export default Header;