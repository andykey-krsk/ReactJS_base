import List from "@material-ui/core/List"
import { makeStyles } from "@material-ui/core/styles"

import { useState } from "react"
import { dataChatList } from "../../data/dataChatList.js"
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
    //backgroundColor: theme.palette.background.paper,
  },
}))

export function ChatList() {
  const classes = useStyles()
  const [chats] = useState(dataChatList)
  const [selected, setSelected] = useState(0)

  return (
    <div className={classes.root}>
      <List component="nav">
        {chats.map((chat) => (
          <Chat
            key={chat.name}
            name={chat.name}
            photo={chat.photo}
            description={chat.description}
            selected={selected === chat.id}
            date={chat.date}
            unread={chat.unread}
            handleListItemClick={() => setSelected(chat.id)}
          />
        ))}
      </List>
    </div>
  )
}
