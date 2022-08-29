import React, { Component } from 'react';
import moment from 'moment';
import 'moment-timezone';
import './Clock.css'

export default class Clock extends Component {
    constructor() {
        super();
        this.state = {}
    }

    handlePush = () => {
        clearInterval(this.clockIntervalId)

    }

    componentDidMount() {
        let zone = `Etc/GMT-0`
        let utc = this.props.props.zone
        if (Math.sign(utc) === -1) { zone = `Etc/GMT+` + -utc }
        if (Math.sign(utc) === 1) { zone = `Etc/GMT` + -utc }


        this.clockIntervalId = setInterval(() => this.setState({
            currentTime: moment().tz(zone).format("H:mm:ss")
        }), 1000)
        console.log(zone)

    }

    render() {

        return (
            <div className='Clock'>
                <p>{this.props.props.name}</p>
                <div>{this.state.currentTime}</div>
                <button className='DelBut' onClick={this.handlePush}>ТИК-ТАК</button>

            </div>

        )
    }
}
