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
      { title: 'Governance', path: '/governance' },
      { title: 'Technical Committees', path: '/technical-committees' },
      { title: 'Members', path: '/members' },
      { title: 'Membership', path: '/membership' },
      { title: 'Leadership', path: '/leadership' },
    ],
  },
]
