import React from 'react'
import { Link } from 'react-router-dom'

const Section = () => {
    return (
        <div>
            <div className='h-[700px] md:h-[600px] flex flex-col md:flex-col lg:flex-row gap-2 py-4 px-4 items-center bg-purple-600 bg-no-repeat bg-contain md:bg-cover'>
                <div className='w-full md:w-[600px] mx-auto h-80 md:h-[400px] rounded-lg p-2'>
                    <iframe className='w-full h-full rounded-lg'
                        title='embeded image'
                        src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0">
                    </iframe>
                </div>
                <div className='w-full md:w-[600px] mx-auto lg:w-1/2 rounded-lg px-2'>
                    <h2 className="uppercase text-4xl font-bold">
                        Step into <br /> the Future of<br /> Fashion.
                    </h2>
                    <p className="text-lg my-6 font-medium">
                        Create, Customize, and Conquer in a World Where Your Style Defines You. Begin Your Dream
                        Journey Now.
                    </p>
                    <button className="border-0 font-bold text-2xl text-center p-4 transition-all linear delay-200 rounded-lg bg-yellow-300 w-full md:w-60">
                        Start your journey
                    </button>
                </div>
            </div>
            <div className='flex flex-col md:flex-col lg:flex-row gap-2 p-3 bg-gray-500' style={{ backgroundColor: "#ffb6c1" }}>
                <div className="w-full">
                    <div className="w-full">
                        <h3 className="mt-8 text-4xl text-center font-bold">Discover the Latest<br /> Trends & Top Creations</h3>
                        <p className="text-lg text-center mt-2">
                            Explore fresh styles and exclusive collections, designed for<br /> the fashion-forward avatar.
                        </p>
                    </div>
                    <div className="w-full md:w-4/5 mx-auto my-6 md:flex md:flex-row gap-3 md:justify-between">
                        <div className="rounded-lg text-center md:w-1/3 shadow-lg py-2">
                            <div className="h-56 bg-white-400 overflow-hidden">
                                <img src="/images/WhatsApp_Image_2024-07-20_at_07.29.43__8_-removebg-preview.png" className="h-56 w-full object-cover object-top" alt="" />
                            </div>
                            <div className="">
                                <h3 className="text-lg font-bold mt-3">Neon Nights Collection</h3>
                                <p className="text-xs text-center">
                                    Sleek, sharp, and modern. Cyber Chic is the go-to look <br /> for avatars aiming to blend
                                    elegance
                                    with a tech-inspired edge.
                                </p>
                            </div>
                            {/* <button className="mt-2 px-3 py-2 transition linear delay-150 rounded-xl text-white text-base">
                                Shop cool fashion!
                            </button> */}
                        </div>
                        <div className="rounded-lg text-center md:w-1/3 shadow-lg py-2 my-4 md:my-0">
                            <div className="h-56 bg-white-400 overflow-hidden">
                                <img src="/images/WhatsApp_Image_2024-07-20_at_07.29.43__7_-removebg-preview.png" className="h-56 w-full object-cover object-top" alt="" />
                            </div>
                            <div className="">
                                <h3 className="text-lg font-bold mt-3">Illuminate</h3>
                                <p className="text-xs text-center">
                                    Sleek, sharp, and modern. Cyber Chic is the go-to look <br /> for avatars aiming to blend
                                    elegance
                                    with a tech-inspired edge.
                                </p>
                            </div>
                            {/* <button className="mt-2 px-3 py-2 transition linear delay-150 rounded-xl text-white text-base">
                                Shop cool fashion!
                            </button> */}
                        </div>
                        <div className="rounded-lg text-center md:w-1/3 shadow-lg py-2">
                            <div className="h-56 bg-white-400 overflow-hidden">
                                <img src="/images/WhatsApp_Image_2024-07-20_at_07.29.43__6_-removebg-preview.png" className="h-56 w-full object-cover object-top" alt="" />
                            </div>
                            <div className="">
                                <h3 className="text-lg font-bold mt-3">Cyber Chic</h3>
                                <p className="text-xs text-center">
                                    Sleek, sharp, and modern. Cyber Chic is the go-to look <br /> for avatars aiming to blend
                                    elegance
                                    with a tech-inspired edge.
                                </p>
                            </div>
                            {/* <button className="mt-2 px-3 py-2 transition linear delay-150 rounded-xl text-white text-base">
                                Shop cool fashion!
                            </button> */}
                        </div>
                    </div>
                    {/* <div className="text-center my-4">
                        <button className="text-white rounded-xl px-3 py-2">
                            See more
                        </button>
                    </div> */}
                </div>
            </div>
            <div className='h-[500px] mx-auto flex flex-col md:flex-col lg:flex-row gap-2 py-3 px-4 items-center bg-purple-600 ' style={{}}>
                <div className='w-full lg:w-1/2 h-[300px] md:h-[250px] mx-auto rounded-lg px-4 py-5' style={{backgroundImage:"linear-gradient(rgba(147 51 234 / var(--tw-bg-opacity)),(147 51 234 / var(--tw-bg-opacity)))"}}>
                    <h2 className="uppercase text-4xl font-bold text-white">
                        Join our community
                    </h2>
                    <p className='my-10 font-semibold text-slate-200'>
                        Discuss everything and anything with people on the platform
                    </p>
                    <Link to='/#'>
                        Join now
                    </Link>
                </div>
                <div className='w-full lg:w-1/2 h-[300px] md:h-[250px] mx-auto rounded-lg px-2 bg-purple-500'>
                    <h2 className="uppercase text-4xl font-bold text-white">
                        Need help.
                    </h2>
                    <p className='my-10 font-semibold text-slate-200'>
                        Get answers and help from our customer service
                    </p>
                    <Link to='/#'>
                        Contact us
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Section