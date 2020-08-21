import React from "react"
import "./App.css"
import Navbar from "./Components/Navbar"
import { Switch, Route } from "react-router-dom"
import Home from "./pages/Home"
import Rooms from "./pages/Rooms"
import SingleRoom from "./pages/SingleRoom"
import Error from "./pages/Error"

const App = () => {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/rooms" component={Rooms} />
        <Route path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </>
  )
}

export default App
