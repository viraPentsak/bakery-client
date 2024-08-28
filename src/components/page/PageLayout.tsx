import React from "react";
import Footer from "./Footer";
import Header from "./Header";

interface PageLayoutProps {
    useIntersection?: boolean;
    children?: React.ReactNode;
    beforeMain?: React.ReactNode;
    headerClassName?: string;
    footerClassName?: string;
}

//Footer & Header
// Children as main content

const PageLayout: React.FC<PageLayoutProps> = (
    {
        children,
        beforeMain,
        headerClassName,
        footerClassName
    }) => {
    return (
        <div className="page">
            <Header className={headerClassName}/>
            {beforeMain}
            <div className="main">
                {children}
            </div>
            <Footer className={footerClassName}/>
        </div>
    );
};

export default PageLayout;