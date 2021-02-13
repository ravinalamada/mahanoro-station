import React from 'react';
import CityItemsContainer from '../containers/cityItems';
import TripsContainer from '../containers/trips';
import CityContainer from '../containers/city';
import { Switch, Route, Link } from 'react-router-dom';
// import TripsContainer from '../containers/city';
import Items from '../containers/items'

export default function home() {
  return (
    <>
    <Items />
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
  </>
  )
}
