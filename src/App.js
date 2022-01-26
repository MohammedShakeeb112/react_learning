import React from 'react';
// import CounterExample from './components/CounterExample'
import Header from './components/Header'
import Footer from './components/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from 'react-router-dom';
import Home from './Views/Home'
import About from './Views/About'
import Product from './Views/Product';

function App() {
  return (
    <div>

      <Router>
        <Header />

        <div className ="p-3">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>

          <Route path="/about">
            <About/>
          </Route>          
          
          <Route path="/products/:id">
            <Product/>
          </Route>          
        </Switch>
        </div>
        

        <Footer />

      </Router>


      {/* <CounterExample/> */}
    </div>
  );
}

export default App;
