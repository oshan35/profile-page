
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 

import HomePage from "./pages/Homepage/HomePage";
import Footer from "./components/Footer/Footer";

import {Navbar} from './components';
import ServicesPage from './pages/ServicesPage/ServicesPage';

function App() {
  return (
    <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/Services" exact component={ServicesPage} />
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;
