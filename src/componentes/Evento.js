import React, { Component } from 'react';
import PropTypes from 'prop-types'


class Evento extends Component {
    render() {
        const {name} = this.props.info
        if(!name) return null;

        let descrip = (this.props.info.description.text)? this.props.info.description.text : 'No description'
        console.log(descrip.length)

        descrip = (descrip.length > 250) ? descrip.substr(0,250) : descrip
        
        return (
            <div>
               <div className="uk-card uk-card-default">
                   <div className="uk-card-media-top">
                    <img src={(this.props.info.logo)? this.props.info.logo.url : ''} alt={this.props.name}/>
                   </div>
                   <div className="uk-card-body">
                       <h3 className="uk-card-title">
                           {this.props.info.name.text}
                           <p>{descrip}</p>
                       </h3>
                   </div>
                   <div className="uk-card-footer">
                       <a href={this.props.info.url} target="_blank" className="uk-button uk-button-secondary">
                           Más información
                       </a>
                   </div>
               </div>
            </div>
        );
    }
}

Evento.propTypes = {
    info: PropTypes.object.isRequired
}

export default Evento;