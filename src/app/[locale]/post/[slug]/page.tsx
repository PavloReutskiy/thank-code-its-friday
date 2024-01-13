'use client';
import './page.css';
import 'highlight.js/styles/ir-black.css';
import React, { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import { BackToTopButton } from '@/components/BackToTopButton';
import { Tag } from '@/components/Tag';
import { toast } from 'react-toastify';
import { LinkedinShareButton, EmailShareButton } from 'next-share';

hljs.registerLanguage('javascript', javascript);

const codeString = `// Global variable, accessible anywhere in the code
const playerHealth = 100;

const monsterAttack = function() {
  // Local variable, accessible only inside the function
  const damageFormMonster = 20;

  /* Since playerHealth is in the global scope, we can use it
  inside the function */
  playerHealth -= amageFormMonster;
}

// "Health before the attack: 100"
console.log("Health before the attack: " + playerHealth);

monsterAttack();

// "Health after attack: 80"
console.log("Health after attack: " + playerHealth);

/* There will be an error in the console because the variable
damageFromMonster is not accessible outside the function */
console.log("Damage from the monster: " + damageFromMonster);
`;

const codeString1 = `{
  parentScope: null,
  variables: { playerHealth: 100, monsterAttack: function },
}
`;

const codeString2 = `{
  parentScope: { playerHealth: 100, monsterAttack: function },
  variables: { damageFromMonster: 20 },
}
`;

const Post = (): JSX.Element => {
  const [copied, setCopied] = useState(false);
  const [locoScroll, setLocoScroll] = useState<LocomotiveScroll | null>(null);
  const sideRef = useRef(null);
  const pathname = usePathname();
  const baseUrl = process.env.NEXT_PUBLIC_DOMAIN;
  const fullUrl = `${baseUrl}${pathname}`;

  const handleCodeCopy = async():Promise<void> => {
    try {
      await navigator.clipboard.writeText(codeString);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast.error(`Copy failed: ${error}`);
    }
  };

  const handleURLCopy = async():Promise<void> => {
    try {
      await navigator.clipboard.writeText(fullUrl);
      toast.success('Copied to Clipboard!');
    } catch (error) {
      toast.error(`Copy failed: ${error}`);
    }
  };

  useEffect(() => {
    let lastScrollTop = 0;
    const stickyElement = sideRef.current;

    const handleScroll = (): void => {
      const position = window.scrollY;

      if (position > lastScrollTop) {
        gsap.to(stickyElement, {
          top: '10px',
          duration: 0.5,
          delay: 0.3,
        });
      } else if (position < lastScrollTop) {
        gsap.to(stickyElement, {
          top: '110px',
          duration: 0.5,
          delay: 0.3,
        });
      }

      lastScrollTop = position <= 0 ? 0 : position;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    (
      async(): Promise<void> => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const scroll = new LocomotiveScroll();
        setLocoScroll(scroll);
      }
    )();
  }, []);

  const scrollToSection = (id: string): void => {
    if (locoScroll) {
      locoScroll.scrollTo(id, {
        duration: 2.5,
        offset: -90,
      });
    } else {
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <>
      <header className='mx-auto max-w-[85%] xxl:max-w-[1224px] mb-8 lg:mb-11 xl:mb-14'>
        <h1 className='
          flex justify-start items-center
          lg:mx-auto font-condensed
          mt-[89px] sm:mt-[113px] lg:mt-[129px] mb-5
          font-bold capitalize text-black text-[28px] leading-tight sm:text-3xl md:text-4xl lg:text-5xl lg:leading-tight
          drop-shadow-sm
          max-w-[430px] md:max-w-[530px] lg:max-w-[800px]
        '>
          The Magic of Closures in JavaScript for Beginners
        </h1>

        <div className='flex justify-between items-center max-w-[800px] mx-auto mb-4'>
          <div className='text-label_color font-sans uppercase text-sm lg:text-base xl:text-l leading-normal font-bold'>
            <span className=''>dec 8</span>
            <span className='mx-2'>&middot;</span>
            <span>6 min read</span>
          </div>

          <div className='flex justify-between items-center gap-3'>
            <p className='text-label_color font-sans text-sm lg:text-base xl:text-l leading-normal font-bold'>Share:</p>

            <LinkedinShareButton url={`${fullUrl}}`}>
              <button type='button' className='flex justify-between items-center'>
                <Image
                  src='/assets/linkedin-icon.svg'
                  width={25}
                  height={25}
                  alt='Linkedin logo'
                  className=''
                />
              </button>
            </LinkedinShareButton>

            {/* <Link
              role='button'
              href={`mailto:?subject=${
                encodeURIComponent('The Magic of Closures in JavaScript for Beginners')
              }&body=${
                encodeURIComponent('Check out this article: ') +
                encodeURIComponent(fullUrl)}`}>
              <Image
                src='/assets/email-icon.svg'
                width={25}
                height={25}
                alt='Email icon'
                className=''
              />
            </Link> */}
            <EmailShareButton
              url={fullUrl}
              subject={'The Magic of Closures in JavaScript for Beginners'}
              body='Check out this article: '
            >
              <button type='button' className='flex justify-between items-center'>
                <Image
                  src='/assets/email-icon.svg'
                  width={25}
                  height={25}
                  alt='Email icon'
                  className=''
                />
              </button>
            </EmailShareButton>

            <button
              type='button'
              onClick={handleURLCopy}
              className='flex justify-between items-center'
            >
              <Image
                src='/assets/link-icon.svg'
                width={25}
                height={25}
                alt='Link icon'
                className=''
              />
            </button>
          </div>
        </div>

        <div className='
          relative mx-auto max-w-[1224px]
          min-h-[225px] sm:min-h-[275px] md:min-h-[350px] lg:min-h-[400px] xl:min-h-[500px]
        '>
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
        mx-auto max-w-[85%] xxl:max-w-[1224px] px-1 sm:px-3
        text-lg md:text-xl leading-normal mb-14
        grid grid-cols-1 xl:grid-cols-[1fr_0.4fr] justify-between gap-10
      '>
        <div className='max-w-[800px] order-2 xl:order-1'>
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

          <h2
            id='scope'
            className='
              mb-4 pt-2 font-semibold capitalize text-black before:content-["✔️"] before:mr-1
              text-2xl md:text-3xl
            '>
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

          <p className='mb-4'>Let&apos;s look at an example.</p>

          <div className='mb-4'>
            <div className='flex justify-between bg-[#504e4e] rounded-tl-2xl rounded-tr-2xl px-5 py-2'>
              <p className='text-xs text-gray-100 font-normal'>javascript</p>
              <button
                type='button'
                className='text-xs text-gray-100 font-normal'
                onClick={handleCodeCopy}
              >
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            <pre className='text-base'>
              <code className="language-js rounded-bl-2xl rounded-br-2xl">
                {codeString}
              </code>
            </pre>
          </div>

          <p className='mb-4'>
            As we can see, the <code className="code-style">playerHealth</code> variable is in the global scope,
            so we can use it both globally and inside a function.
            But the <code className="code-style">damageFromMonster</code> variable was declared inside a function,
            which means it&apos;s within a local scope. That&apos;s why, when we try to access it outside the
            function, we get an error.
          </p>

          <p className='mb-4'>
            This example also shows that different scopes can interact with each other.
            Furthermore, local scopes have access to variables from the outer scope.
            And this leads us to the concept of &quot;lexical environment&quot;.
          </p>

          <h2
            id='environment'
            className='
              mb-4 pt-2 text-2xl md:text-3xl font-semibold capitalize text-black before:content-["✔️"] before:mr-1
          '>
            Lexical environment
          </h2>

          <p className='mb-4'>
            The <span className='font-bold italic'>Lexical environment</span> is a data structure that stores
            information about variables, functions, and other objects in the current execution context.
            It&apos;s an invisible object that exists for every block of code or function in JavaScript.
            It only exists in the computer&apos;s memory during code execution, so it can&apos;t be physically seen.
          </p>

          <p className='mb-1 italic'>This object consists of two parts:</p>
          <ul className='mb-4 flex flex-col gap-1'>
            <li className='before-element flex items-center gap-2'>an object with variables in the current scope,</li>
            <li className='before-element flex items-center gap-2'>a reference to the parent lexical environment.</li>
          </ul>

          <p className='mb-4'>
            Let&apos;s go back to the previous example. We have 2 lexical environments.
          </p>

          <p className='mb-4'>
            🌎 <span className="italic">Global</span>, which doesn&apos;t have a reference to a parent lexical
            environment because one doesn&apos;t exist.
          </p>

          <div className='mb-4'>
            <div className='flex justify-between bg-[#504e4e] rounded-tl-2xl rounded-tr-2xl px-5 py-2'>
              <p className='text-xs text-gray-100 font-normal'>example</p>
              <button
                type='button'
                className='text-xs text-gray-100 font-normal'
                onClick={handleCodeCopy}
              >
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            <pre className='text-base'>
              <code className="language-js rounded-bl-2xl rounded-br-2xl">
                {codeString1}
              </code>
            </pre>
          </div>

          <p className='mb-4'>
            🔐 <span className="italic">Local</span>, which refers to the global lexical environment.
          </p>

          <div className='mb-4'>
            <div className='flex justify-between bg-[#504e4e] rounded-tl-2xl rounded-tr-2xl px-5 py-2'>
              <p className='text-xs text-gray-100 font-normal'>example</p>
              <button
                type='button'
                className='text-xs text-gray-100 font-normal'
                onClick={handleCodeCopy}
              >
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            <pre className='text-base'>
              <code className="language-js rounded-bl-2xl rounded-br-2xl">
                {codeString2}
              </code>
            </pre>
          </div>

          <p className='mb-4'>
            ❗ I want to emphasize that the examples above are not real code, but just an attempt to
            visually imagine how the lexical environment object might look.
          </p>

          <p className='mb-4'>
            It&apos;s also important to note that the local lexical environment for
            the <code className="code-style">monsterAttack</code> function is created not when we declare
            the function, but when we call it (<code className="code-style">monsterAttack()</code>). This
            is a crucial point for understanding closures, which we will discuss next.
          </p>

          <h2
            id='closure'
            className='
              mb-4 pt-2 text-2xl md:text-3xl font-semibold capitalize text-black before:content-["✔️"] before:mr-1
          '>
            Closure
          </h2>

          <p className='mb-4'>
            <span className='font-bold italic'>Closures</span> in JavaScript - it is a feature where a function
            &quot;remembers&quot; its lexical environment in which it was created. This means that a function
            can access external variables even after the outer code has finished its execution.
          </p>

          <p className='mb-4'>
            In other words, when calling a function, its lexical environment is established, storing the current
            values of variables at the time of the call, as well as referencing its outer environment.
            This allows the function to &quot;see&quot; the variables that were accessible to it when it was declared.
          </p>

          <p className='mb-4'>
            Indeed, this concept might seem a bit confusing at first. However, in practice, everything
            becomes much clearer.
          </p>

          <div className='pt-10 flex justify-between items-start flex-col md:items-center md:flex-row gap-7'>
            <Link href="#" className="flex justify-between items-center gap-4">
              <div className='relative min-w-[90px] min-h-[90px]'>
                <Image
                  src='/assets/todo.webp'
                  alt='Developer in fron of computer'
                  fill
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                  className='rounded-2xl'
                />
              </div>

              <div className='text-left max-w-[320px]'>
                <p className='
                  text-label_color font-sans uppercase text-sm leading-normal font-bold tracking-widest
                '>
                  Previous
                </p>
                <p className='font-bold capitalize text-black text-lg leading-tight'>
                  Todo App: Why is it a Good Choice for a Pet Project
                </p>
              </div>
            </Link>

            <div className='w-px h-14 bg-border_color opacity-60 hidden md:block'></div>

            <Link href="#" className="flex justify-between items-center gap-4">
              <div className='text-left order-2 max-w-[320px] md:order-1 md:text-right'>
                <p className='
                text-label_color font-sans uppercase text-sm leading-normal font-bold tracking-widest
                '>
                  Next
                </p>
                <p className='font-bold capitalize text-black text-lg leading-tight'>
                  React Portal vs. Modal Window: A practical Guide
                </p>
              </div>

              <div className='relative min-w-[90px] min-h-[90px] order-1 md:order-2'>
                <Image
                  src='/assets/portal.webp'
                  alt='Developer in fron of computer'
                  fill
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                  className='rounded-2xl'
                />
              </div>
            </Link>
          </div>
        </div>

        <div className='order-1 xl:order-2'>
          <span ref={sideRef} className='sticky'>
            <div className='
              flex flex-wrap justify-start items-start content-start gap-x-3 lg:gap-x-1
              text-label_color font-sans text-base md:text-lg font-normal
              ml-[-8px] mb-6 px-1 sm:px-3 pl-2 lg:pl-0
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
            </div>

            <div className='bg-accent_colour p-3 rounded-2xl max-w-[500px]'>
              <h3 className='mb-1 text-lg md:text-xl font-semibold capitalize text-black'>Article summary</h3>
              <nav className='text-black text-base md:text-lg leading-snug'>
                <ol className='flex flex-col gap-1 list-decimal pl-6'>
                  <li>
                    <a
                      className='hover:text-dark_accent_colour transition-colors duration-300 ease'
                      href='#scope'
                      onClick={() => {
                        scrollToSection('#scope');
                      }}
                    >
                      Scope
                    </a>
                  </li>

                  <li>
                    <a
                      className='hover:text-dark_accent_colour transition-colors duration-300 ease'
                      href='#environment'
                      onClick={() => {
                        scrollToSection('#environment');
                      }}
                    >
                      Lexical environment
                    </a>
                  </li>

                  <li>
                    <a
                      className='hover:text-dark_accent_colour transition-colors duration-300 ease'
                      href='#closure'
                      onClick={() => {
                        scrollToSection('#closure');
                      }}
                    >
                      Closure
                    </a>
                  </li>
                </ol>
              </nav>
            </div>
          </span>
        </div>
      </main>

      <BackToTopButton locoScroll={locoScroll} />
    </>
  );
};

export default Post;
