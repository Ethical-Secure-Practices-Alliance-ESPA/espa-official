import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/about/',
    component: ComponentCreator('/about/', '4fb'),
    exact: true
  },
  {
    path: '/contact/',
    component: ComponentCreator('/contact/', '66c'),
    exact: true
  },
  {
    path: '/gdpr/',
    component: ComponentCreator('/gdpr/', '656'),
    exact: true
  },
  {
    path: '/legal/',
    component: ComponentCreator('/legal/', '533'),
    exact: true
  },
  {
    path: '/privacy/',
    component: ComponentCreator('/privacy/', '70b'),
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
    path: '/terms/',
    component: ComponentCreator('/terms/', 'f36'),
    exact: true
  },
  {
    path: '/transparency/',
    component: ComponentCreator('/transparency/', 'b81'),
    exact: true
  },
  {
    path: '/docs/',
    component: ComponentCreator('/docs/', '5e9'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/', 'c9c'),
        routes: [
          {
            path: '/docs/',
            component: ComponentCreator('/docs/', 'e6d'),
            routes: [
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
