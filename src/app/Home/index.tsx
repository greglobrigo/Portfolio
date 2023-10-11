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
                    <Fade direction="up" >
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
                    <Fade direction="up"  className="w-full">
                        <div className="home__header-content__input">
                            <button className="cta__header-content__button button1" type="button">Learn More</button>
                            <button className="cta__header-content__button button2" type="button">Hire Me</button>

                        </div>
                    </Fade>

                    <div className="header-content__links__home">
                        <Fade direction="up"  delay={1000}>
                            <a href="https://github.com/greglobrigo"
                                target="_blank" rel="noopener noreferrer">
                                <FaGithub size={30} color="#4078c0" />
                            </a>
                        </Fade>
                        <Fade direction="up"  delay={1200}>
                            <a href="https://www.linkedin.com/in/greglobrigo/"
                                target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size={30} color="#4078c0" />
                            </a>
                        </Fade>
                        <Fade direction="up"  delay={1400}>
                            <a href="https://www.facebook.com/greglobrigo/"
                                target="_blank" rel="noopener noreferrer">
                                <FaFacebook size={30} color="#4078c0" />
                            </a>
                        </Fade>
                        <Fade direction="up"  delay={1600}>
                            <a href="https://twitter.com/greglobrigo"
                                target="_blank" rel="noopener noreferrer">
                                <FaTwitter size={30} color="#4078c0" />
                            </a>
                        </Fade>
                        <Fade direction="up"  delay={1800}>
                            <a href="https://discord.com/users/274211616457883648"
                                target="_blank" rel="noopener noreferrer">
                                <FaDiscord size={30} color="#4078c0" />
                            </a>
                        </Fade>
                    </div>
                </div>

                <div className="home__header-image flex-col">
                    <Fade direction="up" >
                        <h1 className="caption gradient__text">Github Copilot</h1>
                        <div className="card">
                            <Image width={500} height={500}
                                src="/github-copilot.png" alt='copilot' />
                        </div>
                    </Fade>
                </div>
            </div>
        </>
    )
}