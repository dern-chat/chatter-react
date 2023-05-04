import Message from '@/types/message'
import TopBar from '@/components/topbar'
import MsgBox from '@/components/msgbox'
import MsgBar from '@/components/msgbar'
import './index.scss'

function Room({ roomName, users, msgs }: { roomName: string, users: string[], msgs: Message[] }) {
  return (
    <div className="room">
      <TopBar nicknames={users} roomName={roomName} />
      <div className="msgs">
        {msgs.map((msg) => <div className="msg-container" key={msg.time}><MsgBox message={msg} /></div>)}
      </div>
      <MsgBar />
    </div>
  )
}

export default Room