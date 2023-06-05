"use client"
import { Transition } from '@headlessui/react';
import Image from 'next/image'
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import Feature1 from 'public/feature1.png'
import Feature2 from 'public/feature2.png'
import Feature3 from 'public/feature3.png'

import VideoThumb from 'public/demo.png'

export default function Home() {

  const [repoLink, setRepoLink] = useState("");
  const [top, setTop] = useState<boolean>(true)
  const [tab, setTab] = useState<number>(1)
  const tabs = useRef<HTMLDivElement>(null)

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement) tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
  }
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true)
  }

  useEffect(() => {
    heightFix()
    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  return (
    <>
      <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top ? 'bg-white backdrop-blur-sm shadow-lg' : ''}`}>

        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="shrink-0 m-4 flex items-center ">
              <Link href="/" className="block justify-center items-center" aria-label="Cruip">
                <svg className="w-8 h-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <radialGradient cx="21.152%" cy="86.063%" fx="21.152%" fy="86.063%" r="79.941%" id="footer-logo">
                      <stop stopColor="#4FD1C5" offset="0%" />
                      <stop stopColor="#81E6D9" offset="25.871%" />
                      <stop stopColor="#338CF5" offset="100%" />
                    </radialGradient>
                  </defs>
                  <rect width="32" height="32" rx="16" fill="url(#footer-logo)" fillRule="nonzero" />
                </svg>
              </Link>
              <h1 className='ml-4 text-3xl font-extrabold'>
                <div className='flex flex-col justify-center '>
                  <span className='  text-sm text-neutral-400 font-medium leading-none '>SkifLabs</span>
                  <span className=" leading-snug bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                    WasmEdge<span className=' text-neutral-500 border-neutral-500 px-2 ml-1 font-normal text-xs font-mono border rounded'>Beta</span>
                  </span>

                </div>

              </h1>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-50 w-full" aria-hidden="true">
          <svg viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
                <stop stopColor="#FFF" offset="0%" />
                <stop stopColor="#EAEAEA" offset="77.402%" />
                <stop stopColor="#DFDFDF" offset="100%" />
              </linearGradient>
            </defs>
            <g fill="url(#illustration-01)" fillRule="evenodd">
              <circle cx="1232" cy="128" r="128" />
              <circle cx="155" cy="443" r="64" />
            </g>
          </svg>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Hero content */}
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            {/* Section header */}
            <div className="text-center pb-12 md:pb-16">
              <h1 className="text-6xl md:text-8xl font-semibold tracking-tighter mb-4" data-aos="zoom-y-out">
                Supercharge Your Development Workflow with&nbsp;
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 font-extrabold">WasmEdge</span>
              </h1>
              <div className="max-w-3xl mx-auto">
                <p className="text-xl font-light text-gray-500 mb-8" data-aos="zoom-y-out" data-aos-delay="150">Run Node.js in Your Browser!
                  Lightning-fast Builds, In-Browser Debugging, and Secure Execution.
                  Say Goodbye to Slow Containers and Embrace Seamless WebAssembly Development
                </p>
                <div className="" data-aos="zoom-y-out" data-aos-delay="300">
                  <div className='flex flex-row justify-center'>
                    <a href="http://localhost:5173" >
                      <div className='bg-blue-600 hover:bg-blue-700 px-8 py-2   rounded-md text-lg text-white '>
                        Start Quickstart Project
                      </div>
                    </a>
                  </div>
                  <p className=' text-gray-400 text-lg py-3'>
                    or
                  </p>
                  <div className='flex flex-row'>
                    <input type='text' className='rounded-lg border-gray-400 border p-2 flex-grow' placeholder='Enter your nodejs repository'
                      value={repoLink}
                      onChange={
                        (e) => {
                          setRepoLink(e.target.value)
                        }
                      }
                    />
                    <a target='_blank' href={`http://localhost:5173?github=${repoLink}`}>
                      <div className=" bg-gray-900 hover:bg-gray-800 px-4 py-3 ml-2  rounded-lg text-md text-white  flex" >
                        <img src='https://icon-library.com/images/github-icon-white/github-icon-white-6.jpg' className=' h-6 pr-1' />
                        Clone from
                        <span className=' font-bold'>
                          &nbsp;Github&nbsp;
                        </span>

                      </div>
                    </a>
                  </div>
                  <p className="text-sm font-light text-gray-500 mt-3" data-aos="zoom-y-out" data-aos-delay="150">
                    Use chrome browserfor best experience
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="relative flex justify-center mb-8" data-aos="zoom-y-out" data-aos-delay="450">
                <div className="flex flex-col justify-center">
                  <Image src={VideoThumb} width={768} height={432} alt={"Demo"} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-gray-50 w-full pt-20 overflow-clip'>

          <div className="max-w-3xl mx-auto text-center pb-6 md:pb-8 ">
            <h1 className=" text-4xl font-bold mb-4">Why use WasmEdge ? </h1>
            <p className="text-xl font-light text-gray-600">
              Want to quicktly set up a node.js project to test a few things out or want to try a github project before using it ?
              Do it all using WasmEdge within your browser without polluting your system with a black hole of
              <span className=' font-mono px-2 py-1 bg-gray-700 text-gray-300 text-sm rounded mx-2 mb-2 align-baseline'>node_modules</span>
            </p>
          </div>

          <div className='grid grid-cols-12'>

            <div ref={tabs} className='col-span-8 md:col-span-5 lg:col-span-4 pl-6 lg:pl-0 lg:col-start-2 xl:col-start-3'>
              <a
                className={`flex items-center justify-between text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 1 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-neutral-200 border-transparent'}`}
                href="#0"
                onClick={(e) => { e.preventDefault(); setTab(1); }}
              >
                <div>
                  <div className="font-semibold leading-snug tracking-tight mb-1">Run native package managers</div>
                  <div className="text-gray-600 text-sm">Run the native versions of npm, pnpm, and yarn, all in the browser, all in your browser.</div>
                </div>
                <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                  </svg>
                </div>
              </a>
              <a
                className={`flex items-center justify-between text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 2 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-neutral-200 border-transparent'}`}
                href="#0"
                onClick={(e) => { e.preventDefault(); setTab(2); }}
              >
                <div>
                  <div className="font-semibold leading-snug tracking-tight mb-1">No Setup Required</div>
                  <div className="text-gray-600 text-sm">No need to install node or any other binaries on your system, run quickstart to start building</div>
                </div>
                <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                  </svg>
                </div>
              </a>
              <a
                className={`flex items-center justify-between text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 3 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-neutral-200 border-transparent'}`}
                href="#0"
                onClick={(e) => { e.preventDefault(); setTab(3); }}
              >
                <div>
                  <div className="font-semibold leading-snug tracking-tight mb-1">Safe and Secure</div>
                  <div className="text-gray-600 text-sm">Run all your code within your browser sandbox without giving any access to your local files.</div>
                </div>
                <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                  </svg>
                </div>
              </a>
            </div>
            <div className=' col-span-4 flex flex-col relative'>
              <Transition
                show={tab === 1}
                enter="transition ease-in-out duration-700 transform order-first"
                enterFrom="opacity-0 translate-y-16"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in-out duration-300 transform absolute"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-16"
              >
                <div className="relative inline-flex flex-col">
                  <Image className="max-w-none rounded" height="500" src={Feature1} alt="Features bg" />
                </div>
              </Transition>

              <Transition
                show={tab === 2}
                enter="transition ease-in-out duration-700 transform order-first"
                enterFrom="opacity-0 translate-y-16"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in-out duration-300 transform absolute"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-16"
              >
                <div className="relative inline-flex flex-col">
                  <Image className="max-w-none rounded" height="500" src={Feature2} alt="Features bg" />
                </div>
              </Transition>  <Transition
                show={tab === 3}
                enter="transition ease-in-out duration-700 transform order-first"
                enterFrom="opacity-0 translate-y-16"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in-out duration-300 transform absolute"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-16"
              >
                <div className="relative inline-flex flex-col">
                  <Image className="max-w-none rounded" height="500" src={Feature3} alt="Features bg" />
                </div>
              </Transition>

            </div>

          </div>
        </div>
      </main >

    </>
  )
}
