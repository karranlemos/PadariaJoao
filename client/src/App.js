import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Index from './components/pages/Index';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Products from './components/pages/Products';
import Error from './components/pages/Error';

import './scss/style.scss';

export default () => (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Index}/>
        <Route exact path="/sobre" component={About}/>
        <Route exact path="/produtos" component={Products}/>
        <Route exact path="/contato" component={Contact}/>
        <Route render={(props) => <Error {...props} error={"Page Not Found"}/>}/>
      </Switch>
    </BrowserRouter>
);