module.exports = {
  siteMetadata: {
    title: `Braxton Lemmon - Fullstack Web Developer`,
    description: `Braxton Lemmon - Fullstack Web Developer`,
    author: `Braxton Lemmon`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Braxton Lemmon - Web Developer`,
        short_name: `Braxton Lemmon`,
        start_url: `/`,
        background_color: `#78766a`,
        theme_color: `#78766a`,
        display: `minimal-ui`,
        icon: `src/images/bl_logo_square.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Open Sans',
          'Nerko One',
          'Lato',
          'Poppins',
          `Josefin Sans\:100,200`
        ],
        display: 'swap'
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /icons/
        }
      }
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://www.braxtonlemmon.com/',
      },
    },
    // 'gatsby-plugin-offline',
    'gatsby-plugin-styled-components',
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-netlify',
    'gatsby-transformer-sharp',

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
