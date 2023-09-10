import { Navbar } from "./components/navbar";
import { useState, useRef, useEffect } from 'react'
import autoAnimate from '@formkit/auto-animate'

export function Home() {
    // const [show, setShow] = useState(false)
    // const parent = useRef(null)

    // useEffect(() => {
    //     parent.current && autoAnimate(parent.current)
    // }, [parent])

    // const reveal = () => setShow(!show)

    return (
        <>
            <Navbar />
            <main>
                <section className="flex flex-col h-[90vh]">
                    <div className="nn:flex-col-reverse sm:flex-row nn:justify-center sm:justify-around flex items-center h-full w-full ">
                        <div className="flex-row nn:pt-8 sm:pt-0">
                            <h1 className="text-6xl font-bold">Hello, I'm Greg.</h1>
                            <h2 className="text-4xl font-semibold">I'm a full-stack developer.</h2>
                        </div>
                        <div className="flex nn:pb-8 sm:pt-0">
                            <img src='/selfie.jpg' alt="aws" className="w-[240px] h-[320px] rounded-[50%] object-fill shadow-2xl" />
                        </div>
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
            </main>
        </>
    )
}