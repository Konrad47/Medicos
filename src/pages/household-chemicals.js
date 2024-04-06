import HouseholdChemicals from "../views/household-chemicals"
import { graphql } from "gatsby"

export default HouseholdChemicals

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
