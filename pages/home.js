import React from 'react';
import CityItemsContainer from '../containers/cityItems';
import TripsContainer from '../containers/trips';
import CityContainer from '../containers/city';
import PannelsContainer from '../containers/pannelContainer';
import { Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import TripsContainer from '../containers/city';
import PannelContainer from '../containers/pannelContainer';

function home({Modal}) {
  return (
    <>
    <Switch>
      <Route exact path="/">
        <CityItemsContainer></CityItemsContainer>
      </Route>
      <Route exact path='/cityItemsContainer/:destination'>
         <TripsContainer />
      </Route>
      <Route exact path='/tripsContainer/:tripsId'>
         <CityContainer />
      </Route>
    </Switch>
    {/* <PannelsContainer /> */}
    {Modal && <PannelContainer />}
  </>
  )
}

function mapStateToProps(state){
  return {
    Modal: state.Modal,
  }
}

export default connect(mapStateToProps)(home)
