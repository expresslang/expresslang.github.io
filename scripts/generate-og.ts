import { readFileSync, writeFileSync } from 'node:fs'
import satori from 'satori'
import { Resvg } from '@resvg/resvg-js'

const font = readFileSync('/tmp/JetBrainsMono-Bold.ttf')

const line = (text: string, size: number, color: string, spacing = '0em') => ({
  type: 'div',
  props: {
    style: { fontSize: `${size}px`, color, letterSpacing: spacing, display: 'flex' },
    children: text,
  },
})

const svg = await satori(
  {
    type: 'div',
    props: {
      style: {
        width: '1200px',
        height: '630px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        gap: '44px',
        padding: '64px 72px',
        background: 'linear-gradient(135deg, #2d5fa3 0%, #3d7cc9 55%, #5b95d6 100%)',
        color: 'white',
        fontFamily: 'JetBrains Mono',
      },
      children: [
        {
          type: 'div',
          props: {
            style: { display: 'flex', flexDirection: 'column', gap: '20px' },
            children: [
              line('EXPRESS LANGUAGE FOUNDATION', 24, '#cfe2f7', '0.3em'),
              line("Don't panic, EXPRESS.", 72, '#ffffff'),
            ],
          },
        },
        line('International standards for information modelling, abstract languages', 24, '#e3eefb'),
        line('and data management.', 24, '#e3eefb'),
        line('expresslang.org', 19, '#9fc3ec'),
      ],
    },
  },
  { width: 1200, height: 630, fonts: [{ name: 'JetBrains Mono', data: font, weight: 700, style: 'normal' }] },
)

const png = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } }).render().asPng()
writeFileSync('public/og-default.png', png)
console.log('wrote public/og-default.png', png.length, 'bytes')
