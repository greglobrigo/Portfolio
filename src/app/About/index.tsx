'use client'
import './About.css'
import AboutPic from './components/picture'
import { Fade } from 'react-awesome-reveal'

export default function About() {
    return (
        <>
            <div className="about__header section__padding gradient__bg__left" id="about">
                <div className="about__header-content">
                    <Fade triggerOnce direction="up" >
                        <h1 className="gradient__text">About me</h1>
                    </Fade>
                    <Fade triggerOnce direction="up" delay={200}>
                        <p className="text-2xl font-semibold">
                            I graduated from College in Divine Word College of Legazpi. I have a bachelor&apos;s
                            degree in <span className="gradient__text2">Business and Finance</span>
                        </p>
                    </Fade>
                    <Fade triggerOnce direction="up" delay={400}>
                        <p className="text-2xl font-semibold">
                            I took a coding bootcamp focusing on React and Ruby on Rails in <a href='https://www.avionschool.com/' target="_blank" rel="noreferrer" className="gradient__text2"><span className="gradient__text2">Avion School</span></a>
                        </p>
                    </Fade>
                    <Fade triggerOnce direction="up" delay={600}>
                        <p className="text-2xl font-semibold">
                            Before getting into a developer role, I worked as a <span className="gradient__text2">Technical Support Representative</span> for <span className="gradient__text2">3 years,</span>
                            for companies such as <span className="gradient__text2">Lyft</span> and <span className="gradient__text2">Walmart</span>
                        </p>
                    </Fade>
                    <Fade triggerOnce direction="up" delay={800}>
                        <p className="text-2xl font-semibold">
                            I am currently working as a <span className="gradient__text2">Software Engineer</span> at <span className="gradient__text2">Mosaic Solutions</span> for 2 years.
                        </p>
                    </Fade>
                    <Fade triggerOnce direction="up" delay={1000}>
                        <p className="text-2xl font-semibold">
                            I&apos;ve been progamming for 3 years, and have built and led projects
                            for companies such as <span className="gradient__text2">SM Supermalls</span>, <span className="gradient__text2">TMG (The Moment Group of Companies)</span> and <span className="gradient__text2">The Grid Food Market</span>
                        </p>
                    </Fade>
                    <Fade triggerOnce direction="up" delay={1200}>
                        <p className="text-2xl font-semibold">
                            I try my best to stay fit by going to the
                            <span className="gradient__text2"> gym </span> whenever I can.
                        </p>
                    </Fade>
                </div>
                <div className="about__header-image gradient__bg__center">
                    <AboutPic />
                </div>
            </div>
        </>
    )
}