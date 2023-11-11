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
                        <h1 className="gradient__text pb-2" id="projects">Project Works</h1>
                    </Fade>
                    <h2 className="gradient__text2 pb-2" id="sm-sia">
                        • SM SIA
                    </h2>
                    <div className='flex flex-col xl:flex-row items-center gap-10'>
                        <Image alt="sm-login" src='/sia-login.png' width={500} height={500}
                            onClick={() => window.open('/sia-login.png')}
                            className='cursor-pointer hover:scale-110 transition duration-300 ease-in-out rounded-sm'
                        />
                        <Image alt="sm-stg" src='/sia-stg.png' width={500} height={500}
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
                        Technologies: VueJS, Nuxt, PHP, Laravel, Lumen, PostgreSQL, MySQL, Redis, Docker, Node, Serverless, AWS Services
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
                        <Image alt="tmg-daily-monitoring" src='/tmg-daily-monitoring.png' width={500} height={500}
                            onClick={() => window.open('/tmg-daily-monitoring.png')}
                            className='cursor-pointer hover:scale-110 transition duration-300 ease-in-out rounded-sm'
                        />
                        <Image alt="tmg-end-of-day" src='/tmg-end-of-day.png' width={500} height={500}
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
                        Tags: ETL, Automated Reports Generation, Data Pipeline, Data Aggregation, Data Monitoring, Data Analytics, Data Engineering
                    </p>
                    <p>
                        Technologies: ExcelJS, MySQL, Node, Serverless, TypeORM, AWS Services
                    </p>
                    <p className='pb-[100px]'>
                        Description: TMG Data IQ is a data pipeline that we built for the Business Intelligence and operations team of TMG to automate
                        the sales data collection, aggregation and report generation from their 50+ branches nationwide. Through reports, we&apos;re able to provide
                        visibility to the operations team of TMG on how their branches are performing on a daily basis.
                    </p>
                    <h2 className="gradient__text2 leading-none pb-2" id="tmg">
                        • The Grid Food Market
                    </h2>
                    <div className='flex flex-col xl:flex-row items-center gap-10'>
                        <Image alt="the-grid-login" src='/thegrid-login.png' width={500} height={500}
                            onClick={() => window.open('/thegrid-login.png')}
                            className='cursor-pointer hover:scale-110 transition duration-300 ease-in-out rounded-sm'
                        />
                        <Image alt="the-grid-ui" src='/thegrid-ui.png' width={500} height={500}
                            className='cursor-pointer hover:scale-110 transition duration-300 ease-in-out rounded-sm border-[#e6e5eb6c]
                            border-2'
                            onClick={() => window.open('/thegrid-ui.png')}
                        />
                    </div>
                    <p>
                        Role: Lead Developer (Team of 2)
                    </p>
                    <p>
                        Timeline: October 2023 - Present
                    </p>
                    <p>
                        Project Type: Web App, ETL, Automated Reports Generation
                    </p>
                    <p>
                        Tags: Fullstack Development, Web App, ETL, Automated Reports Generation, Data Pipeline, Data Aggregation, Data Monitoring, Data Analytics, Data Engineering
                    </p>
                    <p>
                        Technologies: ReactJS, NextJS, ExcelJS, PostgreSQL, Node, Serverless, TypeORM, AWS Services
                    </p>
                    <p className='pb-[100px]'>
                        Description: Data IQ The Grid is another project that I&apos;m currently working on.
                        The web app provides visibility to the operations team of The Grid Food Market by providing them with real time sales status reports
                        with regards to their tenants and other data that they need to monitor on a daily basis.
                        We&apos;ve also created a portal for them to download sales reports on demand.
                    </p>
                    <h2 className="gradient__text2 leading-none pb-2" id="tmg">
                        • Generic Scheduler
                    </h2>
                    <div className='flex flex-col xl:flex-row items-center gap-10'>
                        <Image alt="scheduler1" src='/scheduler1.png' width={500} height={500}
                            onClick={() => window.open('/scheduler1.png')}
                            className='cursor-pointer hover:scale-110 transition duration-300 ease-in-out rounded-sm'
                        />
                        <Image alt="scheduler2" src='/scheduler2.png' width={500} height={500}
                            className='cursor-pointer hover:scale-110 transition duration-300 ease-in-out rounded-sm border-[#e6e5eb6c]
                            border-2'
                            onClick={() => window.open('/scheduler2.png')}
                        />
                    </div>
                    <p>
                        Role: Co-Lead (Team of 2)
                    </p>
                    <p>
                        Timeline: January 2023 - Present
                    </p>
                    <p>
                        Project Type: Desktop App
                    </p>
                    <p>
                        Tags: Desktop App, Scheduling, Automation, File Uploads
                    </p>
                    <p>
                        Technologies: Object Pascal, Delphi, Lazarus
                    </p>
                    <p className='pb-[100px]'>
                        Description: Generic Scheduler is the glue that makes all of our projects work.
                        It&apos;s a desktop app that we built to automate the fetching of relevant data from our clients&apos; systems and
                        uploads them to our cloud database. It&apos;s the backbone of our service which makes it possible for us to provide real time analytics and reports.
                        The app is cross platform and can be run on Windows, Linux and Mac, while also being able to support low spec machines.
                        The scheduler app is also capable of running multiple instances of itself and can be scheduled to run at a specific time.
                    </p>
                    <div className='flex xl:flex-row justify-center items-center flex-col gap-10'>
                    </div>
                </div>
                <div className="flex flex-[1]"></div>
            </div>
        </>
    )
}