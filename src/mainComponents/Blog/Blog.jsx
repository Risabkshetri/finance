import React from 'react'
import BlogCard from './BlogCard'
import { Navbar, Footer } from '../index'
import Blog1 from '../../assets/Blog1.png'
import Blog2 from '../../assets/Blog2.png'
import Blog3 from '../../assets/Blog3.png'

const blogs = [
  {
    id: 1,
    title: 'AI-Powered Writing Assistants: Make Your Writing Easier Every Day',
    meta: 'AI-Powered Writing Assistants: Skyrocket Quality, Eliminate Errors In today’s fast-moving digital world, where we are bombarded with information...',
    imageUrl: Blog1,
    url: 'https://kshetriai.com/ai-powered-writing-assistants/'
  },
  {
    id: 2,
    title: 'Integrating AI with React: A Step-by-Step Guide',
    meta: 'Integrating AI with React: A Step-by-Step Guide When I first stumbled upon the idea of integrating AI with React, I was both excited and scared. Having worked with React...',
    imageUrl: Blog2,
    url: 'https://kshetriai.com/ai-with-react/'
  },
  {
    id: 3,
    title: 'Quantum computing and AI impacts & Possibilities',
    meta: 'Quantum Computing and AI Impacts & Possibilities Imagine a world wherein computers can instantly solve seemingly insurmountable puzzles. Imagine AI that develops ...',
    imageUrl:Blog3,
    url: 'https://kshetriai.com/quantum-computing-and-ai-impacts-possibilities/'
  }
]

function Blog() {
  return (
    <>
     <Navbar />
      <main className="flex-grow bg-gray-100 py-12">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <h1 className="text-3xl font-bold text-center mb-8">Our Blog</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <BlogCard 
                key={blog.id} 
                blog={blog}
              />
            ))}
          </div>
        </div>
      </main>
   <Footer />
    </>
  )
}

export default Blog