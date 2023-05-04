import leaveRoom from '@/assets/icons/leave.svg'
import './index.scss'

// takes a nicknames, roomname prop
function TopBar({ nicknames, roomName }: { nicknames: string[]; roomName: string }) {
  // return the top bar
  return (
    <div className="top-bar">
      <div className="room-info">
        <div className="room-name">{roomName}</div>
        <div className="nicknames">{nicknames.join(', ')}</div>
      </div>
      <div className="room-actions">
        <img className="leave-img" src={leaveRoom} alt="leave room" onClick={() => console.log("Leave")} />
      </div>
    </div>
  )
}

export default TopBar