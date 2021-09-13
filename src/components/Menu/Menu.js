import { Link } from "react-router-dom"
import styles from "./menu.module.css"

const menu = [
  { to: "/chat", name: "Чат" },
  { to: "/profile", name: "Профиль" },
  { to: "/gists", name: "GIST" },
  { to: "/login", name: "Логин" },
  { to: "/sign-up", name: "Регистрация" },
]

export function Menu() {
  return (
    <ul className={styles.menu}>
      {menu.map((item) => (
        <li key={item.name}>
          <Link to={item.to}>{item.name}</Link>
        </li>
      ))}
    </ul>
  )
}
