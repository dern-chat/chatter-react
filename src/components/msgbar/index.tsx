import { useState, useEffect } from 'react'
import { socket } from '@/socket'
import sendBtn from '@/assets/icons/send.svg'
import './index.scss'
import axios from 'axios'
import Message from '@/types/message'

function sendMessage(msg: string) {
  if (!msg) return
  console.log('Sending message:', msg)
  // send message to server using axios
  const message = new Message('allesfresser', msg, new Date().toISOString())
  axios.post('http://localhost:2323/api/message', message)
}

function MsgBar() {
  const [msg, setMsg] = useState('')

  useEffect(() => {
    socket.on('broadcast-message', (msg: string) => {
      console.log('Received message:', msg)
    })
  }, [])

  return (
    <div className="msg-bar">
      <input className="msg-input"
        placeholder="Type a message"
        value={msg}
        onChange={e => setMsg(e.target.value)}
        onKeyDown={(e) => {if (e.key === 'Enter') {setMsg(''); sendMessage(msg)}}}
      />
      <img src={sendBtn} className="send-btn" onClick={() => {setMsg(''); sendMessage(msg)}} />
    </div>
  )
}

export default MsgBar