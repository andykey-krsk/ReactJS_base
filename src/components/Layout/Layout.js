import "./Layout.scss"

export function Layout({ content }) {
  return (
    <div className="container">
      <div className="layout">
        <div className="row">{content}</div>
      </div>
    </div>
  )
}
