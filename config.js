
const isProd = process.env.NODE_ENV === 'production';

const projectName = 'tutorial-site-template';
const basePath = isProd ? `/${projectName}` : '';

const siteUrl = `https://osawa-koki.github.io/${projectName}`;
const githubUrl = `https://github.com/osawa-koki/${projectName}`

const config = {
  gatsby: {
    pathPrefix: basePath,
    siteUrl,
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: `${basePath}/Logo.png`,
    logoLink: siteUrl,
    title: `<a href='${siteUrl}'>🐙🐙🐙</a>`,
    githubUrl,
    helpUrl: '',
    tweetText: '',
    social: ``,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction',
      '/codeblock',
    ],
    collapsedNav: [
      '/codeblock',
    ],
    links: [{ text: 'osawa-koki', link: 'https://github.com/osawa-koki' }],
    frontLine: false,
    ignoreIndex: true,
    title:
      "<a href='https://github.com/osawa-koki'>Terraform </a><div class='greenCircle'></div><a href='https://github.com/osawa-koki?tab=repositories'>repos</a>",
  },
  siteMetadata: {
    title: 'Tutorial Template | osawa-koki',
    description: "🐙 Hello World!",
    ogImage: null,
    docsLocation: `${githubUrl}`,
    favicon: `${basePath}/favicon.ico`,
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: projectName,
      short_name: projectName,
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
