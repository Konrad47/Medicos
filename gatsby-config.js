require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Medicos`,
    author: "Medicos",
    author: {
      name: `Medicost`,
      summary: `Medicos`,
    },
    description: `Medicos`,
    siteUrl: `https://github.com/Konrad47`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `locales`,
        path: `${__dirname}/locales`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locales`,
        languages: [`pl`, `en`],
        defaultLanguage: `pl`,
        siteUrl: `https://gatsbystarterblogsource.gatsbyjs.io/`,
        redirect: false,
        pages: [
          {
            matchPath: "/dev-404-page",
            languages: ["pl"],
          },
        ],
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `REM`,
            file: `https://fonts.googleapis.com/css2?family=REM:ital,wght@0,100..900;1,100..900&display=swap`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Medicos`,
        short_name: `Medicos`,
        start_url: `/`,
        background_color: `#faf0f9`,
        display: `standalone`,
        icon: `src/images/medicos-icon.png`,
      },
    },
  ],
}
