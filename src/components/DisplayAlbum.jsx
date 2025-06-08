import {useContext} from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom';
import { assets,albumsData, songsData } from '../assets/assets.js';
import { LuDot } from "react-icons/lu";
import { PlayerContext } from '../context/PlayerContext.jsx';

const DisplayAlbum = () => {
    const {playWithId} = useContext(PlayerContext);
    const {id} = useParams();
    const albumData = albumsData[id];
  return (
    <>
        <Navbar />
        <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
          <img src={albumData.image} alt={albumData.name} className='w-full md:w-1/3 rounded' />
          <div className='flex flex-col'>
            <p>Playlist</p>
            <h2 className='text-2xl font-bold md:text-7xl'>{albumData.name}</h2>
            <h4 className='text-sm text-slate-200'>{albumData.desc}</h4>
            <p className='mt-1'>
                <img src={assets.spotify_logo} alt="Spotify Icon" className='w-5 inline-block mr-2' />
                <b>Spotify</b>
                <LuDot className='inline-block mx-1' /> 123,456 likes
                <LuDot className='inline-block mx-1' /> <b>50 songs</b>
                about 2 hr 30 min
            </p>
          </div>
        </div>
        <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
            <p>
                #<b className='mr-4'> Title</b>
            </p>
            <p>Album</p>
            <p className='hidden sm:block'>Date Added</p>
            <img src={assets.clock_icon} alt="Clock Icon" className='w-4 m-auto' />
        </div>
        <hr/>
        {songsData.map((song, index) => (
          <div onClick={() => playWithId(song.id)} key={index} className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center hover:bg-[#ffffff2b] cursor-pointer'>
            <p className='text-white'>
                <b className='mr-4 text-[#a7a7a7]'>{index+1}</b>
                <img src={song.image} alt={song.name} className='w-10 mr-5 inline-block mr-2' />
                {song.name}
            </p>
            <p>{albumData.name}</p>
            <p className='hidden sm:block'>5 days ago</p>
            <p className='text-xs text-center'>{song.duration}</p>
          </div>
        ))}
    </>
  )
}

export default DisplayAlbum