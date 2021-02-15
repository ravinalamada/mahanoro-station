import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getCity} from '../actions';
import {Link} from 'react-router-dom'

function items({city}) {
  console.log(city);

  useEffect(() => {
  getCity
  },);

  return (
    <>
    {/* {destinations && destinations.map(destination => (
      <Link to='' key={destination}>
        {destination}
      </Link> */}

  </>
  )
}

export default connect((state) => ({city: state.city}), ({getCity}))(items)
