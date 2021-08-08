import TextField from "@material-ui/core/TextField"
import SendIcon from "@material-ui/icons/Send"

import "./SendForm.scss"

export function SendForm(props) {
  return (
    <div className="send-form">
      <TextField
        className="input-message"
        id="outlined-multiline-static"
        label="Message"
        multiline={true}
        rows={2}
        defaultValue="Многострочное сообщение"
        variant="outlined"
        value={props.value}
        onChange={props.onChange}
        autoFocus={true}
      />
      <button className="send" onClick={props.onClick}>
        <SendIcon />
      </button>
    </div>
  )
}
