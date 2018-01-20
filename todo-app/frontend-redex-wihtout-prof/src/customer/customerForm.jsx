import React, {Component} from 'react'
import Grid from '../template/grid'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeName, changeAddress, changePhone, add, update } from './customerActions'

class customerForm extends Component {
    render(){
        const { name, address, phone, changeName, changeAddress, changePhone, add, update } = this.props
        return (
            <div className='tableForm'>
                <div role='form' className="customerForm">
                    <Grid cols='12 12 12'>
                        <input type="text" id='name' className='form-control'
                            placeholder='Adicione o nome' value={name}
                            onChange={changeName}
                            onKeyUp={() => { }} />
                    </Grid>
                    <Grid cols='12 12 12'>
                        <input type="text" id='address' className='form-control'
                            placeholder='Adicione o enderço' value={address}
                            onChange={changeAddress}
                            onKeyUp={() => { }} />
                    </Grid>
                    <Grid cols='12 12 12'>
                        <input type="text" id='phone' className='form-control'
                            placeholder='Adicione o telefone' value={phone}
                            onChange={changePhone}
                            onKeyUp={() => { }} />
                    </Grid>

                    <Grid cols='12 12 12'>
                        <button className='btn btn-success' onClick={() => this.props.created ? add(name, address, phone) : update(name, address, phone)}>{this.props.created ? 'Salvar' : 'Atualizar'}</button>
                    </Grid>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({ 
    name: state.customer.name, 
    address: state.customer.address, 
    phone: state.customer.phone,
    created: state.customer.created
})
const mapDispatchToProps = dispatch => bindActionCreators({ changeName, changeAddress, changePhone, add, update }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(customerForm)