import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Subjective Docs',
  tagline: 'Get to know your school-tailored student organisation app.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.subjective.candra.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'SubjectiveLabs', // Usually your GitHub org/user name.
  projectName: 'SubjectiveDocs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
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
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Subjective Docs',
        logo: {
          alt: 'Subjective logo',
          src: 'icons/icon-512x512.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Guide',
          },
          {
            type: 'docSidebar',
            sidebarId: 'developerSidebar',
            position: 'left',
            label: 'Developer',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://discord.subjective.school',
            label: 'Discord',
            position: 'right',
          },
          {
            href: 'https://github.com/SubjectiveLabs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Guide',
                to: '/docs/web/start',
              },
              {
                label: 'Developer',
                to: '/docs/developer/assembly/about',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Discord',
                href: 'https://discord.subjective.school',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'About',
                href: 'https://subjective.candra.dev/about',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/SubjectiveLabs',
              },
              {
                label: 'Status',
                to: 'https://status.subjective.candra.dev',
              },
              {
                label: 'Privacy & Legal',
                to: '/docs/legal',
              },
            ],
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
