"use client"
import './contact.css';
import { Fade } from 'react-awesome-reveal'
import Image from 'next/image'


export default function Contact() {
    return (
        <>
            <div className="contact__header section__padding gradient__bg__left" id="contact">
                <div className="contact__header-content">
                    <Fade triggerOnce direction='up' delay={200}>
                        <h1 className="gradient__text" id="projects">Contact</h1>
                    </Fade>
                    <Fade triggerOnce direction='up' delay={200}>
                        <p className='pb-4'>
                            You can contact me through the following:
                        </p>
                    </Fade>
                    <ul className="skills__header-content__list">
                        <Fade triggerOnce direction="up" delay={200}>
                            <li>
                                <div className='flex items-center'>
                                    <h2 className="gradient__text2">
                                        Viber
                                    </h2>
                                    <Image width={75} height={50} className="w-[75px] h-[50px]"
                                        src="/viber-logo.png" alt="viber" />
                                </div>
                                <p className='pb-4'>
                                    +(63) 945-321-7121 (Greg)
                                </p>
                            </li>
                        </Fade>
                        <Fade triggerOnce direction="up" delay={200}>
                            <li>
                                <div className='flex items-center gap-2'>
                                    <h2 className="gradient__text2">
                                        Whatsapp
                                    </h2>
                                    <Image width={50} height={50} className="w-[50px] h-[50px] mt-1"
                                        src="/whatsapp.svg.webp" alt="whatsapp" />
                                </div>
                                <p className='pb-4'>
                                    +(63) 945-321-7121 (Greg)
                                </p>
                            </li>
                        </Fade>
                        <Fade triggerOnce direction="up" delay={200}>
                            <li>
                                <div className='flex items-center gap-2'>
                                    <h2 className="gradient__text2">
                                        Linkedin
                                    </h2>
                                    <Image width={45} height={45} className="w-[45px] h-[45px] mt-1 ml-1"
                                        src="/linkedin-logo.png" alt="linkedin" />
                                </div>
                                <a href="https://www.linkedin.com/in/greglobrigo/" target="_blank" rel="noreferrer">
                                    <p className='pb-4 hover:underline'>
                                        https://www.linkedin.com/in/greglobrigo/
                                    </p>
                                </a>
                            </li>
                        </Fade>
                        <Fade triggerOnce direction="up" delay={200}>
                            <li>
                                <div className='flex items-center gap-2'>
                                    <h2 className="gradient__text2">
                                        Gmail
                                    </h2>
                                    <Image width={50} height={40} className="w-[50px] h-[40px] ml-1"
                                        src="/gmail.svg.png" alt="gmail" />
                                </div>
                                <p className='pb-4 hover:underline'>
                                    greglobrigojr@gmail.com
                                </p>
                            </li>
                        </Fade>
                    </ul>
                </div>
            </div>
        </>
    )
}

