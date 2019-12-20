import React, { Component } from 'react';

class Buscador extends Component {

    render(){

        return(
            <div>
                <form className="Buscador">
                    <input type="search" />
                    <button>Buscar</button>
                </form>
            </div>
        )
    }
}

export default Buscador;