import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import CustomerForm from './customerForm'
import CustomerList from './customerList'

export default class Customer extends Component {
    render(){
        return (
            <div>
                <PageHeader name='Clientes' small='Cadastro'></PageHeader>
                <CustomerForm />
                <CustomerList />
            </div>
        )
    }
}