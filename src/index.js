import { createTheme } from "@material-ui/core"
import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { PersistGate } from "redux-persist/es/integration/react"
import { Home, DefaultThemeProvider } from "./components"
import { Chat, Profile, Gist } from "./pages"
import { store, persiststore } from "./store"
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
    <Provider store={store}>
      <PersistGate loading={null} persistor={persiststore}>
        <BrowserRouter>
          <DefaultThemeProvider themes={themes} initialTheme="light">
            <Switch>
              <Route path="/" exact={true} component={() => <Home />} />
              <Route path="/profile" component={() => <Profile />} />
              <Route path="/chat" component={() => <Chat />} />
              <Route path="/gists" component={() => <Gist />} />
              <Route path="*" component={() => <h1>404</h1>} />
            </Switch>
          </DefaultThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,

  document.getElementById("root")
)
