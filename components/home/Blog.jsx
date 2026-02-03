'use client'

import { Calendar, ArrowRight } from 'lucide-react'
import Container from '@/components/ui/Container'
import Link from 'next/link'
import { blogs } from '@/data/blogs'

export default function Blog({ limit }) {
  const posts = limit ? blogs.slice(0, limit) : blogs

  return (
    <section id="blog" className="bg-white py-24">
      <Container>
        <div className="flex justify-between items-end gap-4 lg:!flex-nowrap flex-wrap mb-16">
          <div>
            <h2 className="text-5xl md:text-7xl font-serif-display mb-4">
              Design <span className="italic">Insights</span>
            </h2>
            <p className="text-xl text-gray-500 font-light">
              Thoughts on design, process, and the future of digital experiences
            </p>
          </div>
          <Link href="/blog" className="hidden md:flex items-center gap-2 text-black font-medium hover:gap-4 transition-all uppercase tracking-wider text-sm">
            View All Posts <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Link href={`/blog/${post.slug}`} key={index} className="group cursor-pointer block">
              <article>
                <div className="relative overflow-hidden rounded-none mb-6">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute top-4 left-4 bg-white text-black px-4 py-1 text-xs font-medium uppercase tracking-wider">
                    {post.category}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-xs text-gray-400 uppercase tracking-wider">
                    <div className="flex items-center gap-2">
                      {post.date}
                    </div>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-2xl font-serif-display group-hover:underline decoration-1 underline-offset-4 transition-all">
                    {post.title}
                  </h3>

                  <p className="text-gray-500 leading-relaxed font-light text-sm">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-black text-sm font-medium group-hover:gap-4 transition-all pt-2">
                    Read Article <ArrowRight size={16} />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12 md:hidden">
          <Link href="/blog" className="inline-block bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors">
            View All Posts
          </Link>
        </div>
      </Container>
    </section>
  )
}
