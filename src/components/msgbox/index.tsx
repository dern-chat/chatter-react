import Message from '@/types/message'
import './index.scss'
import { useEffect } from 'react'

function autoScroll() {
  window.scrollTo(0, document.body.scrollHeight)
}

function MsgBox({ message }: { message: Message }) {
  useEffect(() => {
    autoScroll()
  }, [])
 
  return (
    <div className="msg-box">
      <div className="msg-box__author">{message.author}</div>
      <div className="msg-box__content">{message.content}</div>
      <div className="msg-box__time">{message.time.slice(11, 16)}</div>
    </div>
  )
}

export default MsgBox