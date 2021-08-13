import Avatar from "@material-ui/core/Avatar"
import Badge from "@material-ui/core/Badge"
//import Grid from "@material-ui/core/Grid"
import ListItem from "@material-ui/core/ListItem"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import ListItemText from "@material-ui/core/ListItemText"
import Typography from "@material-ui/core/Typography"
import MailIcon from "@material-ui/icons/Mail"

// const defaultProps = {
//   color: "secondary",
//   children: <MailIcon />,
// }

export function Chat(props) {
  return (
    <>
      <ListItem
        button={true}
        divider={true}
        selected={props.selected}
        onClick={props.handleListItemClick}
      >
        <ListItemAvatar>
          <Avatar alt={props.name} src={props.photo} />
        </ListItemAvatar>
        <ListItemText primary={props.name} secondary={props.description} />
        <div className="chat-col">
          <div>
            <Badge
              badgeContent={props.unread}
              max={99}
              {...{
                color: "secondary",
                children: <MailIcon />,
              }}
            />
          </div>
          <div>
            <Typography variant="button">{props.date}</Typography>
          </div>
        </div>
      </ListItem>
    </>
  )
}
