import React, { Component, Fragment } from 'react';

//import Header from './Header';
import Footer from './Footer';

import '../containers/Main.css';

class Wrapper extends Component {

    render(){

        return(
            <Fragment>
                <main className="grid">
                    <section className="todoContent">
                    </section>
                    <Footer />
                </main>
            </Fragment>
        )
    }
}

export default Wrapper;