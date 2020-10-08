import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import AddItem from './components/pages/AddItem';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Navbar from './components/layout/Navbar';
import AppState from './context/photostate/AppState';
import {Alert} from './components/layout/Alert';
import './bootstrap.min.css';
import './index.css';

function App() {
  return (
    <AppState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container-fluid">
            <Alert />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/add_record" component={AddItem} />
              <Route exact path="/about" component={About} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
        <footer className="page-footer" style={{marginTop: '100px'}}>
          <div className="card">
            <div className="card-footer">
              <div className="footer-copyright text-center">
                © 2020 Copyright:
                <a
                  href="https://www.github.com/N2SPARTAN"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{textDecoration: 'none'}}
                >
                  {' '}
                  Ahmed Shaikh
                </a>
              </div>
            </div>
          </div>
        </footer>
      </Router>
    </AppState>
  );
}

export default App;
