import React, { useEffect, useRef } from 'react'
import SideBar from './sidebar'
import aos from 'aos';
import { Link } from 'react-router-dom';

const Header = () => {
    const sidebar = useRef(null);
    const openbar = useRef(null);
    const overleyClose = useRef(null);

    useEffect(() => {
        aos.init();
    }, []);

    useEffect(() => {
        openbar.current.onclick = (e) => {
            sidebar.current.classList.toggle('sidebar-open');
            overleyClose.current.classList.toggle('ovr-open');
        }
        overleyClose.current.onclick = (e) => {
            sidebar.current.classList.toggle('sidebar-open');
            overleyClose.current.classList.toggle('ovr-open');
        }
    }, []);
    return (
        <>
            <header className='relative'>
                <nav className='h-24 bg-transparent overflow-hidden flex flex-row justify-between items-center absolute w-full px-2 top-0'>
                    <div className='text-3xl font-bold'>
                        DreamGirls
                    </div>
                    <ul className='md:flex md:flex-row gap-2 hidden'>
                        <li>
                            <Link to='/#' className='font-bold hover:text-purple-600 transition-colors p-2 rounded-3xl'>Play now</Link>
                        </li>
                        <li>
                            <Link to='/#' className='font-bold hover:text-purple-600 transition-colors p-2 rounded-3xl'>Design</Link>
                        </li>
                        <li>
                            <Link to='/#' className='font-bold hover:text-purple-600 transition-colors p-2 rounded-3xl'>Store</Link>
                        </li>
                        <li>
                            <Link to='/#' className='font-bold hover:text-purple-600 transition-colors p-2 rounded-3xl'>Join the Community</Link>
                        </li>
                        <li>
                            <Link to='/games' className='font-bold hover:text-purple-600 transition-colors p-2 rounded-3xl'>Games</Link>
                        </li>
                        <li>
                            <Link to='/#' className='font-bold hover:text-purple-600 transition-colors p-2 rounded-3xl'>Language</Link>
                        </li>
                    </ul>
                    <div className='font-bold cursor-pointer text-3xl md:hidden' ref={openbar}>
                        &#9776;
                    </div>
                </nav>
                <div className='banner bg-pink-300 min-h-screen absoute top-0 w-full pt-24 pb-4 px-2 bg-no-repeat bg-contain md:bg-cover flex flex-col justify-center md:flex-row md:items-center'>
                    <h1 className='font-bold text-5xl md:text-6xl lg:text-8xl md:w-1/2'>BEST DREAM LIFE MEET OUR AVATARS</h1>
                    <div className='h-full bg-purle-600 md:w-1/2 bg-no-repeat bg-cover bg-center' style={{ backgroundImage: "url('/images/df-removebg-preview.png')" }} >
                        <div className="relative mt-4 overflow-hidden w-full" style={{ height: "500px" }}>
                            <div className="w-600 m-auto relative overflow-hidden h-full flex">
                                <div className="overflow-hidden">
                                    <div className="sldr ch-bg">
                                        <img src="/images/WhatsApp_Image_2024-07-20_at_07.25.41-removebg-preview.png" alt="" />
                                    </div>
                                    <div className="sldr ch-bg-2">
                                        <img src="/images/WhatsApp_Image_2024-07-20_at_07.25.41-removebg-preview.png" alt="" />
                                    </div>
                                    <div className="sldr ch-bg-3">
                                        <img src="/images/WhatsApp_Image_2024-07-20_at_07.25.41-removebg-preview.png" alt="" />
                                    </div>
                                    <div className="sldr ch-bg-4">
                                        <img src="/images/WhatsApp_Image_2024-07-20_at_07.25.41-removebg-preview.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="absolute bottom-5 w-full">
                                <div className="w-600 m-auto px-4 h-full flex justify-between items-center">
                                    <span id="prev" className='z-50'>
                                        <i className="fa fa-arrow-left"></i>
                                    </span>
                                    <div className="h-full flex justify-center w-80 items-center overflow-x-auto gap-3">
                                        <img src="/images/WhatsApp_Image_2024-07-20_at_07.29.43__9_-removebg-preview.png" alt='' className='cursor-pointer h-12 object-cover w-12 rounded-full object-top border border-black' />
                                        <img src="/images/WhatsApp_Image_2024-07-20_at_07.29.43__8_-removebg-preview.png" alt="" className='cursor-pointer h-12 object-cover w-12 rounded-full object-top border border-black' />
                                        <img src="/images/WhatsApp_Image_2024-07-20_at_07.29.43__7_-removebg-preview.png" alt="" className='cursor-pointer h-12 object-cover w-12 rounded-full object-top border border-black' />
                                        <img src="/images/WhatsApp_Image_2024-07-20_at_07.29.43__6_-removebg-preview.png" alt="" className='cursor-pointer h-12 object-cover w-12 rounded-full object-top border border-black' />
                                    </div>
                                    <span id="next" className='z-50'>
                                        <i className="fa fa-arrow-right"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <SideBar overleyClose={overleyClose} sidebar={sidebar} />
        </>
    )
}

export default Header