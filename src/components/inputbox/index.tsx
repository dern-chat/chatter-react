import './index.scss'

// takes a label prop
function InputBox({ placeholder, value, onChange }: { placeholder: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
  // return the input box
  return (
    <input className="input-box"
      placeholder={placeholder}
      value={value}
      type={placeholder === 'room passphrase' ? 'password' : 'text'}
      onChange={onChange}
    />
  )
}

export default InputBox
