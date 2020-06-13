import React, { Component } from 'react';
import { Button} from 'react-bootstrap';

function ButtonFunct(props) {
   const showMessage = () => {
     alert('Hello ' + props.name);
   }
    return (
        <Button onClick={showMessage}>Button</Button>
    )
}


export default ButtonFunct;