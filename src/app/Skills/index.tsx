"use client"
import './Skills.css';
import { Fade } from 'react-awesome-reveal'


export default function Skills() {

    return (
        <>
            <div className="skills__header section__padding" id="skills">
                <div className="skills__header-content">
                    <h1 className="gradient__text pb-4">Technical Skills</h1>
                    <ul className="skills__header-content__list">
                        <li>
                            <h2 className="gradient__text2">
                                Javascript / TypeScript
                            </h2>
                            <p>
                                I have been using Javascript for 3 years now. I have used it to build websites, web apps, and microservices together with Node.
                                Javascript is my strongest language, and if ever I'm given a problem that needs to be expressed in code, I'd use Javascript. You can check my
                                <span className="gradient__text3 text-2xl
                                ">
                                    <a href="https://www.codewars.com/users/gig4byte" target="_blank" rel="noopener noreferrer"> Codewars </a>
                                </span>
                                profile to see my Javascript skills.
                            </p>
                        </li>
                        <li>
                            <h2 className="gradient__text2">
                                React
                            </h2>
                            <p>
                                Vue and React are my go to frontend frameworks. Among the two, react is my favorite.
                                While in my last role, I've primarily dealt with backend services, I have also used React to build a few web apps.
                                React is the first frontend framework I've learned and I have been using it for 2 years now.
                            </p>
                        </li>
                        <li>
                            <h2 className="gradient__text2">
                                Node.js
                            </h2>
                            <p>
                                I've been using Node.js for 3 years now. I have used it to build microservices and backend services.
                                In one of my recent projects, I have used Node.js to build an ETL (Extract, Transform, Load) service that is used to process data from a third party API.
                                The service was built on an AWS Serverless architecture using AWS Lambda, AWS SQS, and AWS S3.
                                What I really like about Node is the amount of libraries available to choose from. It's not difficult to find something that does what you need.
                                From webscraping with Puppeteer, to building a REST APIs with Express, to working with Excel files with ExcelJS, there's a library for it.
                                For building microservices, I'd choose Node.js.
                            </p>
                        </li>
                        <li>
                            <h2 className="gradient__text2">
                                Ruby on Rails
                            </h2>
                            <p>
                                Ruby on Rails is the first backend/MVC framework I've learned. I have used it to build a few web apps such as a simple task managing app and a simple stock trading app.
                                What I like about Ruby on Rails is how easy it is to get started. Scaffold a model, run the migrations, and you're good to go.
                                Most of my experience with Ruby on rails is with personal projects.
                            </p>
                        </li>
                        <li>
                            <h2 className="gradient__text2">
                                PHP Laravel
                            </h2>
                            <p>
                                One of our projects in my last role was a PHP Laravel project. We built a web app that is used to manage the company's data, as well as our clients' data.
                                It's the framework that taught me the importance of Object Oriented Programming. It's also the framework that taught me how to write clean code.
                                My total exposure to PHP Laravel is 2 years.
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