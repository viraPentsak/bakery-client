import React from "react";
import {
    TfiQuoteLeft ,
    TfiQuoteRight
} from "react-icons/tfi";
import {twMerge} from "tw-merge";
import clsx from "clsx";


interface QuoteProps {
    children: React.ReactNode;
    className?: string
}

const Quote: React.FC<QuoteProps> = (props) => {
    const className = twMerge(clsx("relative p-6 md:px-10 font-cursive text-3xl leading-tight", props.className))
    return (
        <div className={className}>
           <TfiQuoteLeft  className="absolute top-1 left-1 w-6 h-4"/>
            {props.children}
           <TfiQuoteRight className="absolute bottom-1 right-1  w-6 h-4"/>
        </div>
    );
};

export default Quote;