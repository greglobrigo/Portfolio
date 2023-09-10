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
            name: "Resume",
            link: "/download-cv"
        }
    ]
    const [navOpen, setNavOpen] = useState<boolean>(false)
    const [darkMode, setDarkMode] = useState<boolean>(false)

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
        if (!darkMode) {
            document.documentElement.style.setProperty('--foreground-rgb', '255, 255, 255')
            document.documentElement.style.setProperty('--background-start-rgb', '0, 0, 0')
            document.documentElement.style.setProperty('--background-end-rgb', '0, 0, 0')
        } else {
            document.documentElement.style.setProperty('--foreground-rgb', '0, 0, 0')
            document.documentElement.style.setProperty('--background-start-rgb', '214, 219, 220')
            document.documentElement.style.setProperty('--background-end-rgb', '255, 255, 255')
        }
    }

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
            <nav className="flex h-[10vh]">
                <div className="flex w-full nn:pl-8 sm:pl-16 my-auto">
                    <div className="flex">
                        <h1 className="xs:text-xl sm:text-4xl font-extrabold">Greg.<span className="xs:text-sm sm:text-xl font-semibold">dev</span></h1>
                    </div>
                    <div className="flex my-auto pl-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                        </svg>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input onClick={toggleDarkMode}
                            type="checkbox" value={`darkMode`} className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                        </svg>
                    </div>
                </div>

                <div onClick={() => setNavOpen(!navOpen)}
                    className="nn:block lg:hidden xs:px-1 xs:mx-6 sm:px-2 sm:mx-8 hover:cursor-pointer border rounded-md my-auto">
                    <div className="w-10 h-1 bg-black my-2"></div>
                    <div className="w-10 h-1 bg-black my-2"></div>
                    <div className="w-10 h-1 bg-black my-2"></div>
                </div>


                {navOpen && <div
                    className="lg:hidden w-1/2 h-full absolute top-0 right-0 z-10 bg-white rounded-md shadow-md animate-slideInRight">
                    <ul className="flex flex-col">
                        {navItems.map((item, index) => {
                            return (
                                <li key={index} className="xs:text-lg sm:text-xl mx-auto my-8 font-semibold px-4 hover:cursor-pointer rounded-xl hover:bg-black hover:text-white">
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