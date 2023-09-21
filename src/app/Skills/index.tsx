"use client"
import './Skills.css';
import { Fade } from 'react-awesome-reveal'


export default function Skills() {

    return (
        <>
            <div className="skills__header section__padding" id="skills">
                <div className="skills__header-content">
                    <h1 className="gradient__text">Technical Skills</h1>
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
                                I have used Node.js to build an ETL (Extract, Transform, Load) service that is used to process data from a third party API.
                            </p>

                        </li>
                        <li>
                            <h2 className="gradient__text2">
                                Ruby on Rails
                            </h2>
                        </li>
                        <li>
                            <h2 className="gradient__text2">
                                PHP Laravel
                            </h2>
                        </li>
                    </ul>



                </div>

                <div className="skills__header-image flex-col">

                </div>
            </div>
        </>
    )
}