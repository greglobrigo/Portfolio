"use client"
import './personal.css';
import { Fade } from 'react-awesome-reveal'
import Image from 'next/image'


export default function PersonalProjects() {
    return (
        <>
            <div className="personal__header section__padding gradient__bg__left" id="personal">
                <div className="personal__header-content">
                    <Fade triggerOnce direction='up'>
                        <h1 className="gradient__text pb-2" id="projects">Personal Projects</h1>
                    </Fade>
                    <h2 className="gradient__text2 pb-2" id="sm-sia">
                        Chatscape
                    </h2>
                    <div className='flex flex-col xl:flex-row items-center gap-10'>
                        <Image alt="chatscape1" src='/chatscape1.png' width={500} height={500}
                            onClick={() => window.open('/chatscape1.png')}
                            className='cursor-pointer hover:scale-110 transition duration-300 ease-in-out rounded-sm'
                        />
                        <Image alt="chatscape2" src='/chatscape2.png' width={500} height={500}
                            className='cursor-pointer hover:scale-110 transition duration-300 ease-in-out rounded-sm'
                            onClick={() => window.open('/chatscape2.png')}
                        />
                    </div>
                    <p>
                        Live Demo Link:
                        <a href='https://chatscape-fe.vercel.app/home' target='_blank' rel="noreferrer">
                            <span className='cursor-pointer hover:underline transition duration-300 ease-in-out hover:text-[#fb844d]'> Click Here</span>
                        </a>
                        <br />

                        <a href='https://github.com/greglobrigo/Chatscape-FE' target='_blank' rel="noreferrer">
                            Frontend Repository:
                            <span className='cursor-pointer hover:underline transition duration-300 ease-in-out hover:text-[#fb844d]'> Click Here</span>
                            <br />
                        </a>
                        <a href='https://github.com/greglobrigo/Chatscape-BE' target='_blank' rel="noreferrer">
                            Backend Repository:
                            <span className='cursor-pointer hover:underline transition duration-300 ease-in-out hover:text-[#fb844d]'> Click Here</span>
                            <br />
                        </a>
                    </p>
                    <p>
                        Role: Fullstack Developer (Solo)
                    </p>
                    <p>
                        Timeline: September 25, 2023 - Present
                    </p>
                    <p>
                        Project Type: Web App
                    </p>
                    <p>
                        Tags: Web App, Websockets, Chat, Social Media, Real Time Messaging
                    </p>
                    <p>
                        Technologies: ReactJS, NextJS, Websockets, Ruby on Rails, PostgreSQL, Vercel, Render
                    </p>
                    <p className='pb-[100px]'>
                        Description: ChatScape is a web app that I built to reinforce my knowledge on websockets and to improve my frontend skills.
                        Features include: Registration with email confirmation, creation of group, public and direct chats, as well as real-time messaging.
                    </p>
                    <h2 className="gradient__text2 leading-none pb-2" id="tmg">
                        Asus
                    </h2>
                    <div className='flex flex-col xl:flex-row items-center gap-10'>
                        <Image alt="asus1" src='/asus1.png' width={500} height={500}
                            onClick={() => window.open('/asus1.png')}
                            className='cursor-pointer hover:scale-110 transition duration-300 ease-in-out rounded-sm'
                        />
                        <Image alt="asus2" src='/asus2.png' width={500} height={500}
                            className='cursor-pointer hover:scale-110 transition duration-300 ease-in-out rounded-sm border-[#e6e5eb6c]
                            border-2'
                            onClick={() => window.open('/asus2.png')}
                        />
                    </div>
                    <p>
                        Live Demo Link:
                        <a href='https://greglobrigo.github.io/Asus/' target='_blank' rel="noreferrer">
                            <span className='cursor-pointer hover:underline transition duration-300 ease-in-out hover:text-[#fb844d]'> Click Here</span>
                        </a>
                        <br />

                        <a href='https://github.com/greglobrigo/Asus' target='_blank' rel="noreferrer">
                            Frontend Repository:
                            <span className='cursor-pointer hover:underline transition duration-300 ease-in-out hover:text-[#fb844d]'> Click Here</span>
                            <br />
                        </a>
                    </p>
                    <p>
                        Role: Front End Developer (Solo)
                    </p>
                    <p>
                        Timeline: December 21, 2021
                    </p>
                    <p>
                        Project Type: Landing Page
                    </p>
                    <p>
                        Tags: Landing Page, Responsive Design, Branding
                    </p>
                    <p>
                        Technologies: HTML, CSS, SCSS, Vanilla JS
                    </p>
                    <p className='pb-[100px]'>
                        Description: Being fond of Asus, especially their ROG Laptop products, I decided to create a landing page for it.
                        The page was made way back in 2021.
                    </p>
                    {/* <h2 className="gradient__text2 leading-none pb-2" id="tmg">
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
                    </p> */}
                    <div className='flex xl:flex-row justify-center items-center flex-col gap-10'>
                    </div>
                </div>
                <div className="flex flex-[1]"></div>
            </div>
        </>
    )
}