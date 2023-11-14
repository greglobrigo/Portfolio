"use client"
import Navbar from "./components/navbar/navbar";
import './home.css';
import { Fade } from 'react-awesome-reveal'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaDiscord } from 'react-icons/fa'
import Image from 'next/image'


export default function Home() {

    return (
        <>
            <Navbar />
            <div className="home__header section__padding" id="home">
                <div className="home__header-content">
                    <Fade triggerOnce direction="up" >
                        <div className="gradient__text breathe">
                            <h1>Hello, I&apos;m Greg. <br />Let&apos;s Build Something amazing.</h1>
                        </div>
                        <p>
                            I&apos;m a software engineer with a passion for building products that
                            <span className="gradient__text2"> make a difference. </span><br />
                            I like keeping up with the latest technologies including <span className="gradient__text2">AI </span>
                            and enjoy
                            <span className="gradient__text2"> solving problems</span> with
                            <span className="gradient__text2"> creativity</span> and
                            <span className="gradient__text2"> efficiency</span>.
                        </p>
                    </Fade>
                    <Fade triggerOnce direction="up" className="w-full">
                        <div className="home__header-content__input">
                            <button onClick={() => window.location.href = '#mosaic'} className="cta__header-content__button button1" type="button">
                                    Learn More
                            </button>
                            <button onClick={() => window.location.href = '#contact'} className="cta__header-content__button button2" type="button">
                                    Hire Me
                            </button>
                        </div>
                    </Fade>

                    <div className="header-content__links__home">
                        <Fade triggerOnce direction="up" delay={1000}>
                            <a href="https://github.com/greglobrigo"
                                target="_blank" rel="noopener noreferrer">
                                <FaGithub size={30} color="#4078c0"
                                    className="hover:scale-110 transition duration-300 ease-in-out"
                                />
                            </a>
                        </Fade>
                        <Fade triggerOnce direction="up" delay={1200}>
                            <a href="https://www.linkedin.com/in/greglobrigo/"
                                target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size={30} color="#4078c0"
                                    className="hover:scale-110 transition duration-300 ease-in-out"
                                />
                            </a>
                        </Fade>
                        <Fade triggerOnce direction="up" delay={1400}>
                            <a href="https://www.facebook.com/greglobrigo/"
                                target="_blank" rel="noopener noreferrer">
                                <FaFacebook size={30} color="#4078c0"
                                    className="hover:scale-110 transition duration-300 ease-in-out"
                                />
                            </a>
                        </Fade>
                        <Fade triggerOnce direction="up" delay={1600}>
                            <a href="https://twitter.com/greglobrigo"
                                target="_blank" rel="noopener noreferrer">
                                <FaTwitter size={30} color="#4078c0"
                                    className="hover:scale-110 transition duration-300 ease-in-out"
                                />
                            </a>
                        </Fade>
                        <Fade triggerOnce direction="up" delay={1800}>
                            <a href="https://discord.com/users/274211616457883648"
                                target="_blank" rel="noopener noreferrer">
                                <FaDiscord size={30} color="#4078c0"
                                    className="hover:scale-110 transition duration-300 ease-in-out"
                                />
                            </a>
                        </Fade>
                    </div>
                    <div className="flex flex-row w-full justify-center items-center gap-[3rem] pt-10">
                        <div className="flex gap-14 flex-col md:flex-row items-center">
                            <Fade triggerOnce direction="up" delay={1000}>
                                <a href="#mosaic">
                                    <Image width={200} height={200}
                                        className="mb-2 cursor-pointer min-w-[200px] hover:scale-110 transition duration-300 ease-in-out"
                                        src="/mosaic-logo.webp" alt='mosaic-logo' />
                                </a>
                            </Fade>
                            <Fade triggerOnce direction="up" delay={1000}>
                                <Image width={75} height={75}
                                    onClick={() => window.location.href = '#sm-sia'}
                                    className="cursor-pointer min-w-[75px] min-h-[75px] hover:scale-110 transition duration-300 ease-in-out"
                                    src="/smlogo.png" alt='smlogo' />
                            </Fade>
                        </div>
                        <div className="flex gap-10 flex-col md:flex-row">
                            <Fade triggerOnce direction="up" delay={1000}>
                                <div className="bg-[#3d71df] rounded-full">
                                    <a href="#tmg">
                                        <Image width={75} height={75}
                                            className="rounded-full opacity-[0.85] border-[1.5px] border-[#3d71df] cursor-pointer min-w-[75px] min-h-[75px] hover:scale-110 transition duration-300 ease-in-out"
                                            src="/tmg-logo.jpg" alt='tmg-logo' />
                                    </a>
                                </div>
                            </Fade>
                            <Fade triggerOnce direction="up" delay={1000}>
                                <div className="bg-[#3d71df] rounded-full max-h-[75px] max-w-[75px] items-center"
                                    onClick={() => window.location.href = '#the-grid'}>
                                    <Image width={75} height={75}
                                        className="rounded-full opacity-[0.85] border-[1.5px] border-[#3d71df] cursor-pointer min-w-[75px] min-h-[75px] hover:scale-110 transition duration-300 ease-in-out"
                                        src="/the-grid-logo.webp" alt='the-grid-logo' />
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>

                <div className="flex flex-[1] flex-col justify-center items-center xl:mb-[100px]">
                    <Fade triggerOnce direction="up">
                        <h1 className="caption gradient__text">Github Copilot</h1>
                        <div className="card">
                            <Image width={500} height={500}
                                className="object-contain cursor-pointer hover:scale-105 transition duration-300 ease-in-out"
                                src="/github-copilot.png" alt='copilot' />
                        </div>
                    </Fade>
                </div>

            </div >
        </>
    )
}