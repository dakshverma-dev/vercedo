import type { Metadata } from 'next'
import { featuredPosts } from '@/lib/posts'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return featuredPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = featuredPosts.find((p) => p.slug === params.slug)
  if (!post) return {}
  return { title: post.title, description: post.excerpt }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = featuredPosts.find((p) => p.slug === params.slug)
  if (!post) notFound()

  return (
    <div className="bg-obsidian pb-20 pt-40">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-8 text-center">
          <p className="mb-2 text-xs uppercase tracking-[0.3em] text-aurora">{post.category}</p>
          <h1 className="mb-4 font-display text-5xl font-bold text-white">{post.title}</h1>
          <p className="text-slate-400">{new Date(post.publishedAt).toLocaleDateString('en-US', { dateStyle: 'long' })}</p>
        </div>
        <div className="prose prose-invert max-w-none rounded-3xl border border-white/10 bg-white/5 p-10 leading-relaxed backdrop-blur-xl">
          <p className="text-lg text-slate-300">{post.excerpt}</p>
          <p className="mt-6 text-slate-300">
            This is a placeholder for blog content. In production, integrate with a headless CMS (e.g., Contentful,
            Sanity) or use Markdown files with gray-matter and MDX.
          </p>
        </div>
      </div>
    </div>
  )
}
