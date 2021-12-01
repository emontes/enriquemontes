/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Programador Front-End`,
    description: `Desarrollo sistemas web utilizando Frameworks como Gastby y React para el Front,
    y para el Back uso Headless CMS como Strapi, Contentful o Wordpress`,
    titleTemplate: `%s | Enrique Montes`,
    url: `https://enriquemontes.com/`,
    twitterUsername: `@el_ade`,
    image: `/desarrollador-web.jpg`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Defaults to 100
        collectionTypes: [
          {
            name: `job`,
            api: { qs: { _locale: `all` } },
          },
          {
            name: `project`,
            api: { qs: { _locale: `all` } },
          },
        ],
        singleTypes: [
          {
            name: `about`,
            api: { qs: { _locale: `all` } },
          },
        ],
      },
    },
  ],
};
