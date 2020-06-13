import React, { Component } from 'react';
import Btn from './Btn';
import ButtonFunct from './ButtonFunc';

class Main extends Component {
    state = {
        name: 'Dan'
    }
    changeName = (e)  => {
        this.setState({name: e.target.value})
    }
    render() {
        return (
        <>
        <div className='container'> 
     
                <p>Choose profile to view:
                    <select value={this.state.name} onChange={this.changeName}>
                        <option value='Dan'>Dan</option>
                        <option value='Oksana'>Oksana</option>
                        <option value='Alina'>Alina</option>
                    </select>
                </p>
                <h6>Welcome to {this.state.name}'s profile!</h6>
               <p><Btn name={this.state.name}/>(class)</p> 
               <p><ButtonFunct name={this.state.name}/>(function)</p> 

        </div>
        </>
    )
}
}


export default Main;