import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getCity} from '../actions';
import {Link} from 'react-router-dom'

function items({destinations}) {
  return (
    <>
    {destinations && destinations.map(destination => (
      <Link to='' key={destination}>
        {destination}
      </Link>
    ))}
  </>
  )
}

export default connect((state) => ({destinations: state.destination}))(items)
