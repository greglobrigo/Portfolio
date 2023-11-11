"use client"
import './mosaic.css';
import { Fade } from 'react-awesome-reveal'
import Image from 'next/image'


export default function Mosaic() {
    return (
        <>
            <div className="mosaic__header section__padding gradient__bg__left" id="mosaic">
                <div className="mosaic__header-content">
                    <Fade triggerOnce direction='up'>
                        <h1 className="gradient__text pb-2">Mosaic Solutions</h1>
                        <p>
                            Mosaic Solutions is where I currently work as a software engineer. We&apos;re a medium sized software and analytics company catering to the food and beverage industry,
                            where we build custom software for our clients.
                            I've worked with some of the best engineers in the industry here and I've learned a lot from them.
                            We also observe Scrum and Agile methodologies in our software development lifecycle.
                        </p>
                        <p className='pb-8'>
                            Tags: Scrum, Agile, Project Management, CI/CD, DevOps
                        </p>
                    </Fade>
                    <div className='flex xl:flex-row justify-center items-center flex-col gap-10'>
                        <Fade triggerOnce direction='up'>
                            <a href="https://www.mosaic-solutions.com/careers" target="_blank" rel="noreferrer">
                                <Image
                                    height={500} width={500}
                                    src="/mosaic-team.jpg"
                                    className='rounded-xl h-full min-w-[300px] min-h-[300px] hover:scale-105 transition duration-300 ease-in-out cursor-pointer'
                                    alt="Mosaic" />
                            </a>
                        </Fade>
                        <Fade triggerOnce direction='up'>
                            <a href="https://www.mosaic-solutions.com/" target="_blank" rel="noreferrer">
                                <Image
                                    height={450} width={600}
                                    src="/mosaic-team2.jpg"
                                    className='rounded-xl h-full min-w-[300px] min-h-[200px] hover:scale-105 transition duration-300 ease-in-out cursor-pointer'
                                    alt="Mosaic2" />
                            </a>
                        </Fade>
                    </div>
                </div>
                <div className="flex flex-[1]"></div>
            </div>
        </>
    )
}