import WebsiteRegulations from "../views/website-regulations"
import { graphql } from "gatsby"

export default WebsiteRegulations

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
