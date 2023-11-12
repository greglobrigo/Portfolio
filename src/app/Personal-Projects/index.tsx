"use client"
import './personal.css';
import { Fade } from 'react-awesome-reveal'
import Image from 'next/image'


export default function PersonalProjects() {
    return (
        <>
            <div className="personal__header section__padding gradient__bg__left" id="personal">
                <div className="personal__header-content">
                    <Fade triggerOnce direction='up' delay={200}>
                        <h1 className="gradient__text pb-2" id="projects">Personal Projects</h1>
                    </Fade>
                    <Fade triggerOnce direction='up' delay={200}>
                        <h2 className="gradient__text2 pb-2" id="sm-sia">
                            Chatscape
                        </h2>
                    </Fade>
                    <div className='flex flex-col xl:flex-row items-center gap-10'>
                        <Fade triggerOnce direction='up' delay={200}>
                            <Image alt="chatscape1" src='/chatscape1.png' width={500} height={500}
                                onClick={() => window.open('/chatscape1.png')}
                                className='cursor-pointer hover:scale-110 transition duration-300 ease-in-out rounded-sm'
                            />
                        </Fade>
                        <Fade triggerOnce direction='up' delay={200}>
                            <Image alt="chatscape2" src='/chatscape2.png' width={500} height={500}
                                className='cursor-pointer hover:scale-110 transition duration-300 ease-in-out rounded-sm'
                                onClick={() => window.open('/chatscape2.png')}
                            />
                        </Fade>
                    </div>
                    <Fade triggerOnce direction='up' delay={200}>
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
                            Timeline: September 25, 2023
                        </p>
                        <p>
                            Project Type: Web App
                        </p>
                        <p>
                            Tags: Web App, Websockets, Chat, Social Media, Real Time Messaging
                        </p>
                        <p>
                            Technologies: ReactJS, NextJS, Typescript, Websockets, Ruby on Rails, PostgreSQL, Vercel, Render
                        </p>
                        <p className='pb-[100px]'>
                            Description: ChatScape is a web app that I built to reinforce my knowledge on websockets and to improve my frontend skills.
                            Features include: Registration with email confirmation, creation of group, public and direct chats, as well as real-time messaging.
                        </p>
                    </Fade>
                    <Fade triggerOnce direction='up' delay={200}>
                        <h2 className="gradient__text2 pb-2" id="sm-sia">
                            Kanban Board
                        </h2>
                    </Fade>
                    <div className='flex flex-col xl:flex-row items-center gap-10'>
                        <Fade triggerOnce direction='up' delay={200}>
                            <Image alt="kanban1" src='/kanban1.png' width={500} height={500}
                                onClick={() => window.open('/kanban1.png')}
                                className='cursor-pointer hover:scale-110 transition duration-300 ease-in-out rounded-sm'
                            />
                        </Fade>
                        <Fade triggerOnce direction='up' delay={200}>
                            <Image alt="kanban2" src='/kanban2.png' width={500} height={500}
                                className='cursor-pointer hover:scale-110 transition duration-300 ease-in-out rounded-sm'
                                onClick={() => window.open('/kanban2.png')}
                            />
                        </Fade>
                    </div>
                    <Fade triggerOnce direction='up' delay={200}>
                        <p>
                            Live Demo Link:
                            <a href='https://kanban-board-greglobrigo.vercel.app/' target='_blank' rel="noreferrer">
                                <span className='cursor-pointer hover:underline transition duration-300 ease-in-out hover:text-[#fb844d]'> Click Here</span>
                            </a>
                            <br />

                            <a href='https://github.com/greglobrigo/kanban-board' target='_blank' rel="noreferrer">
                                Frontend Repository:
                                <span className='cursor-pointer hover:underline transition duration-300 ease-in-out hover:text-[#fb844d]'> Click Here</span>
                                <br />
                            </a>
                        </p>
                        <p>
                            Role: Frontend Developer (Solo)
                        </p>
                        <p>
                            Timeline: November 13, 2023
                        </p>
                        <p>
                            Project Type: Web App
                        </p>
                        <p>
                            Tags: Web App, Project Management, Kanban Board
                        </p>
                        <p>
                            Technologies: ReactJS, NextJS, TailWindCSS, Vercel
                        </p>
                        <p className='pb-[100px]'>
                            Description: A simple Kanban Board that I forked from a github repository and added some features to it such as editing of tasks,
                            editing of priority, and adding search and reset functionality.
                        </p>
                    </Fade>
                    <Fade triggerOnce direction='up' delay={200}>
                        <h2 className="gradient__text2 leading-none pb-2" id="tmg">
                            Asus
                        </h2>
                    </Fade>
                    <div className='flex flex-col xl:flex-row items-center gap-10'>
                        <Fade triggerOnce direction='up' delay={200}>
                            <Image alt="asus1" src='/asus1.png' width={500} height={500}
                                onClick={() => window.open('/asus1.png')}
                                className='cursor-pointer hover:scale-110 transition duration-300 ease-in-out rounded-sm'
                            />
                        </Fade>
                        <Fade triggerOnce direction='up' delay={200}>
                            <Image alt="asus2" src='/asus2.png' width={500} height={500}
                                className='cursor-pointer hover:scale-110 transition duration-300 ease-in-out rounded-sm border-[#e6e5eb6c]
                            border-2'
                                onClick={() => window.open('/asus2.png')}
                            />
                        </Fade>
                    </div>
                    <Fade triggerOnce direction='up' delay={200}>
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
                    </Fade>
                    <Fade triggerOnce direction='up' delay={200}>
                        <h2 className="gradient__text2 leading-none pb-2" id="tmg">
                            TicTacToe
                        </h2>
                    </Fade>
                    <div className='flex flex-col xl:flex-row items-center gap-10'>
                        <Fade triggerOnce direction='up' delay={200}>
                            <Image alt="tictactoe1" src='/tictactoe1.png' width={500} height={500}
                                onClick={() => window.open('/tictactoe1.png')}
                                className='cursor-pointer hover:scale-110 transition duration-300 ease-in-out rounded-sm'
                            />
                        </Fade>
                        <Fade triggerOnce direction='up' delay={200}>
                            <Image alt="tictactoe2" src='/tictactoe2.png' width={500} height={500}
                                className='cursor-pointer hover:scale-110 transition duration-300 ease-in-out rounded-sm'
                                onClick={() => window.open('/tictactoe2.png')}
                            />
                        </Fade>
                    </div>
                    <Fade triggerOnce direction='up' delay={200}>
                        <p>
                            Live Demo Link:
                            <a href='https://greglobrigo.github.io/TicTacToe/' target='_blank' rel="noreferrer">
                                <span className='cursor-pointer hover:underline transition duration-300 ease-in-out hover:text-[#fb844d]'> Click Here</span>
                            </a>
                            <br />
                            <a href='https://github.com/greglobrigo/TicTacToe' target='_blank' rel="noreferrer">
                                Frontend Repository:
                                <span className='cursor-pointer hover:underline transition duration-300 ease-in-out hover:text-[#fb844d]'> Click Here</span>
                                <br />
                            </a>
                        </p>
                        <p>
                            Role: Front End Developer (Solo)
                        </p>
                        <p>
                            Timeline: August 9, 2021
                        </p>
                        <p>
                            Project Type: Game, Web App
                        </p>
                        <p>
                            Tags: Game, Web App, TicTacToe
                        </p>
                        <p>
                            Technologies: HTML, CSS, Vanilla JS
                        </p>
                        <p className='pb-[100px]'>
                            Description: A simple TicTacToe game with a feature to track scores and move history after a match.
                            The app also has sound effects that you can toggle on and off.
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