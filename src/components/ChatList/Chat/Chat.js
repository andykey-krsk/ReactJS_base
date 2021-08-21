import {
  Avatar,
  Badge,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@material-ui/core"
import MailIcon from "@material-ui/icons/Mail"
import { useSelector } from "react-redux"

export function Chat({
  title,
  selected,
  photo,
  unread,
  date,
  handleListItemClick,
}) {
  const messages = useSelector((state) => state.messages.messages[title])

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
          <Avatar alt={title} src={photo} />
        </ListItemAvatar>
        <ListItemText
          primary={title}
          secondary={
            (lastMessage &&
              `${lastMessage?.author}: ${lastMessage?.message}`) ||
            "-"
          }
        />
        <div className="chat-col">
          <div>
            <Badge
              badgeContent={unread}
              max={99}
              {...{
                color: "secondary",
                children: <MailIcon />,
              }}
            />
          </div>
          <div>
            <Typography variant="button">{date}</Typography>
          </div>
        </div>
      </ListItem>
    </>
  )
}
