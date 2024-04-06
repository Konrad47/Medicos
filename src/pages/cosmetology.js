import Cosmetology from "../views/cosmetology"
import { graphql } from "gatsby"

export default Cosmetology

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
