
interface ButtonProps{
    text: string
    func: () => void
}

function Button({text, func}: ButtonProps) {
  return (
    <button onClick={func}>
        {text}
    </button>
  )
}

export default Button