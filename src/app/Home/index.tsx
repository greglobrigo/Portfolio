"use client"
import Navbar from "./components/navbar/navbar";
import './home.css';
import Image from 'next/image'
import { Fade } from 'react-awesome-reveal'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaDiscord } from 'react-icons/fa'


export default function Home() {

    return (
        <>
            <Navbar />
            <div className="gpt3__header section__padding" id="home">
                <div className="gpt3__header-content">
                    <h1 className="gradient__text">Hello, I'm Greg. Let&apos;s Build Something amazing.</h1>
                    <p>
                        I&apos;m a software engineer with a passion for building products that
                        <span className="gradient__text2"> make a difference. </span>
                        Leveraged with the power of <span className="gradient__text2">AI</span>
                        , and with the experiences I&apos;ve had, I&apos;m able to
                        <span className="gradient__text2"> solve problems</span> with
                        <span className="gradient__text2"> creativity</span> and
                        <span className="gradient__text2"> efficiency</span>.
                    </p>

                    <div className="gpt3__header-content__input">
                        <button className="cta__header-content__button button1" type="button">Learn More</button>
                        <button className="cta__header-content__button button2" type="button">Hire Me</button>
                    </div>

                    <div className="header-content__links">
                        <a href="https://github.com/greglobrigo"
                            target="_blank" rel="noopener noreferrer">
                            <FaGithub size={30} color="#4078c0"/>
                        </a>
                        <a href="https://www.linkedin.com/in/greglobrigo/"
                            target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={30} color="#4078c0" />
                        </a>
                        <a href="https://www.facebook.com/greglobrigo/"
                            target="_blank" rel="noopener noreferrer">
                            <FaFacebook size={30} color="#4078c0" />
                        </a>
                        <a href="https://twitter.com/greglobrigo"
                            target="_blank" rel="noopener noreferrer">
                            <FaTwitter size={30} color="#4078c0" />
                        </a>
                    </div>
                </div>

                <div className="gpt3__header-image">
                    <Image src="/github-copilot.png" width={500} height={500}
                        alt='copilot' />
                </div>
            </div>
        </>
    )
}