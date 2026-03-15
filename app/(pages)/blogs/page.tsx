'use client';

import Image from 'next/image'
import React from 'react'
import { ArrowUpRightIcon } from '@phosphor-icons/react'
import SectionContainer from '@/components/SectionContainer'
import SectionHeader from '@/components/SectionHeader'

type BlogCardProps = {
  imageSrc: string
  category: string
  readTime: string
  title: string
  description: string
}

const BLOGS: BlogCardProps[] = [
  {
    imageSrc: '/Portrait.png',
    category: 'TECHNOLOGY',
    readTime: '5 min read',
    title: 'My AI Setup for 2026',
    description:
      'Posting about 2026 setup and tech stack and knowing how to use the tools and technologies to build a website.',
  },
  {
    imageSrc: '/Portrait3.png',
    category: 'Travel',
    readTime: '5 min read',
    title: 'Exploring New Delhi',
    description:
      'Posting about 2026 setup and tech stack and knowing how to use the tools and technologies to build a website.',
  },
  {
    imageSrc: '/Portrait2.png',
    category: 'LIFESTYLE',
    readTime: '5 min read',
    title: 'Remote Work Life',
    description:
      'Posting about 2026 setup and tech stack and knowing how to use the tools and technologies to build a website.',
  },
]

const BlogCard = ({ imageSrc, category, readTime, title, description }: BlogCardProps) => {
  return (
    <div className='w-full max-w-[460px] group cursor-pointer'>
      <div className='relative overflow-hidden h-[500px]'>
        <Image
          src={imageSrc}
          alt={title}
          width={500}
          height={500}
          className='w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105'
        />
        <div className='absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-out' />
        <div className='absolute bottom-4 right-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 ease-out'>
          <ArrowUpRightIcon size={100} color='white' weight='thin' />
        </div>
      </div>
      <div className='flex justify-between items-center mt-6'>
        <p className='text-xl tracking-wide leading-normal uppercase font-medium'>{category}</p>
        <p className='text-sm tracking-wide leading-normal uppercase text-foreground-muted'>{readTime}</p>
      </div>
      <h2 className='text-4xl tracking-tight mt-4 leading-normal font-medium'>{title}</h2>
      <p className='text-md tracking-wide mt-6 leading-relaxed text-justify'>{description}</p>
    </div>
  )
}

const Blogs = () => {
  return (
    <SectionContainer className='mt-5!'>
        <SectionHeader title='Blogs' number='006' numberFirst={false} />
        <div className='mt-20 max-lg:mt-12 pb-40'>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-20 gap-x-8'>
              {BLOGS.map((blog) => (
                <BlogCard
                  key={`${blog.imageSrc}-${blog.title}`}
                  imageSrc={blog.imageSrc}
                  category={blog.category}
                  readTime={blog.readTime}
                  title={blog.title}
                  description={blog.description}
                />
              ))}
            </div>
        </div>
    </SectionContainer>
  )
}

export default Blogs