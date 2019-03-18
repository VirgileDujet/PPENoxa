import React  from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Accueil from './Accueil.js';






const routes = () => {
return (
  <BrowserRouter>
    <Switch>
    <Route path="/" exact component={Accueil}/>

    </Switch>
    </BrowserRouter>
);


};
export default routes;
