import React, { Component } from 'react';
import moment from 'moment';
import 'moment-timezone';
import './Clock.css'





/**
 * Классовый компонент рендерит часы с учетом полученных в props данных
 */
export default class Clock extends Component {
    constructor() {
        super();
        this.state = {}
    }


    componentDidMount() {
        //приведение значения zone к валидному для библиотеки moment-timezone формату
        let zone = `Etc/GMT-0`
        let utc = this.props.props.zone
        if (Math.sign(utc) === -1) { zone = `Etc/GMT+` + -utc }
        if (Math.sign(utc) === 1) { zone = `Etc/GMT` + -utc }

        this.clockIntervalId = setInterval(() => this.setState({
            currentTime: moment().tz(zone).format("H:mm:ss")
        }), 1000)
        console.log(zone)

    }

    componentWillUnmount() {
        clearInterval(this.clockIntervalId)
    }

    handlerStop = () => {clearInterval(this.clockIntervalId)}


    render() {

        return (
            <div className='Clock'>
                <p>{this.props.props.name}</p>
                <div>{this.state.currentTime}</div>
                <button className='DelBut' onClick={() => { this.props.handleDeleteClock(this.props.props.id) }}>Удалить</button>
                <button className='StopBut' onClick={this.handlerStop}>Стоп</button>

            </div>

        )
    }
}


//часы с кнопкой Stop в функциональном исполнении


// import React, { useEffect, useState } from 'react';
// import moment from 'moment';

// export default function Clock() {
//     const [currentTime, setCurrentTime] = useState(moment().format("H:mm:ss"));
//     const [intervalId, setIntervalId] = useState(undefined);
    


//     useEffect(() => {
//         const intervalId = setIntervalId(() => {
//             setCurrentTime(moment().format("H:mm:ss"))
//         }, 1000);
//         setIntervalId(intervalId)

//         return () => {clearInterval(intervalId)}
//     }, [])

//     const handlerPush = () => {
//         clearInterval(intervalId)
//     }


//   return (
//     <div>
//         <div>{currentTime}</div>
//         <button onClick={handlerPush}>Stop</button>
//     </div>
//   )
// }

