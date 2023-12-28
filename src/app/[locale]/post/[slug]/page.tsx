'use client';
import './page.css';
import React, { useEffect } from 'react';
import Image from 'next/image';
import { Tag } from '@/components/Tag';

const Post = (): JSX.Element => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <header className='mx-auto max-w-[85%] xxl:max-w-[1224px] mb-14'>
        <h1 className='
          flex justify-start items-center
          mx-auto font-condensed
          mt-[89px] sm:mt-[113px] xxl:mt-[129px] mb-4
          font-bold capitalize text-black text-5xl leading-tight
          drop-shadow-sm
          max-w-[800px]
        '>
          The Magic of Closures in JavaScript for Beginners
        </h1>

        <div className='flex justify-between max-w-[800px] mx-auto mb-4'>
          <div className='text-label_color font-sans uppercase text-sm lg:text-base xl:text-l leading-normal font-bold'>
            <span className=''>dec 8</span>
            <span className='mx-2'>&middot;</span>
            <span>6 min read</span>
          </div>

          <div className='flex justify-between items-center gap-3'>
            <p className='text-label_color font-sans text-sm lg:text-base xl:text-l leading-normal font-bold'>Share:</p>

            <Image
              src='/assets/linkedin-icon.svg'
              width={25}
              height={25}
              alt='Linkedin logo'
              className=''
            />

            <Image
              src='/assets/email-icon.svg'
              width={25}
              height={25}
              alt='Email icon'
              className=''
            />

            <Image
              src='/assets/link-icon.svg'
              width={25}
              height={25}
              alt='Link icon'
              className=''
            />
          </div>
        </div>

        <div className='relative mx-auto max-w-[1224px] min-h-[500px]'>
          <Image
            src='/assets/closures.webp'
            alt='Developer in fron of computer'
            fill
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
            className='rounded-3xl'
          />
        </div>
      </header>

      <main className='
        mx-auto max-w-[85%] lg:max-w-[1224px] text-xl leading-normal mb-14 grid grid-cols-[800px_1fr] gap-16 px-7
      '>
        <div className='max-w-[800px]'>
          <p className='mb-4'>
            Closures are a very important part of JavaScript that every developer should know well.
            But, this topic often becomes a real challenge for beginners and can be difficult to
            understand. In this article, I want to explain closures in JavaScript in a very simple way.
          </p>

          <p className='mb-1'>To understand closures, you need to know three main concepts:</p>
          <ul className='mb-4 flex flex-col gap-1'>
            <li className='before-element flex items-center gap-2'>Scope</li>
            <li className='before-element flex items-center gap-2'>Lexical environment</li>
            <li className='before-element flex items-center gap-2'>The closure itself</li>
          </ul>

          <h2 className='mb-4 pt-2 text-3xl font-semibold capitalize text-black before:content-["✔️"] before:mr-1'>
            Scope
          </h2>

          <p className='mb-4'>
            <span className='font-bold italic'>Scope</span> is a part of code where you can use a variable,
            function, or object. In other words, it&apos;s the part of code where this item is &quot;seen&quot;.
          </p>

          <p className='mb-4'>
            Most of the time (let&apos;s pretend the
            {' '}
            <code className='code-style'>var</code>
            {' '}
            keyword doesn&apos;t exist), the scope is the code block inside curly brackets -
            {' '}
            <code className='code-style'>{'{...}'}</code>.
          </p>

          <p className='mb-4'>
            This isn&apos;t exactly right, but to keep it simple, we can say every function, and also code blocks like
            {' '}
            <code className="code-style">if</code>,
            {' '}
            <code className="code-style">for</code>,
            {' '}
            <code className="code-style">while</code>, etc. (when using
            {' '}
            <code className="code-style">let</code> or
            {' '}
            <code className="code-style">const</code> variables), makes a new local scope.
          </p>

          <p className='mb-1 italic'>In JavaScript, there are 2 main scopes:</p>
          <ol className='mb-4 flex flex-col gap-1 list-decimal pl-6'>
            <li className=''>
              <span className='font-bold'>Global Scope</span>{' '}
              - variables declared outside of functions or code blocks can be used anywhere in the code.
              They are global.
            </li>
            <li className=''>
              <span className='font-bold'>Local Scope</span>{' '}
              - as mentioned, variables inside a function (Function Scope) or code block (Block Scope) can only be used
              inside that block.
            </li>
          </ol>

          <p className='mb-1'>Let&apos;s look at an example.</p>
        </div>

        <div className='
          flex flex-wrap justify-start items-start gap-1 content-start
          text-label_color font-sans text-sm lg:text-base xl:text-xl font-normal
        '>
          <Tag
            tagName='javascript'
            color="#FCD34D"
          />
          <Tag
            tagName='beginners'
            color="#48BB78"
          />
          <Tag
            tagName='webdev'
            color="#6427FA"
          />
          <Tag
            tagName='programming'
            color="#FA7437"
          />
          {/* <Tag
            tagName='css'
            color="#4C51BF"
          />
          <Tag
            tagName='react'
            color="#FA4036"
          /> */}
          {/* <Tag
            tagName='typescript'
            color="#2FE5F7"
          />
          <Tag
            tagName='nextjs'
            color="#F43F5E"
          />
          <Tag
            tagName='interview'
            color="#D9C72E"
          />
          <Tag
            tagName='seo'
            color="#CF2FF7"
          />
          <Tag
            tagName='books'
            color="#FBBF24"
          />
          <Tag
            tagName='tutorial'
            color="#86D92E"
          />
          <Tag
            tagName='nodejs'
            color="#1E293B"
          /> */}
        </div>
      </main>
    </>
  );
};

export default Post;
