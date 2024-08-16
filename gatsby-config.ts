import type {GatsbyConfig} from "gatsby";

const config: GatsbyConfig = {
    siteMetadata: {
        title: `bakery`,
        menuLinks: [
            {
                name: "home",
                link: "/"
            },
            {
                name: "menu",
                link: "/menu"
            },
            {
                name: "news",
                link: "/news"
            },
            {
                name: "contact",
                link: "/contact"
            }
        ],
        socialLinks: [
            {
                name: "twitter",
                link: "www.twitter.com/bakery"
            },
            {
                name: "facebook",
                link: "www.facebook.com/bakery"
            },
            {
                name: "instagram",
                link: "www.instagram.com/bakery"
            }
        ]
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: [
        "gatsby-plugin-postcss",
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                "name": "images",
                "path": "./src/images/"
            },
            __key: "images"
        }, {
            resolve: "gatsby-source-filesystem",
            options: {
                "name": "pages",
                "path": "./src/pages/"
            },
            __key: "pages"
        },
        {
            resolve: "gatsby-omni-font-loader",
            options: {
                mode: "async",
                enableListener: true,
                preconnect: ["https://fonts.gstatic.com"],
                web:[
                    {
                        name: "Alegreya",
                        file: "https://fonts.googleapis.com/css2?family=Alegreya:wght@400;700"
                    },
                    {
                        name: "Roboto",
                        file: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700"
                    }
                ]
            }
        }
    ]
};

export default config;