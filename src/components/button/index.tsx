import './index.scss'

// takes a label prop and a callback function
function Button({ label, onClick }: { label: string; onClick: () => void }) {
  // return the button
  return (
    <button className="button" onClick={onClick}>
      {label}
    </button>
  )
}

export default Button