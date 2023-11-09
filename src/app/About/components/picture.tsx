'use client';
import '../About.css'
import { Fade } from 'react-awesome-reveal'
import { useState } from 'react'
import Image from 'next/image'


export default function AboutPic() {
    const [show, setShow] = useState(false)
    return (
        <>
            <div onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} onClick={() => setShow(!show)} className='cursor-pointer'>
                {
                    show ?
                        <div>
                            <div className="bg-[#3d71df] rounded-lg shadow-lg aws">
                                <Image width={275} height={600}
                                    className="w-auto h-auto opacity-80" src="/gym.jpg" alt="gym" />
                            </div>
                            <div className="flex justify-center items-center pt-8">
                                <p className="text-xl font-semibold gradient__text">Gym</p>
                            </div>
                        </div>
                        :
                        <div>
                            <div className="bg-[#3d71df] rounded-lg shadow-lg aws">
                                <Image width={275} height={600}
                                    className="w-auto h-auto opacity-80" src="/aws.jpg" alt="aws training" />
                            </div>
                            <div className="flex justify-center items-center pt-8">
                                <p className="text-xl font-semibold gradient__text">AWS Training</p>
                            </div>
                        </div>
                }
            </div >
        </>
    )
}