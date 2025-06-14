import { useContext } from 'react'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Display from './components/Display'
import { PlayerContext } from './context/PlayerContext.jsx'

function App() {
  const {audioRef, track} = useContext(PlayerContext);
  return (
    <>
      <div className='h-screen bg-black'>
        <div className='h-[90%] flex'>
          <Sidebar />
          <Display />
        </div>
        <Player />
        <audio ref={audioRef} preload='auto'>
          <source src={track.file} type="audio/mpeg" />
        </audio>
      </div>
    </>
  )
}

export default App
