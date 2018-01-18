import React, { Component } from 'react'

export default class ClassComponent extends Component {
    constructor(props){
        super(props)
        this.state = { value: this.props.intialVelue }
    }

    sum(delta){
        this.setState({ value: this.state.value + delta })
    }

    render() {
        return (
            <div>
                <h1>{this.state.value}</h1>
                <button onClick={ () => this.sum(-1) }>dec</button>
                <button onClick={ () => this.sum(1) }>inc</button>
            </div>
        )
    }
}