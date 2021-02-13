import React from 'react';
import {connect} from 'react-redux'
import { CityItems } from '../components';
import { Link } from 'react-router-dom';

function cityItemsContainer({destinations}) {

  return (
      <CityItems>
        {destinations && destinations.map(destination => (
          <Link to='' key={destination}>
            <CityItems.Title>{destination}</CityItems.Title>
            <CityItems.Logo>logo</CityItems.Logo>
          </Link>
      ))}
  </CityItems>
  )
}

export default connect((state) => ({destinations: state.destination}))(cityItemsContainer)

