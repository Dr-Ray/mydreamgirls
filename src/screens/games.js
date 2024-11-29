import React from 'react'
import { Link } from 'react-router-dom'

const GameScreen = () => {
  return (
    <>
      <div className='px-4 flex flex-row justify-between items-center mb-5 py-5'>
        <Link to={"/"}>Home</Link>
        <h1 className='text-center text-xl font-semibold'>Games</h1>
        <div></div>
      </div>
      <Link to="/games/pacman" className='flex flex-row gap-4 md:w-[600px] px-4'>
        <div className='rounded-lg h-[200px] md:h-[300px] w-1/2 md:w-[400px] bg-purple-500 overflow-hidden '>
          <img alt='' src='/images/giphy.gif' className='h-full md:h-auto w-full object-cover' />
        </div>
        <div>
          <p className='text-sm font-medium'>Game of the week</p>
          <h2 className='my-6 font-bold text-2xl'>Pacman</h2>
          <p className='text-sm font-medium mb-4'>Game shackles</p>
          <button className='rounded-full bg-green-800 text-white font-semibold px-10 py-1'>Play</button>
        </div>
      </Link>

      <div className='px-4 w-full'>
        <div className='my-6 h-60 w-full rounded-lg bg-black'>Banner (Advert)</div>
      </div>

      <div>
        <h2 className='font-bold px-4 mb-4'>Top three games</h2>
        <div className='flex flex-row gap-4 md:w-[600px] px-4 mb-4'>
          <div className='rounded-lg h-[200px] md:h-60 w-2/3 md:w-[400px] bg-purple-500 overflow-hidden'>
            <img alt='' src='/images/giphy.gif' className='h-full md:h-auto w-full object-cover' />
          </div>
          <div>
            <p className='text-sm font-medium'>Featured Game</p>
            <h2 className='my-2 font-bold text-lg'>Pacman</h2>
            <p className='text-sm font-medium mb-2'>Game shackles</p>
            <button className='rounded-lg border border-green-800 text-green-800 font-semibold px-10 py-1'>Play</button>
          </div>
        </div>
        <div className='flex flex-row gap-4 md:w-[600px] px-4 mb-4'>
          <div className='rounded-lg h-[200px] md:h-h-60 w-2/3 md:w-[400px] bg-purple-500 overflow-hidden'>
            <img alt='' src='/images/whac-a-mole.gif' className='h-full md:h-auto w-full object-cover' />
          </div>
          <div>
            <p className='text-sm font-medium'>Featured Game</p>
            <h2 className='my-2 font-bold text-lg'>Whack a mole</h2>
            <p className='text-sm font-medium mb-2'>Game shackles</p>
            <button className='rounded-lg border border-green-800 text-green-800 font-semibold px-10 py-1'>Play</button>
          </div>
        </div>
        <div className='flex flex-row gap-4 md:w-[600px] px-4 mb-4'>
          <div className='rounded-lg h-[200px] md:h-h-60 w-2/3 md:w-[400px] bg-purple-500 overflow-hidden'>
            <img alt='' src='/images/giphy1.gif' className='h-full md:h-auto w-full object-cover' />
          </div>
          <div>
            <p className='text-sm font-medium'>Featured Game</p>
            <h2 className='my-2 font-bold text-lg'>Jumping Jacks</h2>
            <p className='text-sm font-medium mb-2'>Game shackles</p>
            <button className='rounded-lg border border-green-800 text-green-800 font-semibold px-10 py-1'>Play</button>
          </div>
        </div>
      </div>

      <div>
        <h1 className='font-bold text-xl px-4 mt-8 mb-4'>Mini Games</h1>
        <div className='px-4 w-full flex flex-row gap-2 overflow-auto'>
          <Link to="/#" className='flex flex-col gap-2 mb-4'>
            <img alt='' src='/images/giphy.gif' className='rounded-lg max-h-[150px] md:h-h-60 min-w-[200px] bg-purple-500 overflow-hidden md:h-auto object-cover' />
            <p className='text-sm font-medium'>Pacman</p>
          </Link>
          <Link to="/#" className='flex flex-col gap-2 mb-4'>
          <img alt='' src='/images/whac-a-mole.gif' className='rounded-lg max-h-[150px] md:h-h-60 min-w-[200px] bg-purple-500 overflow-hidden md:h-auto object-cover'/>
            <p className='text-sm font-medium'>Whack a mole</p>
          </Link>
          <Link to="/#" className='flex flex-col gap-2 mb-4'>
            <img alt='' src='/images/giphy.gif' className='rounded-lg max-h-[150px] md:h-h-60 min-w-[200px] bg-purple-500 overflow-hidden md:h-auto object-cover'/>
            <p className='text-sm font-medium'>Jumping jack</p>
          </Link>
          <Link to="/#" className='flex flex-col gap-2 mb-4'>
            <img alt='' src='/images/giphy1.gif' className='rounded-lg max-h-[150px] md:h-h-60 min-w-[200px] bg-purple-500 overflow-hidden md:h-auto object-cover'/>
            <p className='text-sm font-medium'>Frey</p>
          </Link>
        </div>
        <div className='px-4 w-full flex flex-row gap-2 overflow-auto'>
          <Link to="/#" className='flex flex-col gap-2 mb-4'>
            <img alt='' src='/images/giphy.gif' className='rounded-lg max-h-[150px] md:h-h-60 min-w-[200px] bg-purple-500 overflow-hidden md:h-auto object-cover'/>
            <p className='text-sm font-medium'>Pacman</p>
          </Link>
          <Link to="/#" className='flex flex-col gap-2 mb-4'>
            <img alt='' src='/images/whac-a-mole.gif' className='rounded-lg max-h-[150px] md:h-h-60 min-w-[200px] bg-purple-500 overflow-hidden md:h-auto object-cover'/>
            <p className='text-sm font-medium'>Whack a mole</p>
          </Link>
          <Link to="/#" className='flex flex-col gap-2 mb-4'>
            <img alt='' src='/images/giphy1.gif' className='rounded-lg max-h-[150px] md:h-h-60 min-w-[200px] bg-purple-500 overflow-hidden md:h-auto object-cover'/>
            <p className='text-sm font-medium'>Jumping jack</p>
          </Link>
          <Link to="/#" className='flex flex-col gap-2 mb-4'>
            <img alt='' src='/images/giphy.gif' className='rounded-lg max-h-[150px] md:h-h-60 min-w-[200px] bg-purple-500 overflow-hidden md:h-auto object-cover'/>
            <p className='text-sm font-medium'>Frey</p>
          </Link>
        </div>
        <div className='px-4 w-full flex flex-row gap-2 overflow-auto'>
          <Link to="/#" className='flex flex-col gap-2 mb-4'>
            <img alt='' src='/images/giphy1.gif' className='rounded-lg max-h-[150px] md:h-h-60 min-w-[200px] bg-purple-500 overflow-hidden md:h-auto object-cover'/>
            <p className='text-sm font-medium'>Pacman</p>
          </Link>
          <div className='flex flex-col gap-2 mb-4'>
            <img alt='' src='/images/whac-a-mole.gif' className='rounded-lg max-h-[150px] md:h-h-60 min-w-[200px] bg-purple-500 overflow-hidden md:h-auto object-cover'/>
            <p className='text-sm font-medium'>Whack a mole</p>
          </div>
          <Link to="/#" className='flex flex-col gap-2 mb-4'>
            <img alt='' src='/images/giphy.gif' className='rounded-lg max-h-[150px] md:h-h-60 min-w-[200px] bg-purple-500 overflow-hidden md:h-auto object-cover'/>
            <p className='text-sm font-medium'>Jumping jack</p>
          </Link>
          <Link to="/#" className='flex flex-col gap-2 mb-4'>
            <img alt='' src='/images/giphy.gif' className='rounded-lg max-h-[150px] md:h-h-60 min-w-[200px] bg-purple-500 overflow-hidden md:h-auto object-cover'/>
            <p className='text-sm font-medium'>Frey</p>
          </Link>
        </div>
      </div>
    </>
  )
}

export default GameScreen