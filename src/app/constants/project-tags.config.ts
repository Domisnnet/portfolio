export type PillCategory =
  | 'frontend'
  | 'backend'
  | 'databases'
  | 'devops'
  | 'cms';

export interface StackPillData {
  label: string;
  iconPath: string;
  category: PillCategory;
}

export const STACK_CONFIG = {
  /* FRONTEND */
  angular: { label: 'Angular', iconPath: 'assets/icons/angular.svg', category: 'frontend' },
  bootstrap: { label: 'Bootstrap', iconPath: 'assets/icons/bootstrap.svg', category: 'frontend' },
  css3: { label: 'CSS3', iconPath: 'assets/icons/css3.svg', category: 'frontend' },
  cssAnimations: { label: 'CSS Animations', iconPath: 'assets/icons/css-animations.svg', category: 'frontend' },
  html5: { label: 'HTML5', iconPath: 'assets/icons/html5.svg', category: 'frontend' },
  javascript: { label: 'JavaScript', iconPath: 'assets/icons/javascript.svg', category: 'frontend' },
  motions: { label: 'Motions', iconPath: 'assets/icons/motions.svg', category: 'frontend' },
  react: { label: 'React', iconPath: 'assets/icons/react.svg', category: 'frontend' },
  sass: { label: 'Sass', iconPath: 'assets/icons/sass.svg', category: 'frontend' },
  scss: { label: 'SCSS', iconPath: 'assets/icons/scss.svg', category: 'frontend' },
  spa: { label: 'SPA', iconPath: 'assets/icons/spa.svg', category: 'frontend' },
  svg: { label: 'SVG', iconPath: 'assets/icons/svg.svg', category: 'frontend' },
  tailwind: { label: 'Tailwind', iconPath: 'assets/icons/tailwind.svg', category: 'frontend' },
  vue: { label: 'Vue.js', iconPath: 'assets/icons/vue-js.svg', category: 'frontend' },

  /* BACKEND */
  api: { label: 'API', iconPath: 'assets/icons/api.svg', category: 'backend' },
  architecture: { label: 'Architecture', iconPath: 'assets/icons/architecture.svg', category: 'backend' },
  express: { label: 'Express', iconPath: 'assets/icons/express.svg', category: 'backend' },
  firebase: { label: 'Firebase', iconPath: 'assets/icons/firebase.svg', category: 'backend' },
  gameLogic: { label: 'Game Logic', iconPath: 'assets/icons/game-logic.svg', category: 'backend' },
  node: { label: 'Node.js', iconPath: 'assets/icons/node-js.svg', category: 'backend' },
  python: { label: 'Python', iconPath: 'assets/icons/python.svg', category: 'backend' },

  /* DATABASES */
  mongodb: { label: 'MongoDB', iconPath: 'assets/icons/mongodb.svg', category: 'databases' },
  mysql: { label: 'MySQL', iconPath: 'assets/icons/mysql.svg', category: 'databases' },

  /* DEVOPS */
  automation: { label: 'Automation', iconPath: 'assets/icons/automation.svg', category: 'devops' },
  github: { label: 'GitHub', iconPath: 'assets/icons/github.svg', category: 'devops' },
  npm: { label: 'NPM', iconPath: 'assets/icons/npm.svg', category: 'devops' },
  vercel: { label: 'Vercel', iconPath: 'assets/icons/vercel.svg', category: 'devops' },
  vscode: { label: 'VSCode', iconPath: 'assets/icons/vscode.svg', category: 'devops' },

  /* CMS */
  wordpress: { label: 'WordPress', iconPath: 'assets/icons/wordpress.svg', category: 'cms' },

  /* CONCEITUAL */
  design: { label: 'Design', iconPath: 'assets/icons/design.svg', category: 'frontend' },
  product: { label: 'Product', iconPath: 'assets/icons/product.svg', category: 'frontend' },
  ui: { label: 'UI', iconPath: 'assets/icons/ui.svg', category: 'frontend' },
  ux: { label: 'UX', iconPath: 'assets/icons/ux.svg', category: 'frontend' },
} as const;

export type TagKey = keyof typeof STACK_CONFIG;