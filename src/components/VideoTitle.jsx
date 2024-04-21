import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-grad-to-r from-black'>
        <h1 className='font-bold text-6xl'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div >
            <button className='bg-white text-black p-4 px-16 text-xl rounded-lg hover:bg-opacity-80'>  Play</button>
            <button className='bg-gray-500 text-white p-4 px-16 text-xl bg-opacity-50 rounded-lg mx-2'>Info</button>
        </div>
    </div>
  )
}

export default VideoTitle
