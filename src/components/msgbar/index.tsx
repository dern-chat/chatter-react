import { useState } from 'react'
import sendBtn from '@/assets/icons/send.svg'
import './index.scss'
import Message from '@/types/message'
import { axiosInstance } from '@/stores/store'

function sendMessage(msg: string, nickname: string) {
  if (!msg) return
  const message = new Message(nickname, msg, new Date().toISOString())
  axiosInstance.post('/message', message)
}

function MsgBar({ nickname }: { nickname: string }) {
  const [msg, setMsg] = useState('')

  return (
    <div className="msg-bar">
      <input className="msg-input"
        placeholder="Type a message"
        value={msg}
        onChange={e => setMsg(e.target.value)}
        onKeyDown={(e) => { if (e.key === 'Enter') { setMsg(''); sendMessage(msg, nickname) } }}
      />
      <img src={sendBtn} className="send-btn" onClick={() => { setMsg(''); sendMessage(msg, nickname) }} />
    </div>
  )
}

export default MsgBar
