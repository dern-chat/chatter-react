import TopBar from '@/components/topbar'
import MsgBox from '@/components/msgbox'
import MsgBar from '@/components/msgbar'
import Message from '@/types/message'
import { useEffect } from 'react'
import './index.scss'
import { axiosInstance } from '@/stores/store'


export interface RoomProp {
  roomName: string
  setRoomName: React.Dispatch<React.SetStateAction<string>>
  users: string[]
  setUsers: React.Dispatch<React.SetStateAction<string[]>>
  msgs: Message[]
  setMsgs: React.Dispatch<React.SetStateAction<Message[]>>
  nickname: string
  setNickname: React.Dispatch<React.SetStateAction<string>>
}

function getRoomInfo(roomProp: RoomProp) {
  // get room info from server with cookie token using axios
  axiosInstance.get('/room-info')
    .then((res) => {
      console.log(res.data)
      roomProp.setRoomName(res.data.roomName)
      roomProp.setUsers(res.data.users)
      roomProp.setMsgs(res.data.msgs)
      roomProp.setNickname(res.data.nickname)
    }
    )
}

function Room({ roomProp }: { roomProp: RoomProp }) {
  // print "Room component loaded" when component is loaded
  useEffect(() => {
    getRoomInfo(roomProp)
  }, [])
  return (
    <div className="room">
      <TopBar nicknames={roomProp.users} roomName={roomProp.roomName} />
      <div className="msgs">
        {roomProp.msgs.map((msg) => <div className="msg-container" key={msg.time}><MsgBox message={msg} /></div>)}
      </div>
      <MsgBar nickname={roomProp.nickname } />
    </div>
  )
}

export default Room