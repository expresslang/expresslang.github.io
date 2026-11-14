/// <reference types="astro/client" />

declare module '*.yaml' {
  const value: unknown
  export default value
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<Record<string, unknown>, Record<string, unknown>, unknown>
  export default component
}

// Build-time map rendering (src/pages/members.astro): d3-geo and topojson-client
// ship no types, and the world-atlas TopoJSON is a very large JSON literal —
// declare them loosely; all projection output is baked into static SVG strings.
declare module 'd3-geo' {
  export function geoNaturalEarth1(): { fitExtent(extent: number[][] | ((o: unknown) => number[][]), object: unknown): unknown }
  export function geoPath(projection?: unknown): (feature: unknown) => string
}

declare module 'topojson-client' {
  export function feature(topology: unknown, object: unknown): { type: 'FeatureCollection'; features: Array<{ id?: string | number }> }
}

declare module 'world-atlas/countries-110m.json' {
  const value: { objects: { countries: unknown } }
  export default value
}
