import List from "@material-ui/core/List"
import { makeStyles } from "@material-ui/core/styles"
import { useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { Chat } from "./Chat"
import "./ChatList.scss"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 350,
    height: "100%",
    boxSizing: "border-box",
    overflow: "auto",
    backgroundColor: "lightgray",
  },
}))

export function ChatList() {
  const classes = useStyles()
  const { roomId } = useParams()
  const { conversations } = useSelector((state) => state.conversations)

  return (
    <div className={classes.root}>
      <List component="nav">
        {conversations.map((chat, index) => {
          return (
            <Link key={index} to={`/chat/${chat.title}`}>
              <Chat title={chat.title} selected={roomId === chat.title} />
            </Link>
          )
        })}
      </List>
    </div>
  )
}
