import {graphql, useStaticQuery} from "gatsby";
import {I_GeneralLink} from "../interfaces";

const getSocialLinks = (): I_GeneralLink[] => {
    const data =  useStaticQuery(graphql`
        query {
        site{
            siteMetadata{
                title
                menuLinks{
                    name
                    link
                }
            }
        }
    }
    `);

    return data.site.siteMetadata.socialLinks;
}

export default getSocialLinks;