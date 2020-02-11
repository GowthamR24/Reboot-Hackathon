import React from 'react'
import ReactDom from 'react-dom'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom"
import Main from './views/main.jsx'
import './css/styles.css' 

ReactDom.render(<Router>
                    <Switch>
                    <Route exact path="/">
                            <Main />
                    </Route>
                    </Switch>
                    </Router>,document.getElementById("app"));