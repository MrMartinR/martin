// export type TCategoryTypes = typeof category[number]

// export const category = ['Backend', 'Frontend', 'DevOps', 'Utilities'] as const

export interface ILogos {
  name: string
  description: string
  src: string
}

export const frontend: ILogos[] = [
  {
    name: 'Claris FileMaker',
    description:
      'An application development platform to build apps like a boss',
    src: 'claris.svg',
  },
  {
    name: 'Quasar',
    description: 'Amazing layer on top of Vue',
    src: 'quasar.svg',
  },
  {
    name: 'Vue',
    description: 'Vue 3 JS Framework',
    src: 'vue.svg',
  },
  // {
  //   name: 'Vite',
  //   description: 'Vite is a no bundler DEV environment for Vue.js',
  //   src: '/assets/vite.svg',
  // },
  // {
  //   name: 'Pinia',
  //   description: 'Vue 3 Store',
  //   src: '/assets/pinia.svg',
  // },
]

export const backend: ILogos[] = [
  {
    name: 'Parse',
    description: 'Backend',
    src: 'parse.svg',
  },
  {
    name: 'PostgreSQL',
    description: 'Open source SQL database',
    src: 'postgres.svg',
  },
  {
    name: 'AWS',
    description: 'Amazon Web Services',
    src: 'aws.svg',
  },
  {
    name: 'Ubuntu',
    description: 'OS Linux distro',
    src: 'ubuntu.svg',
  },
  {
    name: 'Node',
    description: 'Node JS',
    src: 'node.svg',
  },
]

export const other: ILogos[] = [
  {
    name: 'TypeScript',
    description: 'JavaScript superset',
    src: 'typescript.svg',
  },
  {
    name: 'JavaScript',
    description: "JavaScript is the world's most popular programming language",
    src: 'javascript.svg',
  },
  // {
  //   name: 'ESLint',
  //   description:
  //     'ESLint is a static code analysis tool for identifying problematic patterns found in JavaScript code',
  //   src: '/assets/eslint.svg',
  // },
  {
    name: 'git',
    description:
      'Git is a free and open source distributed version control system',
    src: 'git.svg',
  },
  {
    name: 'VSCode',
    description:
      'Visual Studio Code is a code editor redefined and optimized for building and debugging modern web and cloud applications.',
    src: 'vscode.svg',
  },
]
