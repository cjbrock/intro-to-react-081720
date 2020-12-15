// import React, { Component } from 'react';

// class AnotherComponent extends Component {

import React from 'react';

class AnotherComponent extends React.Component {

    render() {
        console.log(this.props)
        return (
            <div>
                <li>{this.props.name}</li>
            </div>
        );
    }
}

// function AnotherComponent(props){
//     return <li>{props.name}</li>
// }

// function AnotherComponent({name, age}){
//     return <li>{name} is {age} years old</li>
// }

export default AnotherComponent;