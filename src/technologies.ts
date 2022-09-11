// export type TCategoryTypes = typeof category[number]

// export const category = ['Backend', 'Frontend', 'DevOps', 'Utilities'] as const

export interface ILogos {
  name: string
  description: string
  src: string
}

export const frontend: ILogos[] = [
  {
    name: 'Quasar',
    description: 'Amazing layer on top of Vue',
    src: 'src/assets/quasar.svg',
  },
  {
    name: 'Vue',
    description: 'Vue 3 JS Framework',
    src: 'src/assets/vue.svg',
  },
  {
    name: 'Vite',
    description: 'Vite is a no bundler DEV environment for Vue.js',
    src: 'src/assets/vite.svg',
  },
  {
    name: 'Pinia',
    description: 'Vue 3 Store',
    src: 'src/assets/pinia.svg',
  },
]

export const backend: ILogos[] = [
  {
    name: 'Parse',
    description: 'Backend',
    src: 'src/assets/parse.svg',
  },
  {
    name: 'PostgreSQL',
    description: 'Open source SQL database',
    src: 'src/assets/postgres.svg',
  },
  {
    name: 'AWS',
    description: 'Amazon Web Services',
    src: 'src/assets/aws.svg',
  },
  {
    name: 'Ubuntu',
    description: 'OS Linux distro',
    src: 'src/assets/ubuntu.svg',
  },
  {
    name: 'Node',
    description: 'Node JS',
    src: 'src/assets/node.svg',
  },
]

export const other: ILogos[] = [
  {
    name: 'TypeScript',
    description: 'JavaScript superset',
    src: 'src/assets/typescript.svg',
  },
  {
    name: 'JavaScript',
    description: "JavaScript is the world's most popular programming language",
    src: 'src/assets/javascript.svg',
  },
  {
    name: 'ESLint',
    description:
      'ESLint is a static code analysis tool for identifying problematic patterns found in JavaScript code',
    src: 'src/assets/eslint.svg',
  },
  {
    name: 'git',
    description:
      'Git is a free and open source distributed version control system',
    src: 'src/assets/git.svg',
  },
  {
    name: 'VSCode',
    description:
      'Visual Studio Code is a code editor redefined and optimized for building and debugging modern web and cloud applications.',
    src: 'src/assets/vscode.svg',
  },
]
