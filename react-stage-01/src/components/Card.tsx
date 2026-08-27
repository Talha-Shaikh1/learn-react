interface CardProps{
    children: React.ReactNode
    title?: string
}

function Card({children, title = ""}: CardProps) {
  return (
    <div style={{ border: "1px solid gray", padding: "16px", borderRadius: "8px" }}>
        {title && <h1 className="text-lg">{title}</h1>}
        {children}
    </div>
  )
}

export default Card