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
                        Project Type: Web App
                    </p>
                    <p>
                       Tags: Web App, Analytics, Reports, Monitoring, Tenant Management, Sales Tracking, Big Data
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
                    <h2 className="gradient__text2 leading-none" id="tmg">
                        • The Moment Group (TMG)
                    </h2>
                    <span className='font-semibold gradient__text2 text-lg xl:pl-10 pl-8 leading-none pb-8'>(OOMA, MANAM, DIN TAI FUNG, 8CUTS, MO COOKIES)</span>
                    <div className='flex flex-col xl:flex-row items-center gap-10'>
                        <Image alt="tmg-daily-monitoring" src='/tmg-daily-monitoring.png' width={750} height={750}
                            onClick={() => window.open('/tmg-daily-monitoring.png')}
                            className='cursor-pointer hover:scale-110 transition duration-300 ease-in-out rounded-sm'
                        />
                        <Image alt="sm-stg" src='/tmg-end-of-day.png' width={750} height={750} //add 1px border
                            className='cursor-pointer hover:scale-110 transition duration-300 ease-in-out rounded-sm border-[#e6e5eb6c]
                            border-2'
                            onClick={() => window.open('/tmg-end-of-day.png')}
                        />
                    </div>
                    <p>
                        Role: Lead Developer (Team of 2)
                    </p>
                    <p>
                        Timeline: January 2023 - Present
                    </p>
                    <p>
                        Project Type: ETL, Automated Reports Generation
                    </p>
                    <p>
                        Tags: ETL, Automated Reports Generation, Data Pipeline, Data Aggregation, Data Monitoring, Data Analytics, Data Visualization, Data Warehousing, Data Engineering
                    </p>
                    <p>
                        Technologies: ExcelJS, MySQL, Node, Serverless, TypeORM, AWS Services
                    </p>
                    <p>
                        Description: TMG Data IQ is a project that I&apos;m currently working on. It&apos;s a data pipeline that we built for the Business Intelligence and operations team of TMG to monitor, aggregate and automate sales reports across their 50+ stores nationwide on a daily basis.
                    </p>
                    <div className='flex xl:flex-row justify-center items-center flex-col gap-10'>
                    </div>
                </div>
                <div className="flex flex-[1]"></div>
            </div>
        </>
    )
}