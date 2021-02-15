import React from 'react';
import {connect} from 'react-redux'
import { CityItems, CityList } from '../components';
import { Link } from 'react-router-dom';

function cityItemsContainer({destinations}) {

  return (
    <>
      <header>
        <h2>Where are you going?</h2>
        <span>Logo</span>
      </header>
      <CityList>
            {destinations && destinations.map(destination => (
              <CityItems key={destination}>
                <Link to={`/cityItemsContainer/${destination}`} >
                  <CityItems.Title>{destination}</CityItems.Title>
                  <CityItems.Logo>logo</CityItems.Logo>
                </Link>
              </CityItems>
          ))}
      </CityList>
  </>
  )
}

export default connect((state) => ({destinations: state.destination}))(cityItemsContainer)

