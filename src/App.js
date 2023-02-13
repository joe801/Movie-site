//import { useState, useEffect } from 'react';
import './App.css';
import Search from './components/Search';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieDetail from './components/MovieDetail';

// 20bd7cf3

function App() {
  
  return (
    <Router>
      <>
        <Switch>
          <Route exact path='/'>
            <Search/>
          </Route>
          <Route path='/:id'>
            <MovieDetail />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
