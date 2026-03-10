'use client';

import Image from 'next/image'
import React from 'react'
import { ArrowUpRightIcon } from '@phosphor-icons/react'

const Blogs = () => {
  return (
    <div className='w-[1600px] mx-auto mt-10'>
        <h1 className='text-[10rem] tracking-tighter border-b border-foreground-muted/40'>Blogs</h1>
        <div className='mt-20'>
            <div className='grid grid-cols-3 justify-items-center gap-y-20'>

                    <div className='w-[460px] group cursor-pointer'>
                        <div className='relative overflow-hidden h-[500px]'>
                            <Image src='/Portrait.png' alt='Blog 1' width={500} height={500} className='w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105' />
                            <div className='absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-out' />
                            <div className='absolute bottom-4 right-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 ease-out'>
                                <ArrowUpRightIcon size={100} color='white' weight='thin' />
                            </div>
                        </div>
                        <div className='flex justify-between items-center mt-6'>
                            <p className='text-xl tracking-wide leading-normal uppercase'>UI/UX Design</p>
                            <p className='text-sm tracking-wide  leading-normal uppercase text-foreground-muted'>5 min read</p>
                        </div>
                        <h2 className='text-4xl tracking-tight mt-4 w-md leading-normal'>Travelling in winters.</h2>
                        <p className='text-md tracking-wide mt-6 w-md leading-relaxed text-justify'>
                            Posting about 2026 setup and tech stack and knowing how to use the tools and technologies to build a website.
                        </p>
                    </div>

                    <div className='w-[460px] group cursor-pointer'>
                        <div className='relative overflow-hidden h-[500px]'>
                            <Image src='/Portrait3.png' alt='Blog 1' width={500} height={500} className='w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105' />
                            <div className='absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-out' />
                            <div className='absolute bottom-4 right-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 ease-out'>
                                <ArrowUpRightIcon size={100} color='white' weight='thin' />
                            </div>
                        </div>
                        <div className='flex justify-between items-center mt-6'>
                            <p className='text-xl tracking-wide leading-normal uppercase'>UI/UX Design</p>
                            <p className='text-sm tracking-wide  leading-normal uppercase text-foreground-muted'>5 min read</p>
                        </div>
                        <h2 className='text-4xl tracking-tight mt-4 w-xl leading-normal'>JavaScript and React</h2>
                        <p className='text-md tracking-wide mt-6 w-md leading-relaxed text-justify'>
                            Posting about 2026 setup and tech stack and knowing how to use the tools and technologies to build a website.
                        </p>
                    </div>

                    <div className='w-[460px] group cursor-pointer'>
                    <div className='relative overflow-hidden h-[500px]'>
                            <Image src='/Portrait2.png' alt='Blog 1' width={500} height={500} className='w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105' />
                            <div className='absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-out uppercase' />
                            <div className='absolute bottom-4 right-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 ease-out'>
                                <ArrowUpRightIcon size={100} color='white' weight='thin' />
                            </div>
                        </div>
                        <div className='flex justify-between items-center mt-6'>
                            <p className='text-xl tracking-wide leading-normal uppercase'>UI/UX Design</p>
                            <p className='text-sm tracking-wide  leading-normal uppercase text-foreground-muted'>5 min read</p>
                        </div>
                        <h2 className='text-4xl tracking-tight mt-4 w-xl leading-normal'>JavaScript and React</h2>
                        <p className='text-md tracking-wide mt-6 w-md leading-relaxed text-justify'>
                            Posting about 2026 setup and tech stack and knowing how to use the tools and technologies to build a website.
                        </p>
                    </div>

                    <div className='w-[460px] group cursor-pointer'>
                    <div className='relative overflow-hidden h-[500px]'>
                            <Image src='/Portrait3.png' alt='Blog 1' width={500} height={500} className='w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105' />
                            <div className='absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-out' />
                            <div className='absolute bottom-4 right-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 ease-out'>
                                <ArrowUpRightIcon size={100} color='white' weight='thin' />
                            </div>
                        </div>
                        <div className='flex justify-between items-center mt-6'>
                            <p className='text-xl tracking-wide leading-normal uppercase'>UI/UX Design</p>
                            <p className='text-sm tracking-wide  leading-normal uppercase text-foreground-muted'>5 min read</p>
                        </div>
                        <h2 className='text-4xl tracking-tight mt-4 w-xl leading-normal'>JavaScript and React</h2>
                        <p className='text-md tracking-wide mt-6 w-md leading-relaxed text-justify'>
                            Posting about 2026 setup and tech stack and knowing how to use the tools and technologies to build a website.
                        </p>
                    </div>

            </div>
        </div>
    </div>
  )
}

export default Blogs