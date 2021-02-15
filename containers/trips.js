import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import { getCity } from '../actions'
import { useParams, Link } from 'react-router-dom';
import { Trips} from '../components';

function TripsContainer({city, getCity}) {

	const { destination } = useParams();
  const findCityByName = city.find(city => city.destination === destination);
  const filteredCityByDestination = city.filter(city => city.destination == destination);

  // Get the day name
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  // Get cityData
  useEffect(() => {
   getCity();
  }, [])

	return (
		<>
     {
       filteredCityByDestination && filteredCityByDestination.map((city, i )=> {
          const availlableSeat = city.seats.filter(seat => seat.isAvailable === true);
          const date = new Date(city.departureTime * 1000);
          // Hours part from the timestamp
          var hours = date.getHours();
          // Minutes part from the timestamp
          var minutes = "0" + date.getMinutes();

          // Get day name
          var day = new Date(city.departureTime);
          // console.log(city.departureTime);
          var dayName = days[day.getDay() + i]

          // Get Full Date
          var fullDate = new Date(1613480400).toLocaleDateString("en-US");
          return (
          <Trips key={city.id}>
          <Trips.Frame>
            <Trips.Logo></Trips.Logo>
          </Trips.Frame>
          <Trips.Frame>
            <Trips.Day>{dayName}</Trips.Day>
            <Trips.Hours>{hours}:{minutes}</Trips.Hours>
          </Trips.Frame>
          <Trips.Frame>
            <Trips.Date>{fullDate}</Trips.Date>
            <Trips.Seats>{availlableSeat.length} seats left</Trips.Seats>
          </Trips.Frame>
          <Trips.Frame>
            <Link to={`/tripsContainer/${findCityByName && findCityByName.id}`}>
              <Trips.Buttons>Book a seat</Trips.Buttons>
            </Link>
          </Trips.Frame>
        </Trips>
         )
       })
     }
		</>
	);
}

export default connect((state) => ({city: state.city}), ({getCity}))(TripsContainer)
