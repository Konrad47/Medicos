import PrivacyPolicy from "../views/privacy-policy"
import { graphql } from "gatsby"

export default PrivacyPolicy

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
