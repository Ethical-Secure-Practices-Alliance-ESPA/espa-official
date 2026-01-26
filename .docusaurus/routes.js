import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/about/',
    component: ComponentCreator('/about/', '4fb'),
    exact: true
  },
  {
    path: '/community/',
    component: ComponentCreator('/community/', 'a24'),
    exact: true
  },
  {
    path: '/contact/',
    component: ComponentCreator('/contact/', '66c'),
    exact: true
  },
  {
    path: '/search/',
    component: ComponentCreator('/search/', '21e'),
    exact: true
  },
  {
    path: '/supporters/',
    component: ComponentCreator('/supporters/', 'd81'),
    exact: true
  },
  {
    path: '/transparency/',
    component: ComponentCreator('/transparency/', 'b81'),
    exact: true
  },
  {
    path: '/docs/',
    component: ComponentCreator('/docs/', '5c3'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/', 'bc7'),
        routes: [
          {
            path: '/docs/',
            component: ComponentCreator('/docs/', '458'),
            routes: [
              {
                path: '/docs/docs/legal/legal-overview/',
                component: ComponentCreator('/docs/docs/legal/legal-overview/', '9ed'),
                exact: true,
                sidebar: "legal"
              },
              {
                path: '/docs/gdpr/',
                component: ComponentCreator('/docs/gdpr/', '45b'),
                exact: true,
                sidebar: "legal"
              },
              {
                path: '/docs/Governance/governance/',
                component: ComponentCreator('/docs/Governance/governance/', 'd14'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/Governance/who-we-serve/',
                component: ComponentCreator('/docs/Governance/who-we-serve/', 'aee'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/legal-notice/',
                component: ComponentCreator('/docs/legal-notice/', 'e81'),
                exact: true,
                sidebar: "legal"
              },
              {
                path: '/docs/privacy/',
                component: ComponentCreator('/docs/privacy/', '20f'),
                exact: true,
                sidebar: "legal"
              },
              {
                path: '/docs/Public-Guides/account-management/',
                component: ComponentCreator('/docs/Public-Guides/account-management/', 'd4c'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/Public-Guides/ethical-open-source/',
                component: ComponentCreator('/docs/Public-Guides/ethical-open-source/', '751'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/Public-Guides/ethics-and-security-basics/',
                component: ComponentCreator('/docs/Public-Guides/ethics-and-security-basics/', 'f9e'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/Public-Guides/network-security/',
                component: ComponentCreator('/docs/Public-Guides/network-security/', '2d6'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/Public-Guides/privacy-fundamentals/',
                component: ComponentCreator('/docs/Public-Guides/privacy-fundamentals/', 'b59'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/Public-Guides/secure-storage/',
                component: ComponentCreator('/docs/Public-Guides/secure-storage/', 'bb8'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/Supporter-Guides/advanced-security-practices/',
                component: ComponentCreator('/docs/Supporter-Guides/advanced-security-practices/', 'b75'),
                exact: true,
                sidebar: "documentation"
              },
              {
                path: '/docs/terms/',
                component: ComponentCreator('/docs/terms/', '2c4'),
                exact: true,
                sidebar: "legal"
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
