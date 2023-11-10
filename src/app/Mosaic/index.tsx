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
                    <p className='pb-8'>
                        Mosaic Solutions is where I currently work as a software engineer. We&apos;re a medium sized software company catering to the food and beverage industry,
                        where we build custom software for our clients.
                    </p>
                    </Fade>
                    <div className='flex xl:flex-row justify-center items-center flex-col gap-10'>
                        <a href="https://www.mosaic-solutions.com/careers" target="_blank" rel="noreferrer">
                            <Image
                                height={500} width={500}
                                src="/mosaic-team.jpg"
                                className='rounded-xl h-full min-w-[300px] min-h-[300px] hover:scale-105 transition duration-300 ease-in-out cursor-pointer'
                                alt="Mosaic" />
                        </a>
                        <a href="https://www.mosaic-solutions.com/" target="_blank" rel="noreferrer">
                            <Image
                                height={500} width={500}
                                src="/mosaic-team2.jpg"
                                className='rounded-xl h-full min-w-[300px] min-h-[300px] hover:scale-105 transition duration-300 ease-in-out cursor-pointer'
                                alt="Mosaic2" />
                        </a>
                    </div>
                </div>
                <div className="flex flex-[1]"></div>
            </div>
        </>
    )
}