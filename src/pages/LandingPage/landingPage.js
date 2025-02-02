import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from "axios";
import './style.css';

export default class LandingPage extends Component {
    state = {
        redirect: false
    }
    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/login' />
        }
    }
    render() {
        return (
                <div className="openingDiv">
                    <h1 className="cribSmack">CribSmack</h1>
                    {this.renderRedirect()}
                    <button className="getStrtdButton" onClick={this.setRedirect}>Get Started</button>
                </div>
        )
    }
};