import Message from '@/types/message'
import './index.scss'

function MsgBox({ message }: { message: Message }) {
  return (
    <div className="msg-box">
      <div className="msg-box__author">{message.author}</div>
      <div className="msg-box__content">{message.content}</div>
      <div className="msg-box__time">{message.time.slice(11, 16)}</div>
    </div>
  )
}

export default MsgBox
