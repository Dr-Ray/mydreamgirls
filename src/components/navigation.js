import React from 'react'
import { Link } from 'react-router-dom'
const Navigation = ({openbar}) => {
    return (
        <nav className='h-20 bg-transparent overflow-hidden flex flex-row justify-between items-center absolute w-full px-2 top-0'>
            <div className='text-3xl font-bold'>
                DG
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
    )
}

export default Navigation