import './index.scss'

function Button({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button className="button" onClick={onClick}>
      {label}
    </button>
  )
}

export default Button
