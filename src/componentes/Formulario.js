import React, { Component } from 'react';
import PropTypes from 'prop-types'


class Formulario extends Component {

    nombreEventoRef = React.createRef();
    categoriaRef = React.createRef();

    buscarEvento = (e) =>{
        e.preventDefault();

        //crear el objeto
        
        const datosBusqueda = {
            nombre: this.nombreEventoRef.current.value,
            categoria: this.categoriaRef.current.value
        }
        //console.log(datosBusqueda)

        //pasarlo por props
        this.props.obtenerEventos(datosBusqueda);
    }

    mostrarOpciones = (key) =>{
        const categoria = this.props.categorias[key];
        const {id, name_localized} = categoria;

        if(!id || !name_localized) return null;

        return(
            <option key={id} value={id}>{name_localized}</option>
        )
    }

    render() {

        const categorias = Object.keys(this.props.categorias);
        return (
            <form onSubmit={this.buscarEvento}>
                <fieldset className="uk-fieldset uk-margin" >
                    <legend className="uk-legend uk-text-center">
                        Busca tu evento por nombre o categoría
                    </legend>
                    <div className="uk-column-1-3@m uk-margin" uk-margin="true">
                        <div className="uk-margin" >
                            <input ref={this.nombreEventoRef} type="text" className="uk-input" placeholder="Nombre de evento o ciudad"/>
                        </div>
                    </div>
                    <div className="uk-column-1-3@m uk-margin" uk-margin="true">
                        <div className="uk-margin" >
                            <select ref={this.categoriaRef} name="" id="" className="uk-select">
                                {categorias.map(this.mostrarOpciones)}
                            </select>
                        </div>
                    </div>
                    <div className="uk-column-1-3@m uk-margin" uk-margin="true">
                        <div className="uk-margin" >
                            <button className="uk-button uk-button-danger">Buscar</button>
                        </div>
                    </div>
                </fieldset>
            </form>
        );
    }
}

Formulario.propTypes = {
    obtenerEventos: PropTypes.func.isRequired,
    categorias: PropTypes.array.isRequired
}

export default Formulario;