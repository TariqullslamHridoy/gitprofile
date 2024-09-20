// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'TariqullslamHridoy', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/profile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Comprehensive Guide to Finding and Accessing Webcams Using Google and Shodan Dorks',
          description:
            'A detailed guide on using Google and Shodan dorks to find and access publicly exposed webcams. The article covers OSINT techniques and cybersecurity precautions.',
          imageUrl:
            'https://www.osintteam.com/content/images/size/w600/format/avif/2024/08/Find-and-Access-Webcams-Using-Google-and-Shodan-Dorks.-A-complete-guide..jpg',
          link: 'https://www.osintteam.com/comprehensive-guide-to-finding-and-accessing-webcams-using-google-and-shodan-dorks/',
        },
        {
          title: 'Top 5 Deep Web Black Markets',
          description:
            'Deep web marketplaces are online marketplaces where people can buy and sell illicit goods and services under the protection of the anonymity of the dark web. The goods and services on offer range from leaked credit card details, exploit kits, and hackers for hire to advertisements for hitmen services.',
          imageUrl:
            'https://miro.medium.com/v2/resize:fit:720/format:webp/0*NqmHP7yJZE6YBzwd.png',
          link: 'https://medium.com/the-first-digit/top-5-deep-web-black-markets-c792e2e1e5fc',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Md Tariqul IsIam',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'Md Tariqul IsIam',
    twitter: 'Tariqul_404',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: 'TariqullslamHridoy',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: 'Tariqul911',
    website: 'https://tariqullslamhridoy.github.io/profile',
    phone: '',
    email: 'tariqul.cx@icloud.com',
  },
  CV: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Ethical Hacking',
    'Threat Hunting',
    'Malware Analysis',
    'Vulnerability Assessment',
    'Cybersecurity Risk Management',
    'OSINT Investigations',
    'MySQL',
    'Social Media Profiling',
    'IP Tracking and Geolocation',
    'Incident Analysis',
    'Web Application Security',
    'CSS',
    'Network Penetration Testing',
    'OSINT Tools',
  ],
  experiences: [
    {
      company: 'Fiverr',
      position: 'OSINT Expart',
      from: 'April, 2018',
      to: 'Present',
      companyLink: 'https://www.fiverr.com/hridoy_404',
    },
    {
      company: 'CipherShadowIT',
      position: 'CEO & Cyber Security Specialist',
      from: '2023',
      to: 'August,9 2024',
      companyLink: 'http://ciphershadow.com',
    },
  ],
  certifications: [
    {
      name: 'CEH - Certified Ethical Hacker',
      body: 'EC-Council',
      year: '2018',
      link: 'https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/',
    },
        {
      name: 'Digital Forensic',
      body: 'EC-Council',
      year: '2023',
      link: 'https://www.eccouncil.org',
    },
        {
      name: 'Registered OSINT Analyst',
      body: 'International Anti Crime Academy (IACA)',
      year: '2024',
      link: 'https://www.iaca.nl',
    },
        {
      name: 'Private Detective',
      body: 'International Anti Crime Academy',
      year: '2022',
      link: 'https://www.iaca.nl',
    },
  ],
  educations: [
    {
      institution: 'Bagular chak A.K.P.K.M.M High School',
      degree: 'SSC',
      from: '',
      to: '',
    },

  ],
  publications: [
    {
      title: 'OSINT TOOLS NEES',
      conferenceName: '',
      journalName: 'Start.me OSINT Tools',
      authors: 'Md Tariqul Islam',
      link: 'https://start.me/p/0NXpbg/osint-expert-researcher',
      description:
        'An article outlining essential OSINT tools for researchers and investigators. Published on start.me, the guide includes a curated list of tools for data gathering, analysis, and reporting.',
    },
    {
      title: 'How to Conduct Social Media Investigations with OSINT',
      conferenceName: 'Conference Name',
      journalName: 'Fiverr Blog',
      authors: 'Md Tariqul Islam',
      link: 'https://www.fiverr.com/s/990bEwE',
      description:
        'An article providing a step-by-step guide on how to conduct effective social media investigations using OSINT tools and techniques.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'TariqullslamHridoy', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://www.facebook.com/Tariqul404"
      target="_blank"
      rel="noreferrer"
    >Profile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
