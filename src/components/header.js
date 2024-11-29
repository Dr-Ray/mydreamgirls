import React, { useEffect, useRef } from 'react'
import SideBar from './sidebar'
import { Link } from 'react-router-dom';
import Navigation from './navigation';
import aos from 'aos';

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
                <Navigation openbar={openbar}/>

                <div style={{ "backgroundImage": "url('/images/pexels-apasaric-618079.jpg')" }}  className='overflow-hidden banner bg-center min-h-screen absoute top-0 w-full pt-24 pb-4 px-2 bg-no-repeat bg-cover flex flex-col justify-center md:flex-row'>
                    <div className='md:w-1/2 flex flex-col py-2'>
                        <div className='mb-8'>
                            <h1 className='font-bold text-4xl text-center md:text-left md:text-6xl lg:text-7xl mb-10' data-aos="slide-left">BEST DREAM LIFE</h1>
                            <h3 className='font-bold text-2xl text-center  md:text-3xl lg:text-4xl ' data-aos="slide-left">Meet Our Avatars</h3>
                        </div>
                        <div className='text-center'>
                            <Link to='/register' className='block btn mt-10 w-44 mx-auto' type='button'>Play</Link>
                        </div>
                    </div>

                    <div className='h-full md:w-1/2'>
                        <div className="relative w-full" style={{ "height": "500px" }}>
                            <div className="content-body mb-2 md:w-[600px] md:absolute md:bottom-0">
                                <div className="w-full mx-auto relative h-96">
                                    <img src="/images/Home1.1.png" className="absolute min-h-40 bottom-0 md:max-h-96 left-[-150px] md:left-[0px]" alt="" />
                                    <img src="/images/Home1.3.png" className="absolute min-h-40 bottom-0 md:max-h-96 left-[-90px] md:left-[-80px]" alt="" />
                                    <img src="/images/Home page 3.png" className="absolute min-h-40 bottom-0 md:max-h-96 left-[-30px] md:left-[-150px]" alt="" />
                                    <img src="/images/Home1.5.png" className="absolute min-h-40 bottom-0 md:max-h-96 right-[-30px] md:right-[-100px]" alt="" />
                                    <img src="/images/home page 2.png" className="absolute min-h-40 bottom-0 md:max-h-96 right-[-80px] md:right-[-200px]" alt="" />
                                    <img src="/images/Glamour Girl (6)300dpi.png" className="absolute min-h-40 bottom-0 md:max-h-96 right-[-130px] md:right-[0px]" alt="" />
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