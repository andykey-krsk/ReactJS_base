import "./Layout.scss"

export function Layout({ header, chatList, messageList }) {
  return (
    <div className="container">
      <div className="layout">
        {header}
        <div className="row">
          {chatList}
          {messageList}
        </div>
      </div>
    </div>
  )
}
