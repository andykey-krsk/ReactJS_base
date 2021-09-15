import {
  Avatar,
  Badge,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core"
import { ControlCameraOutlined } from "@material-ui/icons"
import MailIcon from "@material-ui/icons/Mail"
import { memo } from "react"
import { useSelector } from "react-redux"

function ChatView({ title, selected, handleListItemClick }) {
  const messages = useSelector((state) => {
    return state.messages.messages[title] || []
  })

  const lastMessage = messages[messages.length - 1]

  return (
    <>
      <ListItem
        button={true}
        divider={true}
        selected={selected}
        onClick={handleListItemClick}
      >
        <ListItemAvatar>
          <Avatar alt={title} />
        </ListItemAvatar>
        <ListItemText className="text" primary={title} />
        {(lastMessage && (
          <ListItemText
            className="text"
            primary={`${lastMessage?.author}: ${lastMessage?.message}`}
          />
        )) ||
          "-"}
        <div className="chat-col">
          <div>
            <Badge
              max={99}
              {...{
                color: "secondary",
                children: <MailIcon />,
              }}
            />
          </div>
        </div>
      </ListItem>
    </>
  )
}

export const Chat = memo(ChatView)
