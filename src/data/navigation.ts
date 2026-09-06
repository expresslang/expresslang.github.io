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
      { title: 'Supporters', path: '/supporters' },
      { title: 'Membership', path: '/membership' },
    ],
  },
]
