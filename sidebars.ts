import { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {

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
