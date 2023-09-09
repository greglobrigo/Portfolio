'use client'
import { useState, useEffect } from 'react'


export function Navbar() {
    const navItems = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "About",
            link: "/about"
        },
        {
            name: "Projects",
            link: "/projects"
        },
        {
            name: "Download CV",
            link: "/download-cv"
        }
    ]
    const [navOpen, setNavOpen] = useState<boolean>(false)
    useEffect(() => {
        window.addEventListener('resize', () => {
            setNavOpen(false)
        })
        document.body.addEventListener('click', () => {
            setNavOpen(false)
        })
        return () => {
            window.removeEventListener('resize', () => {
                setNavOpen(false)
            })
            document.body.removeEventListener('click', () => {
                setNavOpen(false)
            })
        }
    }, [])

    return (
        <>
            <nav className="flex h-20">
                <div className="flex w-full pl-16">
                    <h1 className="my-auto text-4xl font-extrabold">Greg.<span className="text-xl font-semibold">dev</span></h1>
                </div>

                <div onClick={() => setNavOpen(!navOpen)}
                    className="nn:block lg:hidden px-2 mx-8 hover:cursor-pointer border rounded-md my-auto">
                    <div className="w-10 h-1 bg-black my-2"></div>
                    <div className="w-10 h-1 bg-black my-2"></div>
                    <div className="w-10 h-1 bg-black my-2"></div>
                </div>


                {navOpen && <div
                    className="lg:hidden w-1/2 h-full absolute top-0 right-0 z-10 bg-white rounded-md shadow-md animate-slideInRight">
                    <ul className="flex flex-col">
                        {navItems.map((item, index) => {
                            return (
                                <li key={index} className="mx-auto text-xl my-8 font-semibold px-4 hover:cursor-pointer rounded-xl hover:bg-black hover:text-white">
                                    <a
                                    // href={item.link}
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                }

                <div className="nn:hidden lg:block w-full my-auto">
                    <ul className="flex justify-around">
                        {navItems.map((item, index) => {
                            return (
                                <li key={index} className="text-xl font-semibold px-4 hover:cursor-pointer rounded-xl hover:bg-black hover:text-white transition duration-300">
                                    <a
                                    // href={item.link}
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </nav>
        </>
    )
}