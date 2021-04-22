import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import Home from './components/Home';
import Detail from './components/Detail';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/detail/:id'>
            <Detail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
