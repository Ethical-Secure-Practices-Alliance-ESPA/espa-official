// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ESPA Docs',
  tagline: 'Ethical & Secure Practices Alliance',
  favicon: 'img/favicon.ico',

  url: 'https://myespa.ch', // replace with your production URL
  baseUrl: '/',

  organizationName: 'Ethical-Secure-Practices-Alliance-ESPA',
  projectName: 'espa',


  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/Ethical-Secure-Practices-Alliance-ESPA/espa-docs/tree/main/docs/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  ({
    image: 'img/docusaurus-social-card.jpg',

    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },

    // 🔍 ADD THIS BLOCK
    algolia: {
      appId: 'MKKED3VRQF',
      apiKey: 'dac2530faeff93223a081924af9d41dc',
      indexName: 'Documentation',

      contextualSearch: true,
      searchPagePath: 'search',
    },

    navbar: {
      logo: {
        alt: 'ESPA Logo',
        src: 'img/espa-logo.png',
      },
      items: [
        {
          to: '/about',
          label: 'About',
          position: 'left',
        },
        {
          type: 'docSidebar',
          sidebarId: 'documentation',
          position: 'left',
          label: 'Documentation',
        },

        // 🔍 ADD THIS ITEM (anywhere, usually right)
        {
          type: 'search',
          position: 'right',
        },

        {
          to: '/supporters',
          label: 'Support ESPA',
          position: 'right',
        },
        {
          to: '/contact',
          label: 'Contact',
          position: 'right',
        },
        {
          href: 'https://github.com/Ethical-Secure-Practices-Alliance-ESPA/',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

      footer: {
        style: 'dark',
        links: [
          {
            title: 'Legal',
            items: [
              { label: 'Legal', to: '/legal' },
              { label: 'Privacy', to: '/privacy' },
              { label: 'Terms', to: '/terms' },
              { label: 'GDPR', to: '/gdpr' },
            ],
          },
          {
            title: 'Navigation',
            items: [
              { label: 'Governance', to: '/docs/Governance/governance' },
              { label: 'Public Guides', to: '/docs/Public-Guides/ethics-and-security-basics' },
              { label: 'Supporter Guides', to: '/docs/Supporter-Guides/advanced-security-practices' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ESPA. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
