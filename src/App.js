import React from 'react';
import './App.css';
import Header from './Component/Header';
import Signup from './Component/Signup';
import { Router, Route,Switch } from 'react-router-dom';
import history from '../src/history';
import Search from './Component/Search';

console.log(history, "TTTTTTTTTt")
function App() {
  return (
    <Router history={history}>
    <div className="App">
      <Header/>
     <Switch>
     <Route exact path="/" component={Signup} />
      <Route exact path="/searchptin" component={Search} />
     </Switch>
   
    </div>
    </Router>
  );
}

export default App;


