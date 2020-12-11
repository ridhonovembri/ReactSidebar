import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Sidebar';
import Home from './pages/Home';
import Products from './pages/Products';
import Reports from './pages/Reports';
import Teams from './pages/Teams';
import SubTeam1 from './pages/SubTeam1';
import SubTeam2 from './pages/SubTeam2';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/products' exact component={Products} />
          <Route path='/reports' exact component={Reports} />
          <Route path='/teams' exact component={Teams} />
          <Route path='/subteam1' exact component={SubTeam1} />
          <Route path='/subteam2' exact component={SubTeam2} />
        </Switch>
      </Router>
      
    </>
  );
}

export default App;
