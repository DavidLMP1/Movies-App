import React, { Component } from 'react'
import "./Home.css"
import Buscador from '../Buscador/Buscador'

class Home extends Component {
    render() {
        return (
            <div className="cont">
                <div>
                   <Buscador/>
                </div>
            </div>
        )
    }
}

export default (Home)
