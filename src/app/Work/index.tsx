"use client"
import './work.css';
import { Fade } from 'react-awesome-reveal'
import Image from 'next/image'


export default function Work() {
    return (
        <>
            <div className="work__header section__padding gradient__bg__left" id="work">
                <div className="work__header-content">
                    <Fade triggerOnce direction='up'>
                        <h1 className="gradient__text pb-2">Project Works</h1>
                    </Fade>
                    <h2 className="gradient__text2 pb-2" id="sm-sia">
                        • SM SIA
                    </h2>
                    <div className='flex flex-col xl:flex-row items-center gap-10'>
                        <Image alt="sm-login" src='/sia-login.png' width={750} height={750}
                            onClick={() => window.open('/sia-login.png')}
                            className='cursor-pointer hover:scale-110 transition duration-300 ease-in-out rounded-sm'
                        />
                        <Image alt="sm-stg" src='/sia-stg.png' width={750} height={750}
                            className='cursor-pointer hover:scale-110 transition duration-300 ease-in-out rounded-sm'
                            onClick={() => window.open('/sia-stg.png')}
                        />
                    </div>
                    <p>
                        Role: Fullstack Developer (Team of 10)
                    </p>
                    <p>
                        Timeline: March 2022 December 2022
                    </p>
                    <p>
                        Technologies: VueJS, Nuxt, PHP, Laravel, Lumen, PostgreSQL, Docker, Node, Serverless, AWS Services
                    </p>
                    <p className='pb-[100px]'>
                        Description: SIA is an all in one web app that we built for SM and is still being used by their accounting and operations team today.
                        It&apos;s a web app that provides reports generation, analytics, sales tracking, monitoring, tenant management and other features for SM to use.
                        It was the project that introduced me to data at scale or big data, as we had to build a system that can handle millions of transactions and still be able to provide
                        real time analytics and reports.
                    </p>
                    {/* <h2 className="gradient__text2 pb-2" id="sm-sia">
                        • The Moment Group (TMG)
                    </h2>
                    <div className='flex flex-col xl:flex-row items-center gap-10'>
                        <Image alt="sm-login" src='/sia-login.png' width={750} height={750}
                            onClick={() => window.open('/sia-login.png')}
                            className='cursor-pointer hover:scale-110 transition duration-300 ease-in-out rounded-sm'
                        />
                        <Image alt="sm-stg" src='/sia-stg.png' width={750} height={750}
                            className='cursor-pointer hover:scale-110 transition duration-300 ease-in-out rounded-sm'
                            onClick={() => window.open('/sia-stg.png')}
                        />
                    </div>
                    <p>
                        Role: Fullstack Developer (Team of 10)
                    </p>
                    <p>
                        Timeline: March 2022 December 2022
                    </p>
                    <p>
                        Technologies: VueJS, Nuxt, PHP, Laravel, Lumen, PostgreSQL, Docker, Node, Serverless, AWS Services
                    </p>
                    <p>
                        Description: SIA is an all in one web app that we built for SM and is still being used by their accounting and operations team today.
                        It&apos;s a web app that provides reports generation, analytics, sales tracking, monitoring, tenant management and other features for SM to use.
                    </p> */}
                    <div className='flex xl:flex-row justify-center items-center flex-col gap-10'>
                    </div>
                </div>
                <div className="flex flex-[1]"></div>
            </div>
        </>
    )
}