import { makeStyles } from "@material-ui/core/styles"
import SvgIcon from "@material-ui/core/SvgIcon"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { ThemeContext } from "../ThemeContext"
import "./Header.scss"

const useStyles = makeStyles((theme) => ({
  root: {
    "& > svg": {
      margin: theme.spacing(2),
    },
  },
}))

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  )
}

export function Header() {
  const classes = useStyles()

  const { theme } = useContext(ThemeContext)

  return (
    <>
      <div className="header-row">
        <Link to={"/"}>
          <div className={classes.root}>
            <HomeIcon color="action" />
          </div>
        </Link>

        <div className="header" style={{ color: theme.theme.color }}>
          Чат
        </div>
        {/* <button onClick={() => changeTheme("light")}>light</button>
        <button onClick={() => changeTheme("dark")}>dark</button> */}
      </div>
    </>
  )
}
