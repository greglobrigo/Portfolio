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
    return (
        <>
            <nav className="flex h-20">
                <div className="flex w-full pl-16 hover:cursor-pointer">
                    <h1 className="my-auto text-4xl font-extrabold">Greg.<span className="text-xl font-semibold">dev</span></h1>
                </div>

                <div className="nn:block lg:hidden px-2 mx-8 hover:cursor-pointer border rounded-md my-auto">
                    <div className="w-10 h-1 bg-black my-2"></div>
                    <div className="w-10 h-1 bg-black my-2"></div>
                    <div className="w-10 h-1 bg-black my-2"></div>
                </div>

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