import { useEffect, useState } from 'react'
import Guard from './pages/guard'
import Message from './types/message'
import './index.scss'
import Room, { RoomProp } from './pages/room'
import { socket } from './socket'

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
      console.log('onMessage', msg)
      setMessages((messages) => [...messages, msg])
      setTimeout(() => {
        const msgs = document.querySelector('.msgs')
        msgs?.scrollTo(0, msgs.scrollHeight)
      }
        , 100)
    }

    function onUserEnter(user: string) {
      console.log('onUserEnter', user)
      setUsers((users) => [...users, user])
    }

    socket.on('broadcast-message', onMessage)
    socket.on('broadcast-user-enter', onUserEnter)

    return () => {
      socket.off('broadcast-message', onMessage)
      socket.off('broadcast-user-enter', onUserEnter)
    }
  }, [])

  return (
    <>
      {document.cookie.includes('token') ? <Room roomProp={roomProp} /> : <Guard />}
    </>
  )
}

export default App
