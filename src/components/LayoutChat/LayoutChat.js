import "./LayoutChat.scss"

export function LayoutChat({ header, chatList, children }) {
  return (
    <div className="container">
      <div className="layout">
        {header}
        <div className="row">
          {chatList}
          {children}
        </div>
      </div>
    </div>
  )
}
