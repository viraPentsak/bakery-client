import * as React from "react"
import type {HeadFC, PageProps} from "gatsby"
import Header from "../components/Header";

const IndexPage: React.FC<PageProps> = () => {
    return (<div className="page">
            <Header/>

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