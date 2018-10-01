import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import TripPlanner from './TripPlanner';
import MasterTripList from '../containers/MasterTripList';
import UserTripList from './UserTripList';
import TripsNew from './trip_new';


export default class App extends Component {

  render(){
    return (
      <div className="container">
        <Header/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/trip' component={TripPlanner} />
          <Route path='/experiences' component={MasterTripList} />
          <Route path='/triplist' component={UserTripList} />
          <Route path="/trips/new" component={TripsNew} />
        </Switch>
      </div>
    );
  }
}
