import { useContext, useRef } from "react"
import {assets, songsData } from "../assets/assets.js"
import { PlayerContext } from "../context/PlayerContext.jsx";

const Player = () => {
    const { seekBar, seekBg, playStatus, track, play, pause, nextSong, prevSong,time,seekSong } = useContext(PlayerContext);
  return (
    <div className={`h-[10%] flex justify-between items-center text-white px-4`}>
        <div className='hidden lg:flex items-center gap-4'>
            <img src={track.image} alt="Album Art" className='w-12 h-12 rounded' />
            <div>
                <p>{track.name}</p>
                <p>{track.desc.slice(0,22)}</p>
            </div>
        </div>
        <div className="flex flex-col items-center gap-1 m-auto">
            <div className="flex gap-4">
                <img src={assets.shuffle_icon} alt="Album Art" className='w-4 cursor-pointer' />
                <img src={assets.prev_icon} alt="Album Art" className='w-4 cursor-pointer' onClick={prevSong} />
                {
                    playStatus ? 
                    <img src={assets.pause_icon} alt="Album Art" className='w-4 cursor-pointer' onClick={pause} /> : 
                    <img src={assets.play_icon} alt="Album Art" className='w-4 cursor-pointer' onClick={play} />
                }
                <img src={assets.next_icon} alt="Album Art" className='w-4 cursor-pointer' onClick={nextSong} />
                <img src={assets.loop_icon} alt="Album Art" className='w-4 cursor-pointer' />
            </div>
            <div className="flex items-center gap-5">
                <p>{`${time.currentTime.minutes}:${time.currentTime.seconds < 10 ? `0${time.currentTime.seconds}` : time.currentTime.seconds}`}</p>
                <div ref={seekBg} onClick={seekSong} className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer">
                    <hr ref={seekBar} className="bg-green-800 h-1 rounded-full border-none w-0" />
                </div>
                <p>{`${time.totalTime.minutes}:${time.totalTime.seconds < 10 ? `0${time.totalTime.seconds}` : time.totalTime.seconds}`}</p>
            </div>

        </div>
        <div className="hidden lg:flex items-center gap-2 opacity-75">
            <img src={assets.plays_icon} alt="Volume" className='w-4 cursor-pointer' />
            <img src={assets.mic_icon} alt="Volume" className='w-4 cursor-pointer' />
            <img src={assets.queue_icon} alt="Volume" className='w-4 cursor-pointer' />
            <img src={assets.speaker_icon} alt="Volume" className='w-4 cursor-pointer' />
            <img src={assets.volume_icon} alt="Volume" className='w-4 cursor-pointer' />
            <div className="w-20 bg-slate-50 h-1 rounded">

            </div>
            <img src={assets.mini_player_icon} alt="Volume" className='w-4 cursor-pointer' />
            <img src={assets.zoom_icon} alt="Volume" className='w-4 cursor-pointer' />
        </div>
    </div>
  )
}

export default Player