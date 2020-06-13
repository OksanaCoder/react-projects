import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

class Btn extends Component {
    showMessage = () => {
        alert('Hello ' + this.props.name);
    }
    render() {
        return (
            <Button onClick={this.showMessage}>button</Button>
        )
    }
}


export default Btn;