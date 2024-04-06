import OtherIndustries from "../views/other-industries"
import { graphql } from "gatsby"

export default OtherIndustries

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
