import React  from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Accueil from './Accueil.js';
import Charts from './charts';
import Tables from './tables.js';
 






const routes = () => {
return (
  <BrowserRouter>
    <Switch>
    <Route path="/" exact component={Accueil}/>
    <Route path="/charts" exact component={Charts}></Route>
    <Route path="/tables" exact component={Tables}></Route>
    </Switch>
    </BrowserRouter>
);


};
export default routes;
