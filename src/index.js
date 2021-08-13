import { ThemeProvider, createTheme } from "@material-ui/core"
import React from "react"
import ReactDOM from "react-dom"
import { Layout, Header, ChatList, MessageList } from "./components"
import "./styles/app.scss"

const theme = createTheme({
  dark: {
    color: "$dark",
  },
  light: {
    color: "$light",
  },
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Layout
        header={<Header />}
        chatList={<ChatList />}
        messageList={<MessageList />}
      />
    </ThemeProvider>
  </React.StrictMode>,

  document.getElementById("root")
)
