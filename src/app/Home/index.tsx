import { Navbar } from "./components/navbar";

export function Home() {
    return (
        <>
            <Navbar/>
            <main>
                <section className="flex flex-row items-center justify-around h-[90vh]">
                    <div className="flex flex-col items-center justify-center h-full">
                        <h1 className="text-4xl font-bold">Hello, I'm Greg.</h1>
                        <h2 className="text-2xl font-semibold">I'm a full-stack developer.</h2>
                    </div>
                    <div className="flex flex-col items-center justify-center h-full">
                        <h1 className="text-4xl font-bold">Hello, I'm Greg.</h1>
                        <h2 className="text-2xl font-semibold">I'm a full-stack developer.</h2>
                    </div>
                </section>
            </main>
        </>
    )
}