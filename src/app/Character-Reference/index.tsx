"use client"
import './cr.css';
import { Fade } from 'react-awesome-reveal'
import Image from 'next/image'


export default function CharacterReference() {
    return (
        <>
            <div className="contact__header section__padding gradient__bg__left" id="character-reference">
                <div className="contact__header-content">
                    <Fade triggerOnce direction='up' delay={200}>
                        <h1 className="gradient__text mb-2" id="projects">Character Reference</h1>
                    </Fade>
                    <ul className="skills__header-content__list">
                        <Fade triggerOnce direction="up" delay={200}>
                            <li>
                                <div className='flex items-center cursor-pointer hover:scale-105 transform transition duration-300 ease-in-out'>
                                    <a href="https://www.linkedin.com/in/rustico-danan-iii-0b0b0b1a/" target="_blank" rel="noreferrer">
                                    <h2 className="gradient__text2">
                                        1. Rustico Danan
                                    </h2>
                                    </a>
                                </div>
                                <p>
                                    Head of Data Analytics and Business Intelligence, Mosaic Solutions
                                </p>
                                <p className='pb-4'>
                                    +(63) 917-103-0379
                                </p>
                            </li>
                        </Fade>
                        <Fade triggerOnce direction="up" delay={200}>
                            <li>
                                <div className='flex items-center cursor-pointer hover:scale-105 transform transition duration-300 ease-in-out'>
                                    <a href="https://www.linkedin.com/in/roland-james-gustillo-0b0b0b1a/" target="_blank" rel="noreferrer">
                                    <h2 className="gradient__text2">
                                        2. Roland James Gustillo
                                    </h2>
                                    </a>
                                </div>
                                <p>
                                    Senior QA Engineer, Mosaic Solutions
                                </p>
                                <p className='pb-4'>
                                    +(63) 916-643-3850
                                </p>
                            </li>
                        </Fade> <Fade triggerOnce direction="up" delay={200}>
                            <li>
                                <div className='flex items-center cursor-pointer hover:scale-105 transform transition duration-300 ease-in-out'>
                                    <a href="https://www.linkedin.com/in/rodolfoborgonos/" target="_blank" rel="noreferrer">
                                    <h2 className="gradient__text2">
                                        3. Rodolfo Borgonos Jr.
                                    </h2>
                                    </a>
                                </div>
                                <p>
                                    Senior Engineer, Mosaic Solutions
                                </p>
                                <p className='pb-4'>
                                    +(63) 977-850-8841
                                </p>
                            </li>
                        </Fade> <Fade triggerOnce direction="up" delay={200}>
                            <li>
                                <div className='flex items-center cursor-pointer hover:scale-105 transform transition duration-300 ease-in-out'>
                                    <a href="https://www.linkedin.com/in/peachadamos/" target="_blank" rel="noreferrer">
                                    <h2 className="gradient__text2">
                                        4. Peach Adamos
                                    </h2>
                                    </a>
                                </div>
                                <p>
                                    Director, Onboarding and Implementation, Mosaic Solutions
                                </p>
                                <p className='pb-4'>
                                    +(63) 917-103-0857
                                </p>
                            </li>
                        </Fade>
                    </ul>
                    <div className='nn:pb-2 3xl:pb-[250px]' />
                </div>
            </div>
        </>
    )
}

