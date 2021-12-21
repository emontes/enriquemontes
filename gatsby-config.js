/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Programador en Cancún`,
    description: `Desarrollo sistemas web utilizando Frameworks como Gastby y React para el Front,
    y para el Back uso Headless CMS como Strapi, Contentful o Wordpress`,
    titleTemplate: `%s | Enrique Montes`,
    url: `https://enriquemontes.com`,
    twitterUsername: `@el_ade`,
    image: `/desarrollador-web.jpg`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `locale`,
        path: `${__dirname}/locales`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
        languages: [`en`, `es`, `he`, `ru`, `de`],
        defaultLanguage: `en`,
        // if you are using Helmet, you must include siteUrl, and make sure you add http:https
        siteUrl: `https://enriquemontes.com/`,
        // you can pass any i18next options
        i18nextOptions: {
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
          keySeparator: false,
          nsSeparator: false,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 5000, // Defaults to 100
        collectionTypes: [
          `recurso`,
          `recurso-tipo`,

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
            name: "about",
            api: {
              qs: {
                _locale: `en`,
              },
            },
          },
          {
            name: "about",
            api: {
              qs: {
                _locale: `es`,
              },
            },
          },
          {
            name: "about",
            api: {
              qs: {
                _locale: `de`,
              },
            },
          },
          {
            name: "about",
            api: {
              qs: {
                _locale: `he`,
              },
            },
          },
          {
            name: "about",
            api: {
              qs: {
                _locale: `ru`,
              },
            },
          },
        ],
      },
    },
  ],
};
