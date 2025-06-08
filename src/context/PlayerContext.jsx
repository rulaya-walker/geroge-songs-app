import { createContext, useRef, useState } from 'react';
import { songsData } from '../assets/assets.js';

export const PlayerContext = createContext();
const PlayerContextProvider= (props) => {
    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();
    const [track, setTrack] = useState(songsData[0]);
    const [playStatus, setPlayStatus] = useState(false);
    const [time, setTime] = useState({
        currentTime: {
            minutes: 0,
            seconds: 0
        },
        totalTime: {
            minutes: 0,
            seconds: 0
        }
    });
    const play = () => {
    audioRef.current.play();
    setPlayStatus(true);
  };

const pause = () => {
    audioRef.current.pause();
    setPlayStatus(false);
  };
const nextSong = () => {
    const currentIndex = songsData.findIndex(song => song.id === track.id);
    const nextIndex = (currentIndex + 1) % songsData.length;
    setTrack(songsData[nextIndex]);
    audioRef.current.src = songsData[nextIndex].file;
    audioRef.current.play();
    setPlayStatus(true);
  };
  const prevSong = () => {
    const currentIndex = songsData.findIndex(song => song.id === track.id);
    const prevIndex = (currentIndex - 1 + songsData.length) % songsData.length;
    setTrack(songsData[prevIndex]);
    audioRef.current.src = songsData[prevIndex].file;
    audioRef.current.play();
    setPlayStatus(true);
  };
  const playWithId = async (id) => {
    const song = await songsData.find(song => song.id === id);
    if (song) {
      setTrack(song);
      audioRef.current.src = song.file;
      await audioRef.current.play();
      setPlayStatus(true);
    }
  }
  const seekSong = async (e) => {
    audioRef.current.currentTime = (e.nativeEvent.offsetX / seekBg.current.clientWidth) * audioRef.current.duration;
    // const seekBarWidth = seekBar.current.clientWidth;
    // const clickX = e.clientX - seekBg.current.getBoundingClientRect().left;
    // const newTime = (clickX / seekBarWidth) * audioRef.current.duration;
    // audioRef.current.currentTime = newTime;
  };
  useState(() => {
    setTimeout(() => {
    audioRef.current.ontimeupdate = () => {
    seekBar.current.style.width = `${(audioRef.current.currentTime / audioRef.current.duration) * 100}%`;
    //seekBg.current.style.background = `linear-gradient(to right, #4caf50 ${seekBar.current.style.width}, #ccc ${seekBar.current.style.width})`;
      const { currentTime, duration } = audioRef.current;
      setTime({
        currentTime: {
          minutes: Math.floor(currentTime / 60),
          seconds: Math.floor(currentTime % 60)
        },
        totalTime: {
          minutes: Math.floor(duration / 60),
          seconds: Math.floor(duration % 60)
        }
      });
    };
    }, 1000);
  }, [audioRef]);
    const contextValue  = {
        audioRef,
        seekBg,
        seekBar,
        track,
        setTrack,
        playStatus,
        setPlayStatus,
        time,
        setTime,
        play,
        pause,
        nextSong,
        prevSong,
        playWithId,
        seekSong
    }
  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
}

export default PlayerContextProvider;
