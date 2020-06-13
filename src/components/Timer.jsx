import React, { Component } from 'react';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time : 0,
            isOn: false,
            start: 0
        }
        this.startTimer = this.startTimer.bind(this)
        this.stopTimer = this.stopTimer.bind(this)
        this.resetTimer = this.resetTimer.bind(this)
    }
    
    startTimer() {
        this.timer = setInterval(() => this.setState({
            time: this.state.time + 1 
        }), 1000)
        
    }

    stopTimer() {
        clearInterval(this.timer)
    }
    resetTimer () {
        this.setState({ time: 0})
    }
   render() {
   

       return (
           <div className='container mt-5'>
               <h4>{this.state.time}</h4>
             <button onClick={this.startTimer}>start</button>
             <button onClick={this.stopTimer}>stop</button>
             <button onClick={this.resetTimer}>restart</button>
          </div>
       )
   }
}

export default Timer;
