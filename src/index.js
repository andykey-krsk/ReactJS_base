import { ThemeProvider, createTheme } from "@material-ui/core"
import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Home, Profile } from "./components"
import { Chat } from "./pages"
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
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/" exact={true} component={() => <Home />} />
          <Route path="/profile" component={() => <Profile />} />
          <Route path="/chat" component={() => <Chat />} />
          <Route path="*" component={() => <h1>404</h1>} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById("root")
)
