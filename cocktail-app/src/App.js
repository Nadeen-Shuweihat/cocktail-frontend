import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './component/Home';
import Fav from './component/Fav';

class App extends React.Component {

  render() {
    return(
      <>
        <Router>
          <Header/>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/fav">
              <Fav/>
            </Route>
          </Switch>
          <Footer/>
        </Router>
      </>
    )
  }
}

export default App;
