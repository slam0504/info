module.exports = {
  siteMetadata: {
    title: '提格托格',
  },
  pathPrefix: `/info.github.io`,
  plugins: [
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`
      }
    },
  ]
};
