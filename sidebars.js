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
      items: [
        "web/start",
        {
          "type": "category",
          "label": "Student",
          "items": [
            'web/student/subjects',
            'web/student/links',
            'web/student/export',
            'web/student/clear-data'
          ]
        },
        {
          "type": "category",
          "label": "Timetable",
          "items": [
            'web/timetable/editing',
            'web/timetable/custom',
          ]
        },
        {
          "type": "category",
          "label": "App",
          "items": [
            'web/app/dynamic-title',
            'web/app/notifications',
            'web/app/pwa',
          ]
        },
        {
          "type": "category",
          "label": "Help",
          "items": [
            'web/help/faq',
            'web/help/troubleshooting',
          ]
        }
      ],
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
      label: 'Subjective CLI and Rust Library',
      items: ['developer/cli-and-rust/about'],
    },
    {
      type: 'category',
      label: 'Subjective Assembly',
      items: ['developer/assembly/about'],
    },
    {
      type: 'category',
      label: 'SubjectiveKit',
      items: ['developer/kit/about'],
    },
  ],

};

export default sidebars;
