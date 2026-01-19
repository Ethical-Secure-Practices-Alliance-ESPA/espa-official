import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/about',
    component: ComponentCreator('/about', '8b4'),
    exact: true
  },
  {
    path: '/contact',
    component: ComponentCreator('/contact', 'b83'),
    exact: true
  },
  {
    path: '/gdpr',
    component: ComponentCreator('/gdpr', '962'),
    exact: true
  },
  {
    path: '/legal',
    component: ComponentCreator('/legal', '108'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/privacy',
    component: ComponentCreator('/privacy', '21b'),
    exact: true
  },
  {
    path: '/supporters',
    component: ComponentCreator('/supporters', '872'),
    exact: true
  },
  {
    path: '/terms',
    component: ComponentCreator('/terms', '3b9'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '45d'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'a65'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '658'),
            routes: [
              {
                path: '/docs/Governance/governance',
                component: ComponentCreator('/docs/Governance/governance', 'dba'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/Governance/who-we-serve',
                component: ComponentCreator('/docs/Governance/who-we-serve', 'c9a'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/Public-Guides/account-management',
                component: ComponentCreator('/docs/Public-Guides/account-management', 'c4f'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/Public-Guides/ethical-open-source',
                component: ComponentCreator('/docs/Public-Guides/ethical-open-source', '9fb'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/Public-Guides/ethics-and-security-basics',
                component: ComponentCreator('/docs/Public-Guides/ethics-and-security-basics', 'd06'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/Public-Guides/network-security',
                component: ComponentCreator('/docs/Public-Guides/network-security', 'cb7'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/Public-Guides/privacy',
                component: ComponentCreator('/docs/Public-Guides/privacy', 'b5c'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/Public-Guides/secure-storage',
                component: ComponentCreator('/docs/Public-Guides/secure-storage', '288'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/Supporter-Guides/advanced-security-practices',
                component: ComponentCreator('/docs/Supporter-Guides/advanced-security-practices', 'c65'),
                exact: true,
                sidebar: "documentation"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
