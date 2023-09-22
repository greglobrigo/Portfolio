import './About.css'

export default function About() {
    return (
        <>
            <div className="about__header section__padding" id="about">
                <div className="about__header-content">
                    <h1 className="gradient__text">About me</h1>
                    <p className="text-2xl font-semibold">
                        I graduated from College in Divine Word College of Legazpi. I have a bachelor's degree in <span className="gradient__text2">Business and Finance</span>
                    </p>
                      <p className="text-2xl font-semibold">
                        I took a coding bootcamp focusing on React and Ruby on Rails in <a href='https://www.avionschool.com/' target="_blank" rel="noreferrer" className="gradient__text2"><span className="gradient__text2">Avion School</span></a>
                    </p>
                    <p className="text-2xl font-semibold">
                        Before getting into a developer role, I worked as a <span className="gradient__text2">Technical Support Representative</span> for <span className="gradient__text2">3 years,</span><br />
                        for companies like <span className="gradient__text2">Lyft</span> and <span className="gradient__text2">Walmart</span>
                    </p>
                    <p className="text-2xl font-semibold">
                        I am currently working as a <span className="gradient__text2">Software Engineer</span> at <span className="gradient__text2">Mosaic Solutions</span> for almost 2 years.
                    </p>
                    <p className="text-2xl font-semibold">
                        I've been progamming for 3 years, and have built and led projects <br />
                        for companies such as <span className="gradient__text2">SM</span> and <span className="gradient__text2">TMG (The Moment Group of Companies)</span>
                    </p>
                </div>

                <div className="about__header-image gradient__bg__center">
                    <div>
                        <div className="w-[450px] h-[600px] bg-[#3d71df] rounded-lg shadow-lg aws">
                            <img className="w-auto h-auto opacity-80" src="/aws.jpg" alt="greg" />
                        </div>
                        <div className="flex justify-center items-center pt-8">
                        <p className="text-xl font-semibold gradient__text">AWS Training</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}