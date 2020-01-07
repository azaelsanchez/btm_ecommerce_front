import React, { Component, Fragment } from 'react';

//Componentes importados
import FilterOrder from '../components/FilterOrder';
import ProductsMostSelled from '../components/ProductsMostSelled';
import ProvincesMoreSales from '../components/ProvincesMoreSales';

class AdminProfile extends Component{

    render(){
        return(
            <Fragment>
                <FilterOrder/>
                <ProductsMostSelled/>
                <ProvincesMoreSales/> 
            </Fragment>
            
        )
    }
}


export default AdminProfile;