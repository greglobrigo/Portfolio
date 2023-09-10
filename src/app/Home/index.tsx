"use client"

import { Navbar } from "./components/navbar";
import { useState, useRef, useEffect } from 'react'
import { Fade } from 'react-awesome-reveal'


export function Home() {

    return (
        <>
            <Navbar />
            <main>
                <section className="flex flex-col h-[90vh]">
                    <div className="nn:flex-col-reverse sm:flex-row nn:justify-center sm:justify-around flex items-center h-full w-full ">
                        <div className="flex-row nn:pt-8 sm:pt-0">
                            <Fade direction="left" triggerOnce>
                                <h1 className="text-6xl font-bold">Hello, I'm Greg.</h1>
                                <h2 className="text-4xl nn:text-center font-semibold">I'm a self taught programmer.</h2>
                            </Fade>
                        </div>
                        <Fade direction="right" triggerOnce>
                            <div className="flex nn:pb-8 sm:pt-0">
                                <img src='/selfie3.jpg' alt="aws" className="w-[240px] h-[320px] rounded-[25%] object-fill shadow-2xl" />
                            </div>
                        </Fade>
                    </div>
                </section>
                <section className="flex flex-col h-[90vh]">
                    <div className="nn:flex-col-reverse sm:flex-row nn:justify-center sm:justify-around flex items-center h-full w-full ">
                        <div className="flex-row nn:pt-8 sm:pt-0">
                            <h1 className="text-4xl font-bold">Hello, I'm Greg.</h1>
                            <h2 className="text-2xl font-semibold">I'm a full-stack developer.</h2>
                        </div>
                        <div className="flex nn:pb-8 sm:pt-0">
                            <img src='/selfie.jpg' alt="aws" className="w-[240px] h-[320px] rounded-[50%] object-fill shadow-2xl" />
                        </div>
                    </div>
                </section>
            </main >
        </>
    )
}