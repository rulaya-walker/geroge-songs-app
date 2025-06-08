import React, { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'

const SongItem = ({ song }) => {
    const {playWithId} = useContext(PlayerContext)
  const { image, name, desc,id } = song
  return (
    <div className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]' onClick={() => playWithId(id)}>
      <img src={image} alt={name} className='w-full rounded' />
      <h3 className='font-bold mt-2 mb-1'>{name}</h3>
      <p className='text-sm text-slate-200'>{desc}</p>
    </div>
  )
}

export default SongItem