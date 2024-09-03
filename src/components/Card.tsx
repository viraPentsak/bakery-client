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
            <div className="pb-10 lg:pb-16">
                {title && <h4 className="text-lg md:text-5xl font-bold font-serif pb-4">{title}</h4>}
                {subtitle && <div className="text-sm uppercase font-bold text-amber-800">{subtitle}</div>}
            </div>
            {description && <div className="">{description}</div>}
            {children}
        </div>
    );
};

export default Card;