import Home from "../views/home"
import { graphql } from "gatsby"
import "../styles/global.css"

export default Home

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
