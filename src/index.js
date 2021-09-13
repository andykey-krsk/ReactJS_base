import { createTheme } from "@material-ui/core"
import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { PersistGate } from "redux-persist/es/integration/react"
import { firebaseApp, db } from "./api/firebase"
import {
  Home,
  DefaultThemeProvider,
  PrivateRoute,
  PublicRoute,
  Header,
} from "./components"
import { Chat, Profile, Gist, Login, SignUp } from "./pages"
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

const addConversation = () => {
  db.ref("conversations").child("room1").set({ title: "room1", value: "" })
}

const createMessage = (roomId) => {
  db.ref("messages")
    .child("room1")
    .push({ id: 1, author: "me", message: "some text 1" })
}

const App = () => {
  const [session, setSession] = useState(null)

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        setSession(user)
      } else {
        setSession(null)
      }
    })
  }, [])

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persiststore}>
        <BrowserRouter>
          <DefaultThemeProvider themes={themes} initialTheme="light">
            <button onClick={createMessage}>ddd</button>
            <Header session={session} />
            <Switch>
              <PublicRoute
                isAut={session}
                path="/"
                exact={true}
                component={Home}
              />
              <PrivateRoute
                isAut={session}
                path="/profile"
                component={Profile}
              />
              <PrivateRoute isAut={session} path="/chat" component={Chat} />
              <PrivateRoute isAut={session} path="/gists" component={Gist} />
              <PublicRoute isAut={session} path="/login" component={Login} />
              <PublicRoute isAut={session} path="/sign-up" component={SignUp} />
              <Route path="*" component={() => <h1>404</h1>} />
            </Switch>
          </DefaultThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
