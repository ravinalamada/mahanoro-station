import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import { getCity } from '../actions'
import { useParams, Link } from 'react-router-dom';
import { Trips} from '../components';

function TripsContainer({city, getCity}) {
  console.log(city);
	const { destination } = useParams();
  const findCityByName = city.find(city => city.destination === destination);
  console.log(findCityByName);
  const dateData = findCityByName && findCityByName.departureTime;

  // Get the day name
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var d = new Date(dateData);
  var dayName1 = days[d.getDay()];
  var dayName2 = days[d.getDay() + 1];
  var dayName3 = days[d.getDay() + 2];

  // console.log('daaeaeae', dayName);
  var date = new Date(findCityByName && dateData * 1000);
  // Hours part from the timestamp
  var hours = date.getHours();
  // Minutes part from the timestamp
  var minutes = "0" + date.getMinutes();

  // Get full date
  var fullDate = new Date().toLocaleDateString("en-US");
  var fullDate2 = new Date().toLocaleDateString("en-US");
  console.log(fullDate2);

  // Get seats
  const seatsData = findCityByName && findCityByName.seats;
  const filteredAvailableSeats = findCityByName && seatsData.filter(seat => seat.isAvailable === true);
  const seats = findCityByName && filteredAvailableSeats.length;


  // Get cityData
  useEffect(() => {
   getCity();
  }, [])

	return (
		<>
      <Trips>
        <Trips.Frame>
          <Trips.Logo></Trips.Logo>
        </Trips.Frame>
        <Trips.Frame>
          <Trips.Day>{dayName1}</Trips.Day>
          <Trips.Hours>{hours}:{minutes}</Trips.Hours>
        </Trips.Frame>
        <Trips.Frame>
          <Trips.Date>{fullDate}</Trips.Date>
          <Trips.Seats>{seats} seats left</Trips.Seats>
        </Trips.Frame>
        <Trips.Frame>
          <Link to={`/tripsContainer/${findCityByName && findCityByName.id}`}>
            <Trips.Buttons>Book a seat</Trips.Buttons>
          </Link>
        </Trips.Frame>
      </Trips>
      <Trips>
        <Trips.Frame>
          <Trips.Logo></Trips.Logo>
        </Trips.Frame>
        <Trips.Frame>
          <Trips.Day>{dayName2}</Trips.Day>
          <Trips.Hours>{hours}:{minutes}</Trips.Hours>
        </Trips.Frame>
        <Trips.Frame>
          <Trips.Date>{fullDate}</Trips.Date>
          <Trips.Seats>{seats} seats left</Trips.Seats>
        </Trips.Frame>
        <Trips.Frame>
          <Link to={`/tripsContainer/${findCityByName && findCityByName.id}`}>
            <Trips.Buttons>Book a seat</Trips.Buttons>
          </Link>
        </Trips.Frame>
      </Trips>
      <Trips>
        <Trips.Frame>
          <Trips.Logo></Trips.Logo>
        </Trips.Frame>
        <Trips.Frame>
          <Trips.Day>{dayName3}</Trips.Day>
          <Trips.Hours>{hours}:{minutes}</Trips.Hours>
        </Trips.Frame>
        <Trips.Frame>
          <Trips.Date>{fullDate}</Trips.Date>
          <Trips.Seats>{seats} seats left</Trips.Seats>
        </Trips.Frame>
        <Trips.Frame>
          <Link to={`/tripsContainer/${findCityByName && findCityByName.id}`}>
            <Trips.Buttons>Book a seat</Trips.Buttons>
          </Link>
        </Trips.Frame>
      </Trips>
		</>
	);
}

export default connect((state) => ({city: state.city}), ({getCity}))(TripsContainer)
