import React from 'react'
import ReactDOM from 'react-dom/client'
import Message from './types/message'
import Room from './pages/room'
import './index.scss'

const messages: Message[] = [
  {
    author: 'user1',
    content: 'hello',
    time: '00:00'
  },
  {
    author: 'user2',
    content: 'hi',
    time: '00:01'
  }
]
const roomName = 'room1'
const users = ['user1', 'user2']

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Room roomName={roomName} users={users} msgs={messages} />
  </React.StrictMode>
)
