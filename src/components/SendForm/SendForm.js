export function SendForm(props) {
  return (
    <div>
      <input
        className="input-message"
        value={props.value}
        onChange={props.onChange}
      />
      <button className="send" onClick={props.onClick}>
        Отправить
      </button>
    </div>
  )
}
