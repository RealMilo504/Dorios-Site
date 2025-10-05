// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Dorios Studios',
  tagline: 'Free Addons for the Minecraft Community',
  favicon: 'img/dorios_logo.png',

  future: {
    v4: true,
  },

  url: 'https://doriosstudios.com',
  baseUrl: '/',

    headTags: [
      {
        tagName: 'meta',
        attributes: {
          name: 'algolia-site-verification',
          content: 'CA75657DD7DCB62C',
        },
      },
    ],


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
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/RealMilo504/Dorios-Site/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/RealMilo504/Dorios-Site/tree/main/',
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

  // 🔍 Algolia DocSearch configuration
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/dorios-social-card.jpg',

      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: true,
      },

      // ✅ Algolia search integration
      algolia: {
        appId: 'RKEKEVN76J',        
        apiKey: '10014418accac562deb948ebb31798a8', 
        indexName: 'Dorios Studios Documentation',  

        contextualSearch: true,
        searchParameters: {},
        searchPagePath: 'search',
      },

      navbar: {
        title: 'Dorios Studios',
        logo: {
          alt: 'Dorios Studios Logo',
          src: 'img/dorios_logo.png',
        },
        items: [
          { type: 'search', position: 'right' }, 
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
              { label: 'GitHub', href: 'https://github.com/RealMilo504' },
              {
                label: 'Patreon',
                href: 'https://patreon.com/DoriosStudios?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink',
              },
            ],
          },
          {
            title: 'Docs',
            items: [
              { label: 'UtilityCraft', to: '/docs/addons/utilitycraft/' },
              { label: 'Bountiful Bonsais', to: '/docs/addons/bountiful_bonsais/' },
              { label: `Dorios' Trinkets`, to: '/docs/addons/dorios_trinkets/' },
              { label: 'Our Add-Ons', to: '/docs/addons' },
            ],
          },
          {
            title: 'Community',
            items: [
              { label: 'Discord', href: 'https://discord.gg/x36H3ZtmK5' },
              { label: 'YouTube', href: 'https://www.youtube.com/@doriosstudios' },
              { label: 'CurseForge', href: 'https://www.curseforge.com/minecraft-bedrock/addons' },
              { label: 'MCPEDL', href: 'https://mcpedl.com/user/doriosstudios/' },
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
