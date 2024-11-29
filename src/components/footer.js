import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='min-h-[650px] bg-slate-800 px-4 pt-12 pb-4' style={{ backgroundColor: "#2C2C34" }}>
            <h1 className='my-5 text-5xl font-bold text-white'>DreamGirls</h1>
            <div className='pt-11'>
                <ul className='flex flex-row flex-wrap gap-2'>
                    <li className='w-1/3 md:w-1/4 mb-8'>
                        <Link to='/#' className='text-white font-bold hover:text-purple-600 transition-colors p-2 text-xl'>Play now</Link>
                    </li>
                    <li className='w-1/3 md:w-1/4 mb-8'>
                        <Link to='/#' className='text-white font-bold hover:text-purple-600 transition-colors p-2 text-xl'>Design</Link>
                    </li>
                    <li className='w-1/3 md:w-1/4 mb-8'>
                        <Link to='/#' className='text-white font-bold hover:text-purple-600 transition-colors p-2 text-xl'>Store</Link>
                    </li>
                    <li className='w-1/3 md:w-1/4 mb-8'>
                        <Link to='/#' className='text-white font-bold hover:text-purple-600 transition-colors p-2 text-xl'>Community</Link>
                    </li>
                    <li className='w-1/3 md:w-1/4 mb-8'>
                        <Link to='/games' className='text-white font-bold hover:text-purple-600 transition-colors p-2 text-xl'>Games</Link>
                    </li>
                </ul>
            </div>
            <div className='w-full'>
                <ul className="flex flex-row gap-4">
                    <li className="">
                        <Link className="" to="/#"><i className="fab fa-1x fa-facebook-f text-blue-400"></i></Link>
                    </li>
                    <li className="">
                        <Link className="" to="/#"><i className="fab fa-1x fa-twitter text-blue-400"></i></Link>
                    </li>
                    <li className="">
                        <Link className="" to="/#"><i className="fab fa-1x fa-linkedin-in text-blue-400"></i></Link>
                    </li>
                    <li className="">
                        <Link className="" to="/#"><i className="fab fa-1x fa-instagram text-orange-400"></i></Link>
                    </li>
                    <li className="">
                        <Link className="" to="/#"><i className="fab fa-1x fa-youtube text-red-400"></i></Link>
                    </li>
                </ul>
            </div>

            <div className='mt-28 w-full'>
                <p className='font-semibold text-white md:w-1/2 mb-12'>
                    © 2024 dreamgirls. All Rights Reserved.
                    lorem ipsum dolor set lorem ipsum dolor set lorem ipsum dolor set 
                    lorem ipsum dolor set lorem ipsum dolor set lorem ipsum dolor set 
                    lorem ipsum dolor set lorem ipsum dolor set lorem ipsum dolor set 
                    lorem ipsum dolor set lorem ipsum dolor set lorem ipsum dolor set 
                </p>
                <ul className='flex flex-row flex-wrap gap-4'>
                    <li>
                        <Link to='#' className='text-white font-bold hover:text-purple-600 transition-colors'>Play now</Link>
                    </li>
                    <li>
                        <Link to='#' className='text-white font-bold hover:text-purple-600 transition-colors'>Design</Link>
                    </li>
                    <li>
                        <Link to='#' className='text-white font-bold hover:text-purple-600 transition-colors'>Store</Link>
                    </li>
                    <li>
                        <Link to='#' className='text-white font-bold hover:text-purple-600 transition-colors'>Community</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer