# Phase 3: Layout + Navigation Components

## Goal
Build all reusable layout and UI components with the New York/Tokyo design aesthetic.

## Design Principles
- Clean lines, generous whitespace, monospace accents
- Subtle fade-in animations (200ms), no bounce/parallax
- Glass-morphism header with backdrop blur
- Dark/light mode with `.dark` class on `<html>`

## Tasks

### TheHeader.vue
- [ ] Logo: inline SVG from brand repo (`symbol.svg` + `logo-text.svg`)
- [ ] Desktop navigation: Languages, Learn, Course, Standards, References, Membership, Blog
- [ ] Dark mode toggle (sun/moon icon)
- [ ] Mobile hamburger menu (slides in from right)
- [ ] Sticky header with `backdrop-blur-md` + `bg-white/80 dark:bg-navy/80`
- [ ] Active route highlighting (underline or dot indicator)
- [ ] Logo variant switching: blue for light mode, white for dark mode

### TheFooter.vue
- [ ] Organization name + copyright
- [ ] Footer links: About, Membership, Privacy, Terms of Service
- [ ] GitHub link icon
- [ ] "EXPRESS Language Foundation" tagline

### TheSidebar.vue (used by Learn and Course sections)
- [ ] Hierarchical navigation from `src/data/navigation.ts`
- [ ] Collapsible nested sections
- [ ] Active item highlighting (left border accent)
- [ ] Responsive: full sidebar on desktop (>=1024px), collapsible drawer on mobile
- [ ] Smooth expand/collapse transitions

### MobileNav.vue
- [ ] Full-screen overlay navigation
- [ ] Animated slide-in from right
- [ ] All nav items + dark mode toggle
- [ ] Close on route change or outside click

### BaseButton.vue
- [ ] Variants: primary (blue), secondary (outline), ghost
- [ ] Sizes: sm, md, lg
- [ ] Hover/focus states with 150ms transition
- [ ] Disabled state

### BaseCard.vue
- [ ] Hover lift effect (`transform: translateY(-2px)`)
- [ ] Dark mode support
- [ ] Optional image slot, title slot, body slot

### DarkModeToggle.vue
- [ ] Sun/moon icon toggle
- [ ] Persists preference in `localStorage`
- [ ] Respects `prefers-color-scheme`
- [ ] Smooth icon transition

### AnimatedSection.vue
- [ ] IntersectionObserver-based fade-in on scroll
- [ ] 200ms transition, subtle translateY(8px) → 0
- [ ] Respects `prefers-reduced-motion`

### Data files
- [ ] `src/data/navigation.ts` — site nav links
- [ ] `src/data/site.ts` — site metadata (title, description, social links)
- [ ] `src/data/learn-navigation.ts` — learn sidebar nav structure
- [ ] `src/data/course-navigation.ts` — course sidebar nav structure

### Composables
- [ ] `src/composables/useTheme.ts` — dark/light mode toggle logic
- [ ] `src/composables/useContent.ts` — fetch JSON content by section + slug

## Verification
- Header renders with logo, nav items, dark mode toggle
- Dark mode toggles correctly, persists across page reloads
- Sidebar renders with correct navigation hierarchy
- Mobile menu opens/closes smoothly
- All components render correctly in both light and dark modes
