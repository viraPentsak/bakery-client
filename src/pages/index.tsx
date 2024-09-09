import React from "react"
import type {HeadFC, PageProps} from "gatsby"
import Section from "../components/Section";
import {useInView} from "react-intersection-observer";
import {Hero, PageLayout} from "./../components/page";
import DashedLine from "@svg/dashed_line.svg";
import NavLink from "../components/NavLink";
import {
    CakeSection,
    MenuSection,
    currentDishSection,
    FeaturedSection,
} from "./home";
import VignetteOuterSVG from "@svg/vignette_outer.svg";
import BreadSVG from "@svg/bread.svg";

const sections = [
    {key: "cakes-section", element: CakeSection, props: {className: 'py-8 md:py-14 xl:py-18 px-5'}},
    {key: "menu-section", element: MenuSection, props: {className: 'py-8 md:py-14 xl:py-18 px-5 bg-banner-menu'}},
    {key: "dish-section", title: "Dish", element: currentDishSection, props: {className: 'py-8 md:py-14 xl:py-18 px-5 bg-stone-800 bg-banner-featured'}},
    {key: "feature-section", title: "Feature receipt", element: FeaturedSection, props: {className: 'py-8 md:py-14 xl:py-18 px-5'}},
];

const menuButton = (
    <NavLink href="/menu"
             className="uppercase
             font-serif font-bold
             border border-dashed border-white/50
             py-4 px-6 md:px-10 xl:px-14
             bg-gray-600/50
             hover:bg-gray-600/80
             hover:border-solid">
        Our Menu
    </NavLink>);

const heroStamp = (
    <div className="text-laser-400">
        <VignetteOuterSVG className="absolute left-2/4 bottom-0 w-28 h-28 -ml-14 -mb-14 drop-shadow-sm"/>
        <div className="absolute  left-2/4 bottom-0 rounded-full bg-white w-20 h-20 -ml-10 -mb-10 shadow-sm"></div>
        <BreadSVG className="absolute left-2/4 bottom-0 w-14 h-14 m-auto -ml-7 -mb-7"/>
    </div>
);

const IndexPage: React.FC<PageProps> = () => {
    const [ref, inView] = useInView();

    const heroSection = <div ref={ref}>
        <Hero className="bg-slate-700"
              childrenClassName="bg-slate-700/30 max-h-[900px]"
              imgClassName="min-h-80 max-h-[900px]">
            <div className="container max-w-screen-xl pt-[--header-height] md:pt-[--header-height-md]">
                <div className="text-white text-center py-10 px-5">
                    <div className="text-3xl xl:text-8xl md:text-7xl pb-5 md:pb-10 xl:pb-14 font-serif font-bold">
                        Pastry with love
                    </div>
                    <div className="pb-5 md:pb-10 xl:pb-14">
                        <DashedLine className="m-auto"/>
                    </div>
                    <div className="md:w-3/4 xl:w-2/4 mx-auto">
                        <p className="text-xl md:text-2xl pb-5 md:pb-10 xl:pb-16">We’re bringing you fresh ingredients
                            every day in ways you can’t resist.</p>
                        {menuButton}
                    </div>
                </div>
            </div>
            {heroStamp}
        </Hero>
    </div>;

    return (
        <PageLayout headerClassName={inView ? " bg-gray-600/30" : " bg-gray-800"} beforeMain={heroSection}>

            {sections.map((section) => (
                <Section key={section.key}  {...section.props}>
                    {section.title && <h2 className="text-5xl text-center font-serif font-bold">{section.title}</h2>}
                    <section.element/>
                </Section>
            ))}
        </PageLayout>)
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>