import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeValue } from './fieldActions'

class Field extends Component {
    

    render(){
        return (
            <div>
                <input type="text" onChange={this.props.changeValue} value={this.props.value} />
                <h1>{this.props.value}</h1>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        value: state.field.value
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ changeValue }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Field)