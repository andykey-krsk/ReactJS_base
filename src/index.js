import { createTheme } from "@material-ui/core"
import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Home, Profile, DefaultThemeProvider } from "./components"
import { Chat } from "./pages"
import "./styles/app.scss"

const themes = {
  dark: createTheme({
    color: "#000",
  }),
  light: createTheme({
    color: "#fff",
  }),
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DefaultThemeProvider themes={themes} initialTheme="light">
        <Switch>
          <Route path="/" exact={true} component={() => <Home />} />
          <Route path="/profile" component={() => <Profile />} />
          <Route path="/chat" component={() => <Chat />} />
          <Route path="*" component={() => <h1>404</h1>} />
        </Switch>
      </DefaultThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById("root")
)
