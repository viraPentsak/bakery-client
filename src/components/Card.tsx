import React from "react";

interface CardProps {
    title: string;
    subtitle?: string;
    description?: string;
    children?: React.ReactNode;
}

const Card: React.FC<CardProps> = (props) => {
    const {title, subtitle, description, children} = props;
    return (
        <div className="p-4">
            <div className="pb-10 lg:pb-14">
                {title && <h4 className="text-lg md:text-5xl pt-2 pb-3 font-serif font-bold">{title}</h4>}
                {subtitle && <div className="text-sm uppercase text-leather-400 font-serif font-bold">{subtitle}</div>}
            </div>
            {description && <div className="">{description}</div>}
            {children}
        </div>
    );
};

export default Card;