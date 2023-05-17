import { useState } from 'react'
import Guard from './pages/guard'
import Message from './types/message'
import './index.scss'
import Room, { RoomProp } from './pages/room'


function App() {
  const [roomName, setRoomName] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  const [users, setUsers] = useState<string[]>([])
  const roomProp: RoomProp = {
    roomName,
    setRoomName,
    users,
    setUsers,
    msgs: messages,
    setMsgs: setMessages
  }
  
  return (
    <>
     {document.cookie.includes('token') ? <Room roomProp={roomProp}  /> : <Guard />}
    </>
  )
}

export default App
