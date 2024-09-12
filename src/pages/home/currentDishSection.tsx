import React from "react";
import Pricing from "../../components/Pricing";
import WheatSVG from "@svg/wheat.svg";
import {I_Price} from "../../interfaces";

const menu: { title: string, description: string, price: I_Price }[] = [
    {
        title: "Full breakfast",
        description: "Duis ut tortor, et risus, vulputate pretium",
        price: {
            amount: 1249,
            currency: {
                code: "USD",
                symbol: "$"
            }
        }
    }, {
        title: "Toast & Jam",
        description: "Suspendisse, tempus, nterdum",
        price: {
            amount: 490,
            currency: {
                code: "USD",
                symbol: "$"
            }
        }
    }, {
        title: "Muffins",
        description: "Duis ut tortor, et risus, vulputate pretium",
        price: {
            amount: 1249,
            currency: {
                code: "USD",
                symbol: "$"
            }
        }
    },
]

const CurrentDishSection = () => {
    return (
        <div className="bg-straw-950/20 py-8 md:py-14 xl:py-18 2xl:py-20 px-5 ">
            <div className="container max-w-screen-xl">
                <div className="grid grid-cols-12">
                    <div className="col-span-7 text-center">
                        <div className="pb-10 xl:pb-14 pt-1">
                            <div className="text-3xl md:text-6xl text-white font-serif font-bold">
                                Breakfast
                            </div>
                            <div className="text-lg uppercase text-leather-300 font-serif font-bold">
                                7am Breakfast? we’re open!
                            </div>
                        </div>
                        <div className="text-white">
                            {menu.map((menuItem, index) => {
                                return <div>
                                    {index !== 0 && <WheatSVG className="w-20 h-auto mx-auto text-white/30 mt-3 mb-2"/>}
                                    <Pricing key={menuItem.title} {...menuItem}/>
                                </div>
                            })}
                        </div>
                    </div>
                    <div className="col-span-5">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurrentDishSection;