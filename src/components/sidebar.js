import React from 'react'

const SideBar = () => {
    return (
        <>
            <div id="sidebar" className="md:hidden overflow-hidden visible z-50 h-full fixed w-72 top-0 right-[-300px] transition-all text-white">
                <ul className="h-full px-3 flex flex-col gap-4 py-4">
                    <div className="mb-10">
                        <h3 className="text-2xl font-bold">DreamGirls</h3>
                    </div>
                    <li>
                        <a href="#" className="text-base hover:text-blue-500">Create Your Avatar</a>
                    </li>
                    <li>
                        <a href="#" className="text-base hover:text-blue-500">Explore Worlds</a>
                    </li>
                    <li>
                        <a href="#" className="text-base hover:text-blue-500">Shop Fashion</a>
                    </li>
                    <li>
                        <a href="#" className="text-base hover:text-blue-500">Join the community</a>
                    </li>
                    <li>
                        <a href="#" className="text-base hover:text-blue-500">Play Games</a>
                    </li>
                    <li>
                        <a href="#" className="text-base">Language</a>
                    </li>
                </ul>
            </div>
            <div className="fixed z-10 h-0 w-0 top-0" id="cl-sidebar"></div>
        </>
    )
}

export default SideBar