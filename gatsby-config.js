const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  siteMetadata: {
    siteUrl: 'https://crackingleetcode.com',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        fileName: isDev,
        displayName: isDev,
        pure: true,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-datocms',
      options: {
        apiToken: '24aa115d5ad4086fa8b3ddaa69ae88',
        localeFallbacks: {
          pl: 'en',
        },
      },
    },
  ],
};
