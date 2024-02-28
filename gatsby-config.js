require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `GPW Warsaw Passive Investment`,
    author: "GPW Warsaw Passive Investment",
    author: {
      name: `GPW Warsaw Passive Investment`,
      summary: `Strona internetowa GPW Warsaw Passive Investment`,
    },
    description: `Strona internetowa GPW Warsaw Passive Investment`,
    siteUrl: `http://wpic-gpw.pl/`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.GPW_SPACE_ID,
        accessToken: process.env.GPW_ACCESS_TOKEN,
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
            name: `Red Hat Display`,
            file: `https://fonts.googleapis.com/css2?family=Red+Hat+Display:ital,wght@0,300..900;1,300..900&display=swap`,
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
        name: `Warsaw Passive Investment Conference`,
        short_name: `WPIC`,
        start_url: `/`,
        background_color: `#faf0f9`,
        display: `standalone`,
        icon: `src/images/gpw-icon.png`,
      },
    },
  ],
}
