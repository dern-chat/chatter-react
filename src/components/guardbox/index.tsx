import { useState } from 'react'
import InputBox from '@/components/inputbox'
import Button from '@/components/button'
import './index.scss'
import { axiosInstance } from '@/stores/store'
import Message from '@/types/message'

export interface GuardBoxProp {
  roomName: string
  setRoomName: React.Dispatch<React.SetStateAction<string>>
  users: string[]
  setUsers: React.Dispatch<React.SetStateAction<string[]>>
  msgs: Message[]
  setMsgs: React.Dispatch<React.SetStateAction<Message[]>>
}


function joinRoom(passphrase: string, nickname: string) {
  console.log('join room', passphrase, nickname)
  axiosInstance.post('/join-room', {
    passphrase,
    nickname
  }).then((res) => {
    console.log(res.data)
    document.cookie = `token=${res.data.token}`
    console.log('room name', res.data.roomName)
    window.location.reload()
  }
  ).catch((err) => {
    console.log(err)
  }
  )
}

function GuardBox() {
  const [passphrase, setPassphrase] = useState('')
  const [nickname, setNickname] = useState('')

  return (
    <div className="guard-box">
      <div className="container">
        <div className="title">
            <div className="name logo">
                dern
            </div>
            <div className="slogan">
                anonymous volatile chat platform
            </div>
        </div>
      </div>
      <div className="form"
        onKeyDown={(e) => {if (e.key === 'Enter') {joinRoom(passphrase, nickname)}}}
      >
            <InputBox placeholder="room passphrase" value={passphrase} onChange={(e) => setPassphrase(e.target.value)} />
            <InputBox placeholder="nickname" value={nickname} onChange={(e) => setNickname(e.target.value)} />
            <Button label="Join" onClick={() => joinRoom(passphrase, nickname)} />
      </div>
    </div>
  )
}

export default GuardBox