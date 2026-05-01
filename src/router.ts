import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/pages/index.vue'),
    meta: { title: '', description: 'The international organization for the EXPRESS language family — information modelling languages powering smart manufacturing since 1982.' },
  },
  {
    path: '/about',
    component: () => import('@/pages/about.vue'),
    meta: { title: 'About', description: 'The EXPRESS Language Foundation facilitates education, standardization, research, and promotion of the EXPRESS language family.' },
  },
  {
    path: '/membership',
    component: () => import('@/pages/membership.vue'),
    meta: { title: 'Membership' },
  },
  {
    path: '/references',
    redirect: '/standards',
  },
  {
    path: '/privacy',
    component: () => import('@/pages/privacy.vue'),
    meta: { title: 'Privacy Policy' },
  },
  {
    path: '/tos',
    component: () => import('@/pages/tos.vue'),
    meta: { title: 'Terms of Service' },
  },
  {
    path: '/standards',
    component: () => import('@/pages/standards/index.vue'),
    meta: { title: 'Standards & References', description: 'ISO 10303 standards, BNF grammar references, and key publications for the EXPRESS language family.' },
  },
  {
    path: '/languages',
    component: () => import('@/pages/languages/index.vue'),
    meta: { title: 'Languages', description: 'The EXPRESS language family: EXPRESS, EXPRESS-G, EXPRESS-I, EXPRESS-X, EXPRESS-Q.' },
  },
  {
    path: '/languages/:slug',
    component: () => import('@/pages/languages/[slug].vue'),
    meta: { title: 'Language' },
  },
  {
    path: '/leadership',
    component: () => import('@/pages/leadership/index.vue'),
    meta: { title: 'Leadership', description: 'The leadership and founders of the EXPRESS Language Foundation.' },
  },
  {
    path: '/people/:slug',
    component: () => import('@/pages/people/[slug].vue'),
    meta: { title: 'People' },
  },
  {
    path: '/blog',
    component: () => import('@/pages/blog/index.vue'),
    meta: { title: 'Blog', description: 'News and updates from the EXPRESS Language Foundation.' },
  },
  {
    path: '/blog/:slug',
    component: () => import('@/pages/blog/[slug].vue'),
    meta: { title: 'Blog' },
  },
  {
    path: '/learn',
    component: () => import('@/pages/learn/index.vue'),
    meta: { title: 'Learn EXPRESS', description: 'Courses and tutorials for the EXPRESS language family — from introductory theory to practical toolchain training.' },
  },
  {
    path: '/learn/tutorial/:slug',
    component: () => import('@/pages/learn/tutorial/[slug].vue'),
    meta: { title: 'Tutorial' },
  },
  {
    path: '/learn/jotne-express/:slug',
    component: () => import('@/pages/learn/jotne-express/[slug].vue'),
    meta: { title: 'EXPRESS & STEP in Practice' },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/pages/404.vue'),
    meta: { title: 'Page Not Found' },
  },
]
