"use client"
import './work.css';
import { Fade } from 'react-awesome-reveal'
import Image from 'next/image'


export default function Work() {
    return (
        <>
            <div className="work__header section__padding gradient__bg__left" id="work">
                <div className="work__header-content">
                    <Fade triggerOnce direction='up' delay={200}>
                        <h1 className="gradient__text pb-2" id="projects">Work Projects</h1>
                    </Fade>
                    <Fade triggerOnce direction='up' delay={200}>
                        <h2 className="gradient__text2 pb-2" id="sm-sia">
                            SM SIA
                        </h2>
                    </Fade>
                    <div className='flex flex-col xl:flex-row items-center gap-10'>
                        <Fade triggerOnce direction='up' delay={200}>
                            <Image alt="sm-login" src='/sia-login.png' width={500} height={500}
                                onClick={() => window.open('/sia-login.png')}
                                className='cursor-pointer hover:scale-110 transition duration-300 ease-in-out rounded-sm'
                            />
                        </Fade>
                        <Fade triggerOnce direction='up' delay={200}>
                            <Image alt="sm-stg" src='/sia-stg.png' width={500} height={500}
                                className='cursor-pointer hover:scale-110 transition duration-300 ease-in-out rounded-sm'
                                onClick={() => window.open('/sia-stg.png')}
                            />
                        </Fade>
                    </div>
                    <Fade triggerOnce direction='up' delay={200}>
                        <p>
                            Role: Fullstack Developer (Team of 10)
                        </p>
                        <p>
                            Timeline: March 2022 - December 2022
                        </p>
                        <p>
                            Project Type: Web App
                        </p>
                        <p>
                            Technologies: VueJS, Nuxt, PHP, Typescript, Laravel, Lumen, PostgreSQL, MySQL, Redis, Docker, Node, Serverless, AWS Services
                        </p>
                        <p>
                            Description: SIA is an all in one web app that we built for SM and is still being used by their accounting and operations team today.
                            It&apos;s a web app that provides reports generation, analytics, sales tracking, monitoring, tenant management and other features for SM to use.
                            It was the project that introduced me to data at scale or big data, as we had to build a system that can handle millions of transactions and still be able to provide
                            real time analytics and reports.
                        </p>
                        <p className='pb-[100px]'>
                            Tags: Web App, Analytics, Reports, Monitoring, Tenant Management, Sales Tracking, Big Data
                        </p>
                    </Fade>
                    <Fade triggerOnce direction='up' delay={200}>
                        <h2 className="gradient__text2 leading-none pb-2" id="tmg">
                            TMG
                        </h2>
                    </Fade>
                    <div className='flex flex-col xl:flex-row items-center gap-10'>
                        <Fade triggerOnce direction='up' delay={200}>
                            <Image alt="tmg-end-of-day" src='/tmg-end-of-day.png' width={500} height={500}
                                className='cursor-pointer hover:scale-110 transition duration-300 ease-in-out rounded-sm border-[#e6e5eb6c]
                            border-2'
                                onClick={() => window.open('/tmg-end-of-day.png')}
                            />
                        </Fade>
                        <Fade triggerOnce direction='up' delay={200}>

                            <Image alt="tmg-daily-monitoring" src='/tmg-daily-monitoring.png' width={500} height={500}
                                onClick={() => window.open('/tmg-daily-monitoring.png')}
                                className='cursor-pointer hover:scale-110 transition duration-300 ease-in-out rounded-sm'
                            />
                        </Fade>
                    </div>
                    <Fade triggerOnce direction='up' delay={200}>

                        <p>
                            Role: Fullstack Developer (Team of 2)
                        </p>
                        <p>
                            Timeline: January 2023 - December 2023
                        </p>
                        <p>
                            Project Type: ETL, Automated Reports Generation
                        </p>
                        <p>
                            Technologies: ExcelJS, Typescript, MySQL, Node, Serverless, TypeORM, AWS Services
                        </p>
                        <p>
                            Description: TMG Data IQ is a data pipeline that we built for the Business Intelligence and operations team of TMG to automate
                            the sales data collection, aggregation and report generation from their 50+ branches nationwide. Through reports, we&apos;re able to provide
                            visibility to the operations team of TMG on how their branches are performing on a daily basis.
                        </p>
                        <p className='pb-[100px]'>
                            Tags: ETL, Automated Reports Generation, Data Pipeline, Data Aggregation, Data Monitoring, Data Analytics, Data Engineering
                        </p>
                    </Fade>
                    <Fade triggerOnce direction='up' delay={200}>
                        <h2 className="gradient__text2 leading-none pb-2" id="the-grid">
                            The Grid
                        </h2>
                    </Fade>
                    <div className='flex flex-col xl:flex-row items-center gap-10'>
                        <Fade triggerOnce direction='up' delay={200}>
                            <Image alt="the-grid-login" src='/thegrid-login.png' width={500} height={500}
                                onClick={() => window.open('/thegrid-login.png')}
                                className='cursor-pointer hover:scale-110 transition duration-300 ease-in-out rounded-sm'
                            />
                        </Fade>
                        <Fade triggerOnce direction='up' delay={200}>
                            <Image alt="the-grid-ui" src='/thegrid-ui.png' width={500} height={500}
                                className='cursor-pointer hover:scale-110 transition duration-300 ease-in-out rounded-sm border-[#e6e5eb6c]
                            border-2'
                                onClick={() => window.open('/thegrid-ui.png')}
                            />
                        </Fade>
                    </div>
                    <Fade triggerOnce direction='up' delay={200}>
                        <p>
                            Role: Fullstack Developer (Team of 2)
                        </p>
                        <p>
                            Timeline: October 2023 - December 2023
                        </p>
                        <p>
                            Project Type: Web App, ETL, Automated Reports Generation
                        </p>
                        <p>
                            Technologies: ReactJS, NextJS, ExcelJS, PostgreSQL, Node, Typescript, Serverless, TypeORM, AWS Services
                        </p>
                        <p>
                            Description: Data IQ The Grid is another solo project that I worked on.
                            The web app provides visibility to the operations team of The Grid Food Market by providing them with real time sales status reports
                            with regards to their tenants and other data that they need to monitor on a daily basis.
                            We&apos;ve also created a portal for them to download sales reports on demand.
                        </p>
                        <p className='pb-[100px]'>
                            Tags: Fullstack Development, Web App, ETL, Automated Reports Generation, Data Pipeline, Data Aggregation, Data Monitoring, Data Analytics, Data Engineering
                        </p>
                    </Fade>
                    <Fade triggerOnce direction='up' delay={200}>
                        <h2 className="gradient__text2 leading-none pb-2" id="tmg">
                            Generic Scheduler
                        </h2>
                    </Fade>
                    <div className='flex flex-col xl:flex-row items-center gap-10'>
                        <Fade triggerOnce direction='up' delay={200}>

                            <Image alt="scheduler1" src='/scheduler1.png' width={500} height={500}
                                onClick={() => window.open('/scheduler1.png')}
                                className='cursor-pointer hover:scale-110 transition duration-300 ease-in-out rounded-sm'
                            />
                        </Fade>
                        <Fade triggerOnce direction='up' delay={200}>
                            <Image alt="scheduler2" src='/scheduler2.png' width={500} height={500}
                                className='cursor-pointer hover:scale-110 transition duration-300 ease-in-out rounded-sm border-[#e6e5eb6c]
                            border-2'
                                onClick={() => window.open('/scheduler2.png')}
                            />
                        </Fade>
                    </div>
                    <Fade triggerOnce direction='up' delay={200}>
                        <p>
                            Role: Fullstack Developer (Team of 2)
                        </p>
                        <p>
                            Timeline: January 2023 - December 2023
                        </p>
                        <p>
                            Project Type: Desktop App
                        </p>
                        <p>
                            Technologies: Object Pascal, Delphi, Lazarus
                        </p>
                        <p>
                            Description: Generic Scheduler is a desktop app that we built to automate the fetching of relevant data from our clients&apos; systems and
                            uploads them to our cloud database. It&apos;s an app that can run discreetly in the background.
                            The app is cross platform and can be run on Windows, Linux and Mac, while also being able to support low spec machines.
                            The scheduler app is also capable of running multiple instances of itself and can be scheduled to run at a specific time.
                        </p>
                        <p className='pb-[100px]'>
                            Tags: Desktop App, Scheduling, Automation, File Uploads
                        </p>
                    </Fade>
                    <div className='flex xl:flex-row justify-center items-center flex-col gap-10'>
                    </div>
                </div>
                <div className="flex flex-[1]"></div>
            </div>
        </>
    )
}