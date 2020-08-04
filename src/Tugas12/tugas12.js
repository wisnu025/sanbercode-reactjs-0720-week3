import React, { Component } from 'react'

let formatAMPM = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let secs = date.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    secs = secs < 10 ? '0' + secs : secs
    let strTime = hours + ':' + minutes + ':' + secs + ' ' + ampm;
    return strTime;
}

class Timer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            time: 100
        }
    }
    componentDidMount() {
        if (this.props.start !== undefined) {
            this.setState({ time: this.props.start })
        }
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentDidUpdate() {
        if (this.state.time < 0) {
            this.componentDidUnmount()
        }
    }

    componentDidUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            time: this.state.time - 1
        });
    }

    render() {
        return (
            <>
                {this.state.time > 0 ?
                    < center >
                        <label > <b>Sekarang Jam {formatAMPM(new Date)} &emsp; Hitung mundur  {this.state.time}</b></label>
                    </center> : null
                }
            </>
        )
    }
}


export default Timer