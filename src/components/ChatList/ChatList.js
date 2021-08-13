import List from "@material-ui/core/List"
import { makeStyles } from "@material-ui/core/styles"
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

export function ChatList({ conversations, allMessages }) {
  const classes = useStyles()
  const { roomId } = useParams()

  return (
    <div className={classes.root}>
      <List component="nav">
        {conversations.map((chat, index) => {
          const curentMessages = allMessages[chat.title]

          return (
            <Link key={index} to={`/chat/${chat.title}`}>
              <Chat
                title={chat.title}
                selected={roomId === chat.title}
                lastMessage={curentMessages[curentMessages.length - 1]}
              />
            </Link>
          )
        })}
      </List>
    </div>
  )
}
