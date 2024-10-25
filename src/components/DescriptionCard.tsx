import React from "react";
import Card from "./Card";
import PretselSVG from "@svg/pretsel.svg"
import NavLink from "./NavLink";

const DescriptionHeader = () => {
    return (
        <div className="pt-4">
            <div className="flex flex-row font-serif text-sm justify-around">
                <span className="uppercase">est.</span>
                <span>1893</span>
            </div>
            <div className="border-t border-neutral-400 mt-5 -mx-5 relative pb-10">
                <i className="absolute top-0 -translate-y-2/4 left-0 border w-2.5 h-2.5 rounded-full block bg-straw-100"/>
                <i className="absolute top-0 -translate-y-2/4 right-0 border w-2.5 h-2.5 rounded-full block bg-straw-100"/>
                <i className="block w-16 h-16 -mt-8 p-2.5 bg-straw-100 mx-auto border rounded-full">
                    <PretselSVG className="max-w-full max-h-full text-neutral-400"/>
                </i>
            </div>
        </div>
    )
}

interface DescriptionCard {
    title?: string;
}

const decorClassName = `
before:block
before:absolute
before:inset-2.5
before:border
before:border-dashed
before:border-neutral-400
`;


const DescriptionCard: React.FC<DescriptionCard> = (props) => {
    return (
        <div className="relative -mx-2.5">
            <div className={`bg-straw-100 p-12 text-center relative ${decorClassName} z-30 bg-wheat-left mask-b-l-corner b-l-corner-flip after:bg-straw-50  after:shadow-lg shadow-black`}>
                <div className="relative">
                    <DescriptionHeader/>
                    <Card title={"Your morning Escape with Flair"} className="p-0" {...props}>
                        <div className="pb-14">
                            Donec vitae sapien ut libero venenatis faucibus.
                            Nullam quis ante. Etiam sit amet orci eget eros
                            faucibus tincidunt. Duis leo.
                        </div>
                        <NavLink href="/menu"
                                 className="uppercase
                             inline-block
                             text-leather-400
                             font-serif font-bold
                             border border-gray-600
                             py-3 px-6 md:px-10 xl:px-14 2xl:px-16
                             hover:bg-gray-600
                             hover:text-white
                             transition-colors
                             ">
                            Read
                        </NavLink>
                    </Card>
                </div>
            </div>

            <div
                className={`${decorClassName} absolute w-8 top-8 bottom-8 -right-6 before:block bg-straw-300 z-10`}></div>
            <div
                className={`${decorClassName} absolute w-8 top-4 bottom-4 -right-3 before:block bg-straw-200 z-10`}></div>
        </div>

    );
};

export default DescriptionCard;