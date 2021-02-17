import React from 'react';
import CityItemsContainer from '../containers/cityItems';
import DepartureTimeDetailsContainer from '../containers/departureTimeDetails';
import CityContainer from '../containers/city';
import { Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ModalContainer from '../containers/modal';
import HeaderContainer from '../containers/header';
import UserAccountContainer from '../containers/userAccount';

function home({Modal}) {
  return (
    <>
      <HeaderContainer />
      <Switch>
        <Route exact path="/">
          <CityItemsContainer></CityItemsContainer>
        </Route>
        <Route exact path='/cityItemsContainer/:destination'>
          <DepartureTimeDetailsContainer />
        </Route>
        <Route exact path='/departureTimeDetailsContainer/:tripsId'>
          <CityContainer />
        </Route>
        <Route exact path='/userAccount'>
          <UserAccountContainer />
        </Route>
      </Switch>
      {Modal && <ModalContainer />}
    </>
    )
}

function mapStateToProps(state){
  return {
    Modal: state.Modal,
  }
}

export default connect(mapStateToProps)(home)
