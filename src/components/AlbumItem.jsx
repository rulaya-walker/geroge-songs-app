import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { PlayerContext } from "../context/PlayerContext"

const AlbumItem = ({ album }) => {
  const {playWithId} = useContext(PlayerContext)
  const { image, name, desc,id } = album
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/album/${album.id}`)
  }
  return (
    <div className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]' onClick={(handleClick)}>
      <img src={image} alt={name} className='w-full rounded' />
      <h3 className='font-bold mt-2 mb-1'>{name}</h3>
      <p className='text-sm text-slate-200'>{desc}</p>
    </div>
  )
}

export default AlbumItem