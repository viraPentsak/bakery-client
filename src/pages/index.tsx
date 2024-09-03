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

const sections = [
    {title: "Cakes", element: CakeSection},
    {title: "Menu", element: MenuSection},
    {title: "Dish", element: currentDishSection},
    {title: "Feature receipt", element: FeaturedSection},
];

const menuButton = (
    <NavLink href="/menu"
             className="serif uppercase
             font-bold
             border border-dashed border-white/50
             py-4 px-6 md:px-10 xl:px-14
             bg-stone-700/60
             hover:bg-stone-700/80
             hover:border-solid">
        Our Menu
    </NavLink>);

const IndexPage: React.FC<PageProps> = () => {
    const [ref, inView] = useInView();

    const heroSection = <div ref={ref}>
        <Hero className="bg-slate-700" childrenClassName="bg-slate-700/30" imgClassName="min-h-80 xl:min-h-96">
            <div className="mt-[--header-height] md:mt-[--header-height-md]">
                <div className="text-white text-center py-10 px-5">
                    <div className="text-3xl xl:text-8xl md:text-7xl pb-5 md:pb-10 xl:pb-14 font-serif font-bold">
                        Pastry with love
                    </div>
                    <div className="pb-5 md:pb-10 xl:pb-16">
                        <DashedLine className="m-auto"/>
                    </div>
                    <div className="md:w-3/4 xl:w-1/4 mx-auto">
                        <p className="text-xl md:text-2xl pb-5 md:pb-10 xl:pb-16">We’re bringing you fresh ingredients
                            every day in ways you can’t resist.</p>
                        {menuButton}
                    </div>
                </div>
            </div>
        </Hero>
    </div>;

    return (
        <PageLayout headerClassName={inView ? " bg-stone-900/30" : " bg-stone-900"} beforeMain={heroSection}>
            {sections.map((section) => (
                <Section key={section.title}
                         className={"min-h-dvh py-8 md:py-16 xl:py-20 px-5 border-t-2 border-stone-800"}>
                    {section.title && <h2 className="text-5xl text-center font-serif font-bold">{section.title}</h2>}
                    <section.element/>
                </Section>
            ))}
        </PageLayout>)
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>