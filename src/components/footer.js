import React from 'react'

const Footer = () => {
    return (
        <div className='min-h-[650px] bg-slate-800 px-4 pt-12 pb-4' style={{ backgroundColor: "#2C2C34" }}>
            <h1 className='my-5 text-5xl font-bold'>DreamGirls</h1>
            <div className='pt-11'>
                <ul className='flex flex-row flex-wrap gap-2'>
                    <li className='w-1/3 md:w-1/4 mb-8'>
                        <a href='#' className='text-white font-bold hover:text-purple-600 transition-colors p-2 text-2xl'>Play now</a>
                    </li>
                    <li className='w-1/3 md:w-1/4 mb-8'>
                        <a href='#' className='text-white font-bold hover:text-purple-600 transition-colors p-2 text-2xl'>Design</a>
                    </li>
                    <li className='w-1/3 md:w-1/4 mb-8'>
                        <a href='#' className='text-white font-bold hover:text-purple-600 transition-colors p-2 text-2xl'>Store</a>
                    </li>
                    <li className='w-1/3 md:w-1/4 mb-8'>
                        <a href='#' className='text-white font-bold hover:text-purple-600 transition-colors p-2 text-2xl'>Community</a>
                    </li>
                    <li className='w-1/3 md:w-1/4 mb-8'>
                        <a href='#' className='text-white font-bold hover:text-purple-600 transition-colors p-2 text-2xl'>Games</a>
                    </li>
                </ul>
            </div>
            <div className='w-full'>
                <ul class="flex flex-row gap-4">
                    <li class="">
                        <a class="" href="#"><i class="fab fa-1x fa-facebook-f text-blue-400"></i></a>
                    </li>
                    <li class="">
                        <a class="" href="#"><i class="fab fa-1x fa-twitter text-blue-400"></i></a>
                    </li>
                    <li class="">
                        <a class="" href="#"><i class="fab fa-1x fa-linkedin-in text-blue-400"></i></a>
                    </li>
                    <li class="">
                        <a class="" href="#"><i class="fab fa-1x fa-instagram text-orange-400"></i></a>
                    </li>
                    <li class="">
                        <a class="" href="#"><i class="fab fa-1x fa-youtube text-red-400"></i></a>
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
                        <a href='#' className='text-white font-bold hover:text-purple-600 transition-colors'>Play now</a>
                    </li>
                    <li>
                        <a href='#' className='text-white font-bold hover:text-purple-600 transition-colors'>Design</a>
                    </li>
                    <li>
                        <a href='#' className='text-white font-bold hover:text-purple-600 transition-colors'>Store</a>
                    </li>
                    <li>
                        <a href='#' className='text-white font-bold hover:text-purple-600 transition-colors'>Community</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer