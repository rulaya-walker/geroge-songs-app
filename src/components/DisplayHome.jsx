import React from 'react'
import Navbar from './Navbar'
import { albumsData,songsData } from '../assets/assets.js'
import AlbumItem from './AlbumItem.jsx'
import SongItem from './SongItem.jsx'

const DisplayHome = () => {
  return (
    <>
    <Navbar />
    <div className='mb-4 mt-4'>
      <h1 className='text-2xl font-bold mb-4'>Featured Charts</h1>
      <div className='flex overflow-auto'>
        {albumsData.map((album, index) => (
          <AlbumItem key={index}  album={album} />
        ))}
      </div>

    </div>
    <div className='mb-4'>
      <h1 className='text-2xl font-bold mb-4'>Today's Biggest Hits</h1>
      <div className='flex overflow-auto'>
        {songsData.map((song, index) => (
          <SongItem key={index}  song={song} />
        ))}
      </div>

    </div>
    </>
  )
}

export default DisplayHome