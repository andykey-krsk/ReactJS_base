import "./Layout.scss"

export function Layout({ content }) {
  return (
    <div className="container">
      <div className="layout">{content}</div>
    </div>
  )
}
