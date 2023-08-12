export default defineAppConfig({
  docus: {
    title: 'CodeTracker',
    description: 'CodeTracker is a tool for tracking your code',
    image: 'https://avatars.githubusercontent.com/u/123331606?s=200&v=4',
    socials: {
      // twitter: 'teammps',
      github: 'https://github.com/Mashed-Potato-Studios/code-tracker',
    },
    // github: {
    //   dir: '.starters/default/content',
    //   branch: 'main',
    //   repo: 'docus',
    //   owner: 'nuxt-themes',
    //   edit: true
    // },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: false,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    }
  }
})
