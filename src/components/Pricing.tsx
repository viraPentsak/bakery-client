import React from "react";
import {I_Price} from "../interfaces";

interface PricingProps {
    title: string;
    description: string;
    price: I_Price;
}

const formatPrice = (price: I_Price): string => {
    const amount = (price.amount / 100).toFixed(2);
    if (price.currency.code === "USD") {
        return price.currency.symbol + amount
    }
    return amount + price.currency.symbol;
}

const Pricing: React.FC<PricingProps> = (
    {title, description, price}) => {
    return (
        <div className="">
            <div className="text-3xl font-serif font-bold leading-none pb-2.5">
                {title}
            </div>
            <div className="opacity-80 pb-3">
                {description}
            </div>
            <div className="text-4xl text-straw-300 font-serif ">
                {formatPrice(price)}
            </div>
        </div>
    );
};

export default Pricing;