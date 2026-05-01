export interface NavItem {
  title: string
  slug?: string
  path?: string
  children?: NavItem[]
}

export const mainNavigation: NavItem[] = [
  { title: 'Languages', path: '/languages' },
  { title: 'Learn', path: '/learn' },
  { title: 'Standards', path: '/standards' },
  { title: 'Blog', path: '/blog' },
  {
    title: 'About',
    path: '/about',
    children: [
      { title: 'About ELF', path: '/about' },
      { title: 'Leadership', path: '/leadership' },
      { title: 'Membership', path: '/membership' },
    ],
  },
]

export const learnNavigation: NavItem[] = [
  { title: 'What is Information Modelling?', slug: 'express-01-what-is-information' },
  { title: 'Background on EXPRESS', slug: 'express-02-background' },
  { title: 'The EXPRESS Language and STEP', slug: 'express-03-step-overview' },
  { title: 'Basic EXPRESS Syntax', slug: 'express-04-basic-syntax' },
  { title: 'Introduction to EXPRESS-G', slug: 'express-g' },
  { title: 'Modelling best practices', slug: 'modelling-best-practices' },
  { title: 'Extensibles and Relationships', slug: 'express-advanced-01-extensibles' },
  { title: 'Subtypes and Supertypes', slug: 'express-advanced-02-subtyping' },
  { title: 'Global Constraints and Schemas', slug: 'express-advanced-03-global-constraints' },
  { title: 'Rule Principles', slug: 'express-rules-01-principles' },
  { title: 'Local and Global Rules', slug: 'express-rules-02-local-global' },
  { title: 'Recursion in EXPRESS', slug: 'express-rules-03-recursion' },
  { title: 'Built-in Functions for Rules', slug: 'express-rules-04-builtins' },
  { title: 'Modelling exercises', slug: 'modelling-exercises' },
  { title: 'Answers to exercises', slug: 'modelling-answers' },
  { title: 'EXPRESS — Cars', slug: 'example-exp-cars' },
  { title: 'EXPRESS-G — Cars', slug: 'example-expg-cars' },
  { title: 'EXPRESS — Car registration', slug: 'example-model-carreg' },
]

export const courseNavigation: NavItem[] = [
  { title: 'Introduction to ISO 10303', slug: '01-intro-iso-10303' },
  { title: 'The EXPRESS Language', slug: '02-express-language' },
  { title: 'EXPRESS Edition 2', slug: '02a-express-edition2' },
  { title: 'EXPRESS Data Management', slug: '03-express-data-management' },
  { title: 'EXPRESS-G Visualization', slug: '04-express-g-visualization' },
  { title: 'EXPRESS-G in Practice', slug: '05-express-g-practice' },
  { title: 'The EXPRESS-X Language', slug: '06-express-x' },
  { title: 'Validation and Execution', slug: '07-validation-execution' },
  { title: 'STEP Part 21 File Format', slug: '08-step-p21' },
  { title: 'STEP Part 28 XML Format', slug: '09-step-p28-xml' },
  { title: 'Querying EXPRESS Data', slug: '10-querying-express' },
  { title: 'Business Rules in EXPRESS', slug: '11-business-rules' },
  { title: 'SDAI and Data Access', slug: '12-sdai-data-access' },
  { title: 'Programming with SDAI', slug: '13-programming-sdai' },
  { title: 'Introduction to PLCS', slug: '14-intro-plcs' },
]
