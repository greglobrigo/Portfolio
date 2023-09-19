import './About.css'

export default function About() {
    return (
        <>
            <div className="about__header section__padding" id="about">
                <div className="about__header-content">
                    <h1 className="gradient__text">About me</h1>
                    <p className="text-2xl font-semibold">
                        I have a bachelor's degree in <span className="gradient__text2">Business and Finance</span>
                    </p>
                    <p className="text-2xl font-semibold">
                        Before getting into tech, I worked as a <span className="gradient__text2">Technical Support Representative</span> for <span className="gradient__text2">3 years,</span><br />
                        for companies like <span className="gradient__text2">Lyft</span> and <span className="gradient__text2">Walmart</span>
                    </p>
                    <p className="text-2xl font-semibold">
                        I am currently working as a <span className="gradient__text2">Software Engineer</span> at <span className="gradient__text2">Mosaic Solutions</span>
                    </p>
                    <p className="text-2xl font-semibold">
                        I've been working as a developer for almost 3 years, and have built and led projects <br />
                        for companies such as <span className="gradient__text2">SM</span> and <span className="gradient__text2">TMG (The Moment Group of Companies)</span>
                    </p>
                </div>

                <div className="about__header-image">
                    <div>
                        <div className="w-[450px] h-[600px] bg-[#3d71df] rounded-lg shadow-lg aws">
                            <img className="w-auto h-auto opacity-80" src="/aws.jpg" alt="greg" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}