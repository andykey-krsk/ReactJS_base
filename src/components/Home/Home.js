import Avatar from "@material-ui/core/Avatar"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import ListItemText from "@material-ui/core/ListItemText"
import { makeStyles } from "@material-ui/core/styles"
import WorkIcon from "@material-ui/icons/Work"
import { Link } from "react-router-dom"
import { Layout } from ".././Layout"
import "./Home.scss"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "50%",
    maxWidth: 360,
    marginLeft: "auto",
    marginRight: "auto",
  },
}))

export function Home() {
  const classes = useStyles()
  return (
    <Layout
      content={
        <div className="center">
          <List className={classes.root}>
            <Link to={"/chat"}>
              <ListItem button={true} divider={true}>
                <ListItemAvatar>
                  <Avatar>
                    <WorkIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Чаты" />
              </ListItem>
            </Link>
            <Link to={"/profile"}>
              <ListItem button={true}>
                <ListItemAvatar>
                  <Avatar>
                    <WorkIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Профиль" />
              </ListItem>
            </Link>
          </List>
        </div>
      }
    />
  )
}
