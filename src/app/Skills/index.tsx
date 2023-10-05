"use client"
import './Skills.css';
import { Fade } from 'react-awesome-reveal'
import Image from 'next/image'

export default function Skills() {

    return (
        <>
            <div className="skills__header section__padding gradient__bg__left" id="skills">
                <div className="skills__header-content">
                    <h1 className="gradient__text pb-4">Technical Skills</h1>
                    <ul className="skills__header-content__list">
                        <li>
                            <div className='flex items-center gap-4'>
                                <h2 className="gradient__text2">
                                    Javascript / Typescript
                                </h2>
                                <Image width={50} height={50} className="w-[50px] h-[50px]"
                                    src="/js.png" alt="js" />
                                <Image width={50} height={50}
                                    className="w-[50px] h-[50px]" src="/typescript.png" alt="ts" />
                            </div>
                            <p className='pb-4'>
                                I have been using Javascript for 3 years, Typescript for 2. I have used it to build websites, web apps, and microservices together with Node.
                                Javascript is my strongest language, and if ever I&apos;m given a problem that needs to be expressed in code, I&apos;d use Javascript. You can check my
                                <span className="gradient__text3 text-2xl">
                                    <a href="https://www.codewars.com/users/gig4byte" target="_blank" rel="noopener noreferrer"> Codewars </a>
                                </span>
                                profile to see my Javascript skills.
                            </p>
                        </li>
                        <li>
                            <div className='flex items-center gap-4'>
                                <h2 className="gradient__text2">
                                    React
                                </h2>
                                <Image width={50} height={50} className="w-[60px] h-[50px]" src="/react.png" alt="react" />
                            </div>
                            <p className='pb-4'>
                                Vue and React are my go to frontend frameworks. Among the two, react is my favorite.
                                While in my last role, I&apos;ve primarily dealt with backend services, I have also used React to build a few web apps.
                                React is the first frontend framework I&apos;ve learned and I have been using it for 2 years now. Cool tip, this website is built in React and Next.
                            </p>
                        </li>
                        <li>
                            <div className='flex items-center gap-4'>
                                <h2 className="gradient__text2">
                                    Node.js
                                </h2>
                                <Image width={50} height={50} className="w-[50px] h-[50px]" src="/nodejs.png" alt="node" />
                            </div>
                            <p className='pb-4'>
                                I&apos;ve been using Node.js for 3 years now. I have used it to build microservices and backend services.
                                In one of my recent projects, I have used Node.js to build an ETL (Extract, Transform, Load) service that is used to process data from a third party API.
                                The service was built on an AWS Serverless architecture using AWS Lambda, AWS SQS, and AWS S3.
                                What I really like about Node is the amount of libraries available to choose from. It&apos;s not difficult to find something that does what you need.
                                From webscraping with Puppeteer, to building REST APIs with Express, to working with Excel files with ExcelJS.
                                For building microservices, I&apos;d choose Node.js.
                            </p>
                        </li>
                        <li>
                            <div className='flex items-center gap-4'>
                                <h2 className="gradient__text2">
                                    Ruby on Rails
                                </h2>
                                <Image width={50} height={50} className="w-[60px] h-[50px]" src="/rails.svg" alt="rails" />
                            </div>
                            <p className='pb-4'>
                                Ruby on Rails is the first backend/MVC framework I&apos;ve learned. I have used it to build a few web apps such as a simple task managing app and a simple stock trading app.
                                What I like about Ruby on Rails is how easy it is to get started. Scaffold a model, run the migrations, and you&apos;re good to go.
                                Most of my experience with Ruby on rails is with personal projects.
                            </p>
                        </li>
                        <li>
                            <div className='flex items-center gap-4'>
                                <h2 className="gradient__text2">
                                    PHP Laravel
                                </h2>
                                <Image width={50} height={50} className="w-[60px] h-[50px]" src="/laravel.svg" alt="laravel" />
                            </div>
                            <p>
                                One of our projects in my last role was a PHP Laravel project. We built a web app that is used to manage the company&apos;s data, as well as our clients&apos; data.
                                It&apos;s the framework that taught me the importance of Object Oriented Programming. It&apos;s also the framework that taught me how to write clean code.
                                My total exposure to PHP Laravel is 2 years.
                            </p>
                        </li>
                        <li>
                            <div className='flex items-center gap-4'>
                                <h2 className="gradient__text2">
                                    Linux / WSL
                                </h2>
                                <Image width={50} height={50} className="w-[50px] h-[50px]" src="/linux.png" alt="linux" />
                                <Image width={50} height={50} className="w-[50px] h-[50px]" src="/ubuntu.png" alt="ubuntu" />
                            </div>
                            <p className='pb-4'>
                                I&apos;ve been using Linux via WSL (Windows Subsystem for Linux) for instantiating my development environment. The distro I&apos;m most familiar with is Ubuntu. Total years of exposure to Linux is 2 years.
                            </p>
                        </li>
                        <li>
                            <div className='flex items-center gap-4'>
                                <h2 className="gradient__text2">
                                    MySQL / PostgreSQL
                                </h2>
                                <Image width={50} height={50} className="w-[50px] h-[50px]" src="/mysql.svg" alt="mysql" />
                                <Image width={50} height={50} className="w-[50px] h-[50px]" src="/psql.png" alt="postgresql" />
                            </div>
                            <p className='pb-4'>
                                Databases are a must for any web app. I have used MySQL and PostgreSQL for my projects. I have used PostgreSQL for 3 years and MySQL for 2.
                            </p>
                        </li>
                        <li>
                            <div className='flex items-center gap-4'>
                                <h2 className="gradient__text2">
                                    AWS
                                </h2>
                                <Image width={50} height={50} className="w-[75px] h-[50px] mt-4" src="/aws.png" alt="aws services" />
                            </div>
                            <p className='pb-4'>
                                I&apos;ve been using AWS for 2 years, it&apos;s the cloud provider service I&apos;m most familiar with for deploying full stack applications, aside from Heroku. I&apos;ve once used it to extend a serverless architecture for a project I was working on. The services I&apos;ve frequently used are Cloudwatch, AWS Lambda, Cognito, AWS SQS, AWS S3, EC2, and RDS.
                                Cool tip, this website is running on AWS with Amplify.
                            </p>
                        </li>
                        <li>
                            <div className='flex items-center gap-4'>
                                <h2 className="gradient__text2">
                                    Git / Github
                                </h2>
                                <Image width={50} height={50} className="w-[50px] h-[50px]" src="/git.png" alt="git" />
                                <Image width={50} height={50} className="w-[50px] h-[50px]" src="/github.png" alt="github" />
                            </div>
                            <p className='pb-4'>
                                Version control is a must for any developer. I&apos;ve been using Git and github since I started. I&apos;ve used it to collaborate with other developers on projects, as well as for personal projects.
                                Other notable version control systems I&apos;ve used are Bitbucket and Gitlab.
                            </p>
                        </li>
                        <li>
                            <div className='flex items-center gap-4'>
                                <h2 className="gradient__text2">
                                    HTML / CSS
                                </h2>
                                <Image width={50} height={50} className="w-[50px] h-[50px]" src="/html.png" alt="html" />
                                <Image width={50} height={50} className="w-[40px] h-[38px]" src="/css.png" alt="css" />
                            </div>
                            <p className='pb-4'>
                                I&apos;ve recently added Tailwind CSS to my skillset. I&apos;ve been using tailwind for 2 months now, including the creation of this website. I&apos;ve been using HTML and CSS since I started.
                                Other CSS frameworks I&apos;m familiar with are SASS, Bootstrap, and Material UI.
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="skills__header-image flex-col">

                </div>
            </div>
        </>
    )
}