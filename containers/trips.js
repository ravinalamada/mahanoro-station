import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import { getCity } from '../actions'
import { useParams, Link } from 'react-router-dom';
import { Trips} from '../components';

function TripsContainer({city, getCity}) {
  console.log(city);
	const { destination } = useParams();
  const filterCityByName = city.filter(city => city.destination === destination);
  console.log(filterCityByName);

  useEffect(() => {
   getCity();
  }, [])

	return (
		<>
      {
        filterCityByName.map(city => (
          <Trips key={city.id}>
            <Trips.Frame>
              <Trips.Logo></Trips.Logo>
            </Trips.Frame>
            <Trips.Frame>
              <Trips.Day></Trips.Day>
              <Trips.Hours></Trips.Hours>
            </Trips.Frame>
            <Trips.Frame>
              <Trips.Date></Trips.Date>
              <Trips.Seats></Trips.Seats>
            </Trips.Frame>
            <Trips.Frame>
              <Link to={`/tripsContainer/${city.id}`}>
                <Trips.Buttons>Book a seat</Trips.Buttons>
              </Link>
            </Trips.Frame>
          </Trips>
        ))
      }
		</>
	);
}

export default connect((state) => ({city: state.city}), ({getCity}))(TripsContainer)
