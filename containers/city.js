import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom';
import {City} from '../components';
import {getCity} from '../actions'

 function CityContainer({city, getCity}) {
  const { tripsId } = useParams();
  const findCityById = city.find(city => city.id == tripsId);
  console.log(findCityById);

  useEffect(() => {
   getCity();
  }, [])

	return (
		<>
     <header>
       <h2>Book a seat to:</h2>
       <h2>{findCityById && findCityById.destination}</h2>
     </header>
      {
        <City>
          <City.Frame>
            <City.DepartureTime><span>Departure time</span>{findCityById && findCityById.departureTime}</City.DepartureTime>
          </City.Frame>
          <City.Frame>
            <City.Name>{findCityById && findCityById.driverName}</City.Name>
          </City.Frame>
          <City.Frame>
            <City.Contact>
              {findCityById && findCityById.driverContact}
            </City.Contact>
          </City.Frame>
          <City.Frame>
            <City.EstimatedDuration>{findCityById && findCityById.estimatedDuration}</City.EstimatedDuration>
          </City.Frame>
          <City.Frame>
            {/* <City.Breaks></City.Breaks> */}
          </City.Frame>
          <City.Frame>
            <City.Price>{findCityById && findCityById.price} <span>Ar/seat</span></City.Price>
          </City.Frame>
          <City.Frame>
            <City.Buttons>Book seats</City.Buttons>
          </City.Frame>
          <City.Frame>
            <City.Price></City.Price>
          </City.Frame>
        </City>
      }
		</>
	);
}

export default connect((state) => ({city: state.city}), ({getCity}))(CityContainer)
