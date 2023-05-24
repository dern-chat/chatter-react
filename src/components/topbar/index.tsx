import leaveRoom from '@/assets/icons/leave.svg'
import './index.scss'

function leave() {
  console.log('Leave')
  document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
  window.location.reload()
}

function TopBar({ nicknames, roomName }: { nicknames: string[]; roomName: string }) {
  return (
    <div className="top-bar">
      <div className="room-info">
        <div className="room-name">{roomName}</div>
        <div className="nicknames">{nicknames.join(', ')}</div>
      </div>
      <div className="room-actions">
        <img className="leave-img" src={leaveRoom} alt="leave room" onClick={() => leave()} />
      </div>
    </div>
  )
}

export default TopBar
