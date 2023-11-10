"use client"
import './work.css';
import { Fade } from 'react-awesome-reveal'
import Image from 'next/image'


export default function Work() {
    return (
        <>
            <div className="work__header section__padding gradient__bg__left" id="work">
                <div className="work__header-content">
                    <Fade triggerOnce direction='up'>
                        <h1 className="gradient__text pb-2">Work Experience</h1>
                        <p className='pb-8'>
                            Work Solutions is where I currently work as a software engineer. We&apos;re a medium sized software company catering to the food and beverage industry,
                            where we build custom software for our clients.
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