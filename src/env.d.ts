/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<Record<string, unknown>, Record<string, unknown>, unknown>
  export default component
}

declare module 'vite-ssg' {
  import type { DefineComponent } from 'vue'
  import type { RouterOptions } from 'vue-router'

  export function ViteSSG(
    App: DefineComponent,
    routerOptions: { routes: RouterOptions['routes'] },
    callback?: (context: { app: any; router: any; routes: any }) => void,
  ): { createApp: () => Promise<any> }
}
