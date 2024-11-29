import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../components/navigation';
import SideBar from '../components/sidebar';
import avatars from '../components/avatars';

const Register = () => {
    const sidebar = useRef(null);
    const openbar = useRef(null);
    const overleyClose = useRef(null);

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
    let [curAvatar, setCurAvatar] = useState('/images/Home1.1.png');

    const changeAvatar = (e, item) => {
        setCurAvatar(item.src);
        setAvatar(item.name);
    }

    let [name, setName] = useState('');
    let [age, setAge] = useState('');
    let [password, setPassword] = useState('');
    let [avatar, setAvatar] = useState('Home1.1.png');
    let [dataError, setDataError] = useState({name:0,age:0,password:0});

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(handleError()) {
            // let res = await fetch('url', {
            //     method:"POST",
            //     body:JSON.stringify({
            //         name, age, password, avatar
            //     })
            // });
            // let response = await res.json();
            await fetch('url', {
                method:"POST",
                body:JSON.stringify({
                    name, age, password, avatar
                })
            });
            // await res.json();
        }else{
            return;
        }
    }

    const handleError = () => {
        // setDataError();
        let err = true;
        let merr = {name:0,age:0,password:0}
        if(password === '' || password.length < 8) {
            merr = {...merr, password:1};
            err = false;
        }
        if(name === '') {
            merr = {...merr, name:1};
            err = false;
        }
        if(age === '') {
            merr = {...merr, age:1};
            err = false;
        }
        
        setDataError(merr);
        return err;
    }
    return (
        <>
            <div className='relative'>
                <Navigation openbar={openbar} />
                <div style={{ "backgroundImage": "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/pexels-apasaric-618079.jpg')" }} className='overflow-hidden banner bg-center min-h-screen absoute top-0 w-full pt-16 pb-4 px-2 bg-no-repeat bg-cover flex flex-col justify-center md:flex-row'>
                    <div className='flex flex-col md:flex-row md:w-[800px]'>
                        <div className='md:w-1/2 flex flex-col py-2'>
                            <div className='mb-2'>
                                <h3 className='font-bold text-2xl text-center  md:text-3xl lg:text-4xl ' data-aos="slide-left">Select your <br />Avatar</h3>
                            </div>
                            <div className="relative w-full" style={{ "height": "400px" }}>
                                <div className="content-body mb-2">
                                    <div className="w-full mx-auto relative h-96">
                                        <img src={curAvatar} className="absolute min-h-40  bottom-0 md:max-h-96" alt="avatar" />
                                    </div>
                                    <div className='py-2 sld-nav mx-auto w-full md:w-56 flex gap-3 justify-center md:justify-start overflow-x-auto overflow-y-hidden'>
                                        {
                                            avatars.map((item, idx) => (
                                                <img key={idx} src={item.thumb} className='thumb rounded-full hover:border-l-gray-950 cursor-pointer' alt={item.name} onClick={(e) => changeAvatar(e, item)}/>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='h-full md:w-1/2'>
                            <div className="w-full md:max-w-xs py-4">
                                <form className="bg-whte shadow-lg rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                                    <div className="mb-4">
                                        <label className="block text-black text-sm font-bold mb-2" htmlFor="username">
                                            Username
                                        </label>
                                        <input className={(dataError.name === 1)?"shadow border border-red-500  rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline":"shadow border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"} onChange={(e) => setName(e.target.value)} id="name" type="text" placeholder="name" />
                                        {
                                            (dataError.name === 1)&&(
                                                <p className="text-red-500 text-xs italic">Please enter a username.</p>
                                            )
                                        }
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-black text-sm font-bold mb-2" htmlFor="age">
                                            Age
                                        </label>
                                        <input className={(dataError.age === 1)?"shadow border border-red-500  rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline":"shadow border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"} onChange={(e) => setAge(e.target.value)} id="age" type="number" placeholder="Age" />
                                        {
                                            (dataError.age === 1)&&(
                                                <p className="text-red-500 text-xs italic">Please enter your age.</p>
                                            )
                                        }
                                    </div>
                                    <div className="mb-6">
                                        <label className="block text-black text-sm font-bold mb-2" htmlFor="password">
                                            Password
                                        </label>
                                        <input className={(dataError.password === 1)?"shadow border border-red-500 rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline":"shadow border rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"}  onChange={(e) => setPassword(e.target.value)} id="password" type="password" placeholder="******************" />
                                        {
                                            (dataError.password === 1)&&(
                                                <p className="text-red-500 text-xs italic">Please choose a password.</p>
                                            )
                                        }
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                            Play now!
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <Link to='/' className='font-bold text-black'>Go back</Link>
                        </div>
                    </div>
                </div>
            </div>

            <SideBar overleyClose={overleyClose} sidebar={sidebar} />
        </>
    )
}

export default Register