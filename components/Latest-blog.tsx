'use client'

import { motion } from 'framer-motion'
import { Calendar, User } from 'lucide-react'
import { useState } from 'react'

interface BlogPost {
  date: string
  title: string
  description: string
  author: string
}

const blogPosts: BlogPost[] = [
  {
    date: 'Jun, Thu, 2023',
    title: 'New Angelsoft Solutions Website Launched!',
    description:
      'Angel Software Solutions was launched today. We are currently building the contents so please keep checking back for updates.',
    author: 'angelsoft',
  },
  {
    date: 'Feb, Fri, 2023',
    title: 'How to Optimize Your SEO Market',
    description:
      'Forbade panther desolately iguanodon alas in goodness goodness re-laid when wishful but yet and trim hey went.',
    author: 'angelsoft',
  },
  {
    date: 'Feb, Fri, 2023',
    title: 'Profitable business makes your profit',
    description:
      'Forbade panther desolately iguanodon alas in goodness goodness re-laid when wishful but yet and trim hey went.',
    author: 'angelsoft',
  },
]

function BlogCard({ post }: { post: BlogPost }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      className="h-[400px] cursor-pointer perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Side */}
        <div
          className="absolute w-full h-full bg-white p-8 rounded-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] flex flex-col backface-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="flex items-center gap-2 text-[#2c4a6f] mb-4">
            <Calendar className="w-4 h-4" />
            <span className="text-sm font-medium">{post.date}</span>
          </div>

          <h4 className="text-[#b8975a] text-xl font-bold mb-4 leading-tight">{post.title}</h4>

          <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">{post.description}</p>

          <div className="flex items-center gap-3 mt-auto">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
              <User className="w-6 h-6 text-gray-400 translate-y-1" />
            </div>
            <span className="text-[#b8975a] font-bold text-sm">{post.author}</span>
          </div>
        </div>

        {/* Back Side */}
        <div
          className="absolute w-full h-full bg-[#3b3420dc] p-8 rounded-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] flex flex-col text-white backface-hidden"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="w-4 h-4" />
            <span className="text-sm font-medium">{post.date}</span>
          </div>

          <h4 className="text-white text-xl font-bold mb-4 leading-tight">{post.title}</h4>

          <p className="text-white/90 text-sm leading-relaxed mb-8 flex-grow">{post.description}</p>

          <div className="flex items-center gap-3 mt-auto">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center overflow-hidden">
              <User className="w-6 h-6 text-white translate-y-1" />
            </div>
            <span className="text-white font-bold text-sm">{post.author}</span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function LatestBlog() {
  return (
    <section className="relative bg-[#f5f5f7] py-20 px-4 overflow-hidden">
      {/* Background Vertical Lines */}
      <div className="absolute inset-0 pointer-events-none flex justify-center">
        <div className="w-px h-full bg-gray-200/50 mx-[16.66%]"></div>
        <div className="w-px h-full bg-gray-200/50 mx-[16.66%]"></div>
        <div className="w-px h-full bg-gray-200/50 mx-[16.66%]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[#b8975a] text-5xl md:text-6xl font-bold mb-2">Read Our Latest</h2>
          <h3 className="text-[#2c4a6f] text-5xl md:text-6xl font-bold">Blog Posts</h3>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}
