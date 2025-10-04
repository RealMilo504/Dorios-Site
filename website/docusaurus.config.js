// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Dorios Studios',
  tagline: 'Free Addons for the Minecraft Community',
  favicon: 'img/dorios_logo.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true,
  },

  // Site URL
  url: 'https://doriosstudios.com',
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'RealMilo504',
  projectName: 'Dorios-Site',

  onBrokenLinks: 'throw',

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
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/RealMilo504/Dorios-Site/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/RealMilo504/Dorios-Site/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/dorios-social-card.jpg',

      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: true,
      },

      navbar: {
        title: 'Dorios Studios',
        logo: {
          alt: 'Dorios Studios Logo',
          src: 'img/dorios_logo.png', // put your logo in static/img/logo.png
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Pages',
          },
          { to: '/about', label: 'About Us', position: 'left' },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/RealMilo504/Dorios-Site',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      footer: {
        style: 'dark',
        links: [
          {
            title: 'About',
            items: [
              { label: 'About Us', to: '/about' },
              // { label: 'Projects', to: '/projects' },
              // { label: 'Team', to: '/team' },
              // { label: 'Contact', to: '/contact' },
            ],
          },
          {
            title: 'Docs',
            items: [
              { label: 'UtilityCraft', to: '/docs/addons/utilitycraft/' },
              { label: 'Bountiful Bonsais', to: '/docs/addons/bountiful-bonsais/' },
              { label: `Dorios' Trinkets`, to: '/docs/addons/dorios_trinkets/' },
              { label: 'Our Add-Ons', to: '/docs/addons' },
            ],
          },
          {
            title: 'Community',
            items: [
              { label: 'Discord', href: 'https://discord.gg/x36H3ZtmK5' },
              { label: 'YouTube', href: 'https://www.youtube.com/@doriosstudios' },
              { label: 'GitHub', href: 'https://github.com/RealMilo504' },
              { label: 'CurseForge', href: 'https://www.curseforge.com/minecraft-bedrock/addons' },
              { label: 'MCPEDL', href: 'https://mcpedl.com/user/doriosstudios/' },
              { label: 'Patreon', href: 'https://patreon.com/DoriosStudios?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink' },
            ],
          },
          {
            title: 'Legal',
            items: [
              // { label: 'Privacy Policy', to: '/privacy' },
              // { label: 'Terms of Use', to: '/terms' },
              // { label: 'Credits', to: '/credits' },
            ],
          },
        ],
        logo: {
          alt: 'Dorios Studios Logo',
          src: '/img/dorios_logo.png',
          href: 'https://doriosstudios.com',
          width: 40,
          height: 40,
        },
        copyright: `
          © ${new Date().getFullYear()} Dorios Studios — Creating worlds, one addon at a time.<br/>
          Built with ❤️ using Docusaurus.
        `,
      },  


      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
