module.exports = {
  // pathPrefix: `/roast-pool`,
  siteMetadata: {
    siteURL: 'https://shroomist.github.io/candy-pool/', // replace this with your own domain
    siteUrl: 'https://shroomist.github.io/roast-pool/', // replace this with your own domain
    title: 'cardano roast', // replace it with your own title
    description: 'Delegate Cardano to low saturation pool',
    keywords: 'cardano, stake, stakepool, pool, delegate, delegation, margin, mining, staking, bitcoin',
    image: '/fav.png',
    author: 'Andrej Novikov', // this one is take, choose another name
    twitter: false, // replace it, or set to 'false' to disable "Tweet this" button
    social: [ // again, replace thse with your own value, or set to empty array to disable them
      // { name: 'twitter', url: 'https://twitter.com/xiaoxinghu' },
      { name: 'website', url: 'https://shroomist.github.io/candy-pool/' },
      { name: 'github', url: 'https://github.com/shroomist' },
      { name: 'email', url: 'mailto:jazzaiman@gmail.com' },
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ['G-TRRWBDYE7F'],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sources`,
        path: `src`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: `gatsby-theme-blorg`,
      options: {
        // contentPath: 'content',
        // filter: () => true,
        // pagination: 5,
        // columns: 2,
        indexPath: '/blog',
        // imageMaxWidth: 1380,
        // categoryIndexPath: category => `/${category}`,
        // tagIndexPath: tag => `/:${tag}:`,
        // slug: ({ export_file_name }) => `/${export_file_name}`,
        // postRedirect: () => [],
      },
    },
  ],
}
