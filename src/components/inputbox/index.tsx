import './index.scss'

// takes a label prop
function InputBox({ placeholder, value, onChange }: { placeholder: string; value: string; onChange: (e: any) => void }) {
  // return the input box
  return (
    <input className="input-box"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
}

export default InputBox