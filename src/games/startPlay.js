import React from 'react'
import { Link } from 'react-router-dom'

const StartPlay = ({ img, name, setPlay }) => {
    const toggleFullScreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }

    const rotateLandsacpe = () => {
        const oppositeOrientation = window.screen.orientation.type.startsWith("portrait") ? "landscape" : "portrait";
        window.screen.orientation.lock(oppositeOrientation).then(() => {
                console.log(oppositeOrientation);
            }).catch((error) => {
                console.log(error);
            });
    }


    const playGame = () => {
        toggleFullScreen();
        rotateLandsacpe();
        setPlay(true);
    }
    return (
        <>
            <div className='px-4 flex flex-row justify-between items-center mb-3 py-3'>
                <Link to={"/games"}>back</Link>
                <h1 className='text-center text-xl font-semibold'>Games</h1>
                <div></div>
            </div>
            <div className='flex flex-col gap-3 items-center justify-center md:w-[600px] mx-auto px-4 py-2'>
                <div className='rounded-lg h-[200px] md:h-[300px] w-80 md:w-[400px] bg-purple-500 overflow-hidden '>
                    <img alt={name} src={img} className='h-full md:h-auto w-full object-cover' />
                </div>
                <div className='text-center'>
                    <h2 className='my-2 font-bold text-3xl'>{name}</h2>
                    <p className='text-sm font-medium mb-2'>Game shackles</p>
                    <button className='rounded-full bg-green-800 text-white font-semibold px-10 py-1' onClick={playGame}>Play</button>
                </div>
            </div>
        </>
    )
}

export default StartPlay