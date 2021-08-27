import { Layout } from ".././Layout"
import { Menu } from ".././Menu"
import "./Home.scss"

export function Home() {
  return (
    <Layout
      content={
        <div className="center">
          <Menu />
        </div>
      }
    />
  )
}
