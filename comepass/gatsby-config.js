module.exports = {
  siteMetadata: {
    title: `Comepass`,
    description: ``,
    author: `@gatsbyjs`,
    siteUrl: `https://comepass.pl`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    'gatsby-plugin-styled-components',
    `gatsby-plugin-sharp`,
    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "Comepass",
        fieldName: "Comepass",
        url: "https://api-eu-central-1.graphcms.com/v2/cl3t7615vbhw401xkfyqsc3k0/master",
    },
  }
  ],
}
 