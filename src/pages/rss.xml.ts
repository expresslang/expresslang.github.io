import rss from '@astrojs/rss'
import { getList } from '@/lib/content'
import { siteData } from '@/data/site'

export async function GET(context) {
  const posts = getList('posts')
  return rss({
    title: `${siteData.title} — News`,
    description: siteData.description,
    site: context.site,
    items: posts.map((post) => ({
      title: post.title,
      description: post.excerpt,
      pubDate: post.date ? new Date(post.date) : undefined,
      link: `/blog/${post.slug}`,
    })),
    customData: '<language>en</language>',
  })
}
