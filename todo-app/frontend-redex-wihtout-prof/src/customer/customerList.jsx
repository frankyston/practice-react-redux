import React, { Component } from 'react'
import IconButton from '../template/iconButton'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getList, edit, remove } from './customerActions'

class customerList extends Component {
    constructor(props) {
        super(props)
        this.rendeRows = this.rendeRows.bind(this)
    }
    componentDidMount(){
        this.props.getList()
    }

    rendeRows() {
        const list = this.props.list || []
        return list.map(customer => (
            <tr key={customer._id}>
                <td>{customer.name}</td>
                <td>{customer.address}</td>
                <td>{customer.phone}</td>
                <td>
                    <IconButton style='success' icon='edit' onClick={() => this.props.edit(customer._id)} />
                    <IconButton style='danger' icon='trash-o' onClick={() => this.props.remove(customer._id)} />
                </td>
            </tr>
        ))
    }
    render(){
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Endereço</th>
                        <th>Telefone</th>
                        <th className='tableActions'>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.rendeRows()}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = state => ({ list: state.customer.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList, edit, remove }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(customerList)