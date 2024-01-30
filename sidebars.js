/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {

  tutorialSidebar: [
    {
      type: 'category',
      label: 'Subjective for Web',
      items: ['web/start'],
    },
    {
      type: 'category',
      label: 'Subjective for iOS',
      items: ['ios/start'],
    },
  ],
  developerSidebar: [
    {
      type: 'category',
      label: 'CLI',
      items: ['developer/cli'],
    },
    {
      type: 'category',
      label: 'SubjectveKit',
      items: ['developer/kit'],
    },
  ],

};

export default sidebars;
