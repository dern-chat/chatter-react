import { useEffect, useState } from 'react'
import Guard from './pages/guard'
import Message from './types/message'
import './index.scss'
import Room, { RoomProp } from './pages/room'
import { socket } from './socket'


function App() {
  const [isConnected, setIsConnected] = useState(socket.connected)
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
    function onConnect() {
      setIsConnected(true)
    }

    function onDisconnect() {
      setIsConnected(false)
    }

    function onMessage(msg: Message) {
      console.log('onMessage', msg)
      setMessages((messages) => [...messages, msg])
    }

    socket.on('connect', onConnect)
    socket.on('disconnect', onDisconnect)
    socket.on('broadcast-message', onMessage)

    return () => {
      socket.off('connect', onConnect)
      socket.off('disconnect', onDisconnect)
      socket.off('broadcast-message', onMessage)
    }
  }, [])
  
  return (
    <>
     {document.cookie.includes('token') ? <Room roomProp={roomProp}  /> : <Guard />}
    </>
  )
}

export default App
