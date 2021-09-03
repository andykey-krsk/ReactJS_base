import { Grid, Switch } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import SvgIcon from "@material-ui/core/SvgIcon"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { firebaseApp } from "../../api/firebase"
import { Menu } from ".././Menu"
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

const signOut = () => {
  firebaseApp.auth().signOut()
}

export function Header({ session }) {
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
          <Menu />
        </div>
        {session?.email && (
          <Grid
            style={{ color: theme.theme.color, cursor: "pointer" }}
            item={true}
            onClick={signOut}
          >
            Выход ({session.email})
          </Grid>
        )}
      </div>
    </>
  )
}
