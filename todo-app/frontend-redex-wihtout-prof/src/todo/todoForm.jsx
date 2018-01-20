import React, { Component } from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { add, search, changeDescription, clear } from './todoActions'

class TodoForm extends Component {
    constructor(props){
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }
    keyHandler(e) {
        const { add, search, description, clear } = this.props
        if (e.key === 'Enter'){
            e.shiftKey ? this.props.search() : this.props.add(description)
        } else if (e.key === 'Escape'){
            clear()
        }
    }
    render(){
        const { add, search, description, clear } = this.props
        return (
            <div className='tableForm'>
                <div role='form' className="todoForm">
                    <Grid cols='12 9 10'>
                        <input type="text" id='description' className='form-control'
                            placeholder='Adicione uma tarefa' value={description}
                            onChange={this.props.changeDescription}
                            onKeyUp={this.keyHandler} />
                    </Grid>
                    <Grid cols='12 3 2'>
                        <div>
                            <IconButton style='primary' icon='plus' onClick={() => add(description)} />
                            <IconButton style='info' icon='search' onClick={search} />
                            <IconButton style='default' icon='close' onClick={clear} />
                        </div>
                    </Grid>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ( {  description: state.todo.description  } )
const mapDispatchToProps = dispatch => bindActionCreators({ add, search, changeDescription, clear }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)