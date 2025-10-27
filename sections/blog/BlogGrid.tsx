"use client"

import { motion } from 'framer-motion'
import { featuredPosts } from '@/lib/posts'
import Link from 'next/link'
import { HiArrowRight } from 'react-icons/hi2'

export function BlogGrid() {
  return (
    <section className="relative py-12">
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {featuredPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-white/20"
            >
              <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.25em]">
                <span className="text-aurora">{post.category}</span>
                <span className="text-slate-500">
                  {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </span>
              </div>
              <h3 className="mb-3 font-display text-xl text-white">{post.title}</h3>
              <p className="mb-6 text-sm leading-relaxed text-slate-300">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-white transition group-hover:gap-3"
              >
                Read Article <HiArrowRight className="transition-transform" />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
