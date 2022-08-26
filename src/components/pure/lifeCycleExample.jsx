/**
 * Ejemplo de componente de tipo clase que dispone de los 
 * metodos de ciclo de vida
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';


class LifeCycleExample extends Component {
    constructor(props) {
        super(props)
        console.log('CONSTRUCTOR: Cuando se instancia el componente')
    }

    componentWillMount() {
        console.log('WillMount: Justo antes del montaje del componente, antes de renderizarlo')
    }

    componentDidMount() {
        console.log('DidMount: Antes del montaje del componente')
    }

    componentWillReceiveProp(nextProps) {
        console.log('WillReceiveProps: Si va a recibir nuevas props')
    }

    shouldComponentUpdate(nextProps, nextState) {
        /**
         * Controlar si el componente debe o no actualizarse 
         */
        // return true / false
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('WillUpdate: Justo antes de actualizarse')
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('DidUpdate: Justo después de actualizarse')
    }

    componentWillUnmount() {
        console.log('WillUmount: Justo antes de desaparecer')
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}


LifeCycleExample.propTypes = {

};


export default LifeCycleExample;

