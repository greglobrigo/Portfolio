import './About.css'

export default function About() {
    return (
        <>
            <div className="flex justify-around items-center" id="about">
                <div className=''>
                    <h1 className="text-5xl font-bold gradient__text">About me</h1>
                    <p className="text-2xl font-semibold">
                        I&apos;m a software engineer with a passion for building products that
                        <span className="gradient__text2"> make a difference. </span>
                        I like keeping up with the latest technologies including <span className="gradient__text2">AI </span>
                        and enjoy
                        <span className="gradient__text2"> solving problems</span> with
                        <span className="gradient__text2"> creativity</span> and
                        <span className="gradient__text2"> efficiency</span>.
                    </p>
                </div>

                <div>
                    <div className="w-[450px] h-[600px] bg-[#3d71df] rounded-lg shadow-lg">
                    <img className="w-auto h-auto opacity-80" src="/aws.jpg" alt="greg" />
                    </div>
                </div>

            </div>
        </>
    )
}