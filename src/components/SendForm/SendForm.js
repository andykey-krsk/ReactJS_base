import { Input, InputAdornment } from "@material-ui/core"
import SendIcon from "@material-ui/icons/Send"

import "./SendForm.scss"

export function SendForm(props) {
  return (
    <div className="send-form">
      <Input
        className="input-message"
        value={props.value}
        onChange={props.onChange}
        onKeyPress={props.onKeyPress}
        fullWidth={true}
        placeholder="Введите сообщение..."
        autoFocus={true}
        endAdornment={
          <InputAdornment position="end">
            {props.value && <SendIcon onClick={props.onClick} className="" />}
          </InputAdornment>
        }
      />
    </div>
  )
}
