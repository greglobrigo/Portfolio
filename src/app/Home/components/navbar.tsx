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
            name: "Contact",
            link: "/contact"
        }
    ]
    return (
        <>
            <nav className="flex bg-gray-700">
                <div className="flex w-full pl-16">
                    <h1>Logo</h1>
                </div>

                <div className="sm:block lg:hidden px-2 hover:cursor-pointer border rounded-md">
                    <div className="w-10 h-1 bg-black my-2"
                    ></div>
                    <div className="w-10 h-1 bg-black my-2"
                    ></div>
                    <div className="w-10 h-1 bg-black my-2"
                    ></div>
                </div>

                <div className="sm:hidden lg:block w-full">
                    <ul className="flex justify-around">
                        {navItems.map((item, index) => {
                            return (
                                <li key={index}>
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