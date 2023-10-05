'use client';
import '../About.css'
import { Fade } from 'react-awesome-reveal'
import { useState } from 'react'
//use Image from nextjs to optimize image
import Image from 'next/image'


export default function AboutPic() {
    const [show, setShow] = useState(false)
    return (
        <>
            <div onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} className='cursor-pointer'>
                <Fade direction="right">
                    {
                        show ?
                            <div>
                                <div className="w-[450px] h-[600px] bg-[#3d71df] rounded-lg shadow-lg aws">
                                    <Image width={450} height={600}
                                    className="w-auto h-auto opacity-80" src="/gym.jpg" alt="gym" />
                                </div>
                                <div className="flex justify-center items-center pt-8">
                                    <p className="text-xl font-semibold gradient__text">Gym</p>
                                </div>
                            </div>
                            :
                            <div>
                                <div className="w-[450px] h-[600px] bg-[#3d71df] rounded-lg shadow-lg aws">
                                    <Image width={450} height={600}
                                    className="w-auto h-auto opacity-80" src="/aws.jpg" alt="aws training" />
                                </div>
                                <div className="flex justify-center items-center pt-8">
                                    <p className="text-xl font-semibold gradient__text">AWS Training</p>
                                </div>
                            </div>
                    }
                </Fade>
            </div >
        </>
    )
}