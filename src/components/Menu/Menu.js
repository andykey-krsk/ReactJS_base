import Avatar from "@material-ui/core/Avatar"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import ListItemText from "@material-ui/core/ListItemText"
import { makeStyles } from "@material-ui/core/styles"
import WorkIcon from "@material-ui/icons/Work"
import { Link } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "50%",
    maxWidth: 360,
    marginLeft: "auto",
    marginRight: "auto",
  },
}))

const menu = [
  { to: "/", name: "Главная" },
  { to: "/chat", name: "Чаты" },
  { to: "/profile", name: "Профиль" },
]

export function Menu() {
  const classes = useStyles()

  return (
    <List className={classes.root}>
      {menu.map((item) => (
        <div key={item.name}>
          <Link to={item.to}>
            <ListItem button={true} divider={true}>
              <ListItemAvatar>
                <Avatar>
                  <WorkIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={item.name} />
            </ListItem>
          </Link>
        </div>
      ))}
    </List>
  )
}
