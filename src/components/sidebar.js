import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = ({overleyClose, sidebar}) => {
    return (
        <>
            <div id="sidebar" className="md:hidden overflow-hidden visible z-50 h-full fixed w-72 top-0 right-[-300px] transition-all text-white bg-slate-950" ref={sidebar}>
                <ul className="h-full px-3 flex flex-col gap-4 py-4">
                    <div className="mb-10">
                        <h3 className="text-2xl font-bold">DreamGirls</h3>
                    </div>
                    <li>
                        <Link to="/#" className="text-base hover:text-blue-500">PLay now</Link>
                    </li>
                    <li>
                        <Link to="/#" className="text-base hover:text-blue-500">Design</Link>
                    </li> 
                    <li>
                        <Link to="/#" className="text-base hover:text-blue-500">Store</Link>
                    </li>
                    <li>
                        <Link to="/#" className="text-base hover:text-blue-500">Join the Community</Link>
                    </li>
                    <li>
                        <Link to="/games" className="text-base hover:text-blue-500">Games</Link>
                    </li>
                    <li>
                        <Link to="/#" className="text-base">Language</Link>
                    </li>
                </ul>
            </div>
            <div className="fixed z-10 h-0 w-0 top-0" id="cl-sidebar"  ref={overleyClose}></div>
        </>
    )
}

export default SideBar