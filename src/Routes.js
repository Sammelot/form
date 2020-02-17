import React from 'react';
import { Route, Switch} from 'react-router-dom';
import HomePage from './components/HomePage';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={HomePage} />    
    </Switch>

);

export default Routes;