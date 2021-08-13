import Avatar from "@material-ui/core/Avatar"
import Badge from "@material-ui/core/Badge"
//import Grid from "@material-ui/core/Grid"
import ListItem from "@material-ui/core/ListItem"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import ListItemText from "@material-ui/core/ListItemText"
import Typography from "@material-ui/core/Typography"
import MailIcon from "@material-ui/icons/Mail"

export function Chat({
  title,
  selected,
  photo,
  unread,
  date,
  handleListItemClick,
  lastMessage,
}) {
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
          secondary={`${lastMessage.author}: ${lastMessage.message}`}
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
