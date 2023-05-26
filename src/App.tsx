import { useEffect, useState } from 'react'
import Guard from './pages/guard'
import Message from './types/message'
import './index.scss'
import Room, { RoomProp } from './pages/room'
import { socket } from './services/socket'
import { MESSAGE_EVENT, USER_JOIN_EVENT } from './services/event'

function App() {
  const [roomName, setRoomName] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  const [users, setUsers] = useState<string[]>([])
  const [nickname, setNickname] = useState<string>('anonymous')

  const roomProp: RoomProp = {
    roomName,
    setRoomName,
    users,
    setUsers,
    msgs: messages,
    setMsgs: setMessages,
    nickname,
    setNickname,
  }

  useEffect(() => {
    function onMessage(msg: Message) {
      setMessages((messages) => [...messages, msg])
      setTimeout(() => {
        const msgs = document.querySelector('.msgs')
        msgs?.scrollTo(0, msgs.scrollHeight)
      }
        , 100)
    }

    function onUserEnter(user: string) {
      setUsers((users) => [...users, user])
    }

    socket.on(MESSAGE_EVENT, onMessage)
    socket.on(USER_JOIN_EVENT, onUserEnter)

    return () => {
      socket.off(MESSAGE_EVENT, onMessage)
      socket.off(USER_JOIN_EVENT, onUserEnter)
    }
  }, [])

  return (
    <>
      {document.cookie.includes('token') ? <Room roomProp={roomProp} /> : <Guard />}
    </>
  )
}

export default App
