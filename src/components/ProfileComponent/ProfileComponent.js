import { Layout } from "../../components"

export function ProfileComponent({ content }) {
  return (
    <Layout
      content={
        <div className="center">
          <h1 className="h1">Профиль</h1>
          {content}
        </div>
      }
    />
  )
}
