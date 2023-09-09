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
            <div className="flex">
                <div className="flex w-full pl-16">
                    <h1>Logo</h1>
                </div>
                <div className="flex w-full justify-around">
                    {navItems.map((item, index) => {
                        return (
                            <div key={index}>
                                <a href={item.link}>
                                    {item.name}
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}