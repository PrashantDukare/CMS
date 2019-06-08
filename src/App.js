import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Listing from './containers/Listing/Listing';
import Page from './containers/Page/Page';
import './App.css';

class App extends Component {

  render() {
    return (
        <div className="App">

          <div className="App-header">
            <img src='https://assets.flightright.net/public/assets/images/commons/logos/flightright/flightright-logo--claim--en.svg' alt='Logo'/>
            <Link className='home-link' to={`/home`}><i className='fa fa-home'/>Home</Link>
          </div>
          <Switch>
            {/*{ Route for home admin page}*/}
            <Route path='/home' exact component={Listing}/>
            {/*{ Route for edit page}*/}
            <Route path='/page/edit/:id' exact component={Page}/>
            {/*{ Route for viewing page}*/}
            <Route path='/page/:id' exact component={Page}/>
            {/*{ Default Route for home admin page}*/}
            <Route path='/' exact component={Listing}/>
          </Switch>
        </div>
    );
  }
}

export default App;
