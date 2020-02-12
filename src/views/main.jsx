import React, { Component } from 'react'
import Header from './../components/header.jsx'
import Dial from './../components/dial.jsx'

export default class Main extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Dial/>
            </div>
        )
    }
}
