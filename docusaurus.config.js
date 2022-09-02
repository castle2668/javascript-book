// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Sealman's JavaScript Book",
  tagline: "JavaScript Is Weird. And That's Why We Love It.",
  url: 'https://javascript.sealman.tw',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/icon.png',
  organizationName: 'Sealman234', // Usually your GitHub org/user name.
  projectName: 'javascript-book', // Usually your repo name.
  i18n: {
    defaultLocale: 'zh-Hant-TW',
    locales: ['zh-Hant-TW'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/sealman234/javascript-book/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        googleAnalytics: {
          trackingID: 'UA-153300681-3',
          anonymizeIP: true,
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: 'keywords',
          content: 'sealman, javascript, book, blog',
        },
      ],
      navbar: {
        title: "Sealman's JavaScript Book",
        logo: {
          alt: 'My Site Logo',
          src: 'img/icon.png',
        },
        items: [
          {
            href: 'https://www.sealman.tw',
            label: 'Blog',
            position: 'right',
          },
          {
            href: 'https://github.com/sealman234',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: "Sealman's JavaScript Book",
                to: '/',
              },
              {
                label: "Sealman's React Book",
                href: 'https://react.sealman.tw',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/Sealman234',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://www.sealman.tw',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/sealman234',
              },
            ],
          },
        ],
        copyright: `Copyright © 2019-${new Date().getFullYear()} Sealman. All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
