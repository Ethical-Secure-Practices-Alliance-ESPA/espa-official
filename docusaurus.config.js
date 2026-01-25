// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ESPA - Ethical & Secure Practices Alliance',
  tagline: 'Ethical & Secure Practices Alliance',
  favicon: 'img/favicon-new.ico',

  url: 'https://myespa.ch',
  baseUrl: '/',
  trailingSlash: true,

  organizationName: 'Ethical-Secure-Practices-Alliance-ESPA',
  projectName: 'espa',

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
      // onBrokenAnchors: 'warn', // optional
    },
  },

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
          { to: '/about', label: 'About', position: 'left' },
          { to: '/transparency', label: 'Transparency', position: 'left' },
          {
            type: 'docSidebar',
            sidebarId: 'documentation',
            position: 'left',
            label: 'Documentation',
          },
          { type: 'search', position: 'right' },
          { to: '/supporters', label: 'Support ESPA', position: 'right' },
          { to: '/contact', label: 'Contact', position: 'right' },
          {
            href: 'https://github.com/Ethical-Secure-Practices-Alliance-ESPA/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

footer: {
  style: 'dark',

  copyright: `Copyright © ${new Date().getFullYear()} ESPA. Built with Docusaurus.
Documentation content is licensed under CC BY-NC-SA 4.0 unless otherwise stated.`,
},

prism: {
  theme: prismThemes.github,
  darkTheme: prismThemes.dracula,
},

    }),
};

export default config;
