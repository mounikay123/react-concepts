import React, { Component } from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import vamsiLogin from '../mounika/vamsiLogin';
import EmployerVamsi from '../components/EmployerVamsi';

 class Routing extends Component {
    render() {
        return (
            <div>
                
                    <BrowserRouter>
                    <Switch>
                    <Route  exact={true} path="/"  component={vamsiLogin} />
                    <Route   path="/employerVamsi"  component={EmployerVamsi} />
                    </Switch>
                    </BrowserRouter>
                
            </div>
        )
    }
}


export default Routing;