import * as React from "react"
import type {HeadFC, PageProps} from "gatsby"
import Section from "../components/Section";
import {useInView} from "react-intersection-observer";
import {Hero, PageLayout} from "./../components/page";

const sections = [
    "Cakes",
    "Menu Slider",
    "Breakfast",
    "Featured dish receipt",
];

const IndexPage: React.FC<PageProps> = () => {
    const [ref, inView] = useInView();

    const heroSection = <div ref={ref}>
        <Hero className={"bg-slate-700"}>
            <div className="text-white text-center py-10  px-5">
                <div className="text-7xl pb-5 font-serif">
                    Pastry with love
                </div>
                <p className="text-xl">We’re bringing you fresh ingredients every day in ways you can’t resist.</p>
            </div>
        </Hero>
    </div>;

    return (
        <PageLayout headerClassName={inView ? " bg-stone-900/30" : " bg-stone-900"} beforeMain={heroSection}>
            {sections.map((section) => (
                <Section key={section}
                         className={"h-dvh p-5 border-t-2 border-stone-800"}>
                    <h2 className="text-5xl text-center font-serif font-bold">{section}</h2>
                </Section>
            ))}
        </PageLayout>)
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>