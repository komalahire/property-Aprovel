import React from 'react';

import Signup from './Component/Signup';
import { Router, Route,Switch } from 'react-router-dom';
import history from '../src/history';
import Search from './Component/Search';
import Admin from './Component/admin';
import SuperAdmin from './Component/superadmin'
import Login from './Component/Login'

function App() {
  return (
    <Router history={history}>
    <div className="App">
     <Switch>
     <Route exact path="/" component={Signup} />
    <Route exact path="/login" component={Login}/>
    <Route exact path="/searchptin" component={Search} />
    <Route exact path="/admin" component={Admin} />
    <Route exact path="superadmin" component={SuperAdmin}/>
     </Switch>
    </div>
    </Router>
  );
}

export default App;


