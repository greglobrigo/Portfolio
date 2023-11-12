"use client"
import './contact.css';
import { Fade } from 'react-awesome-reveal'
import Image from 'next/image'


export default function Contact() {
    return (
        <>
            <div className="personal__header section__padding gradient__bg__left" id="personal">
                <div className="personal__header-content">
                    <Fade triggerOnce direction='up' delay={200}>
                        <h1 className="gradient__text pb-2" id="projects">Contact</h1>
                    </Fade>
                </div>
            </div>
        </>
    )
}

