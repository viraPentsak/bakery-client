import * as React from "react"
import type {HeadFC, PageProps} from "gatsby"
import Header from "../components/Header";
import Hero from "../components/Hero";

const IndexPage: React.FC<PageProps> = () => {
    return (<div className="page">
            <Header/>
            <Hero className={"bg-slate-700"}>
                <div className="text-white text-center py-10  px-5">
                    <div className="text-7xl pb-5 font-serif">
                        Pastry with love
                    </div>

                    <p className="text-xl">We’re bringing you fresh ingredients every day in ways you can’t resist.</p>
                </div>
            </Hero>
            <main className="container p-5">
                main
            </main>
            <div className="h-dvh"></div>
            <div className="h-dvh"></div>
        </div>
    )
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>