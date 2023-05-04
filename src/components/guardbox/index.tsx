import { useState } from 'react'
import InputBox from '@/components/inputbox'
import Button from '@/components/button'
import './index.scss'

function joinRoom(passphrase: string, nickname: string) {
  console.log('join room', passphrase, nickname)
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
      <div className="form">
            <InputBox placeholder="room passphrase" value={passphrase} onChange={(e) => setPassphrase(e.target.value)} />
            <InputBox placeholder="nickname" value={nickname} onChange={(e) => setNickname(e.target.value)} />
            <Button label="Join" onClick={() => joinRoom(passphrase, nickname)} />
      </div>
    </div>
  )
}

export default GuardBox