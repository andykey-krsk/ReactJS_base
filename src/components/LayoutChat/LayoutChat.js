import "./LayoutChat.scss"

export function LayoutChat({ chatList, children }) {
  return (
    <div className="container">
      <div className="layout">
        <div className="row">
          {chatList}
          {children}
        </div>
      </div>
    </div>
  )
}
