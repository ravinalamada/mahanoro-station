import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom';
import {City} from '../components';
import {getCity, setTotalPrice, addToCart, removeCartItems, displayModal} from '../actions'
import { Buttons } from '../components/trips/styles/trips';

 function CityContainer({city, getCity, addToCart, displayModal,removeCartItems, totalPrice, cartItems}) {
   console.log('cart', cartItems);
  const { tripsId } = useParams();
  const [total, setTotal] = useState(0);
  const findCityById = city.find(city => city.id == tripsId);
  const seatData = findCityById && findCityById.seats;
  const seatId = findCityById && findCityById.id

  useEffect(() => {
   getCity();
  }, [])

  const date = new Date(findCityById && findCityById.departureTime * 1000);
  // Hours part from the timestamp
  var hours = date.getHours();
  // Minutes part from the timestamp
  var minutes = "0" + date.getMinutes();


  useEffect(() => {
		const newTotal = cartItems.reduce((total, seat) => {
			total += seat.price;
			return total;
		}, 0);
		return setTotal(newTotal);
	}, [cartItems]);


	return (
		<>
     <header>
       <h2>Book a seat to:</h2>
       <h2>{findCityById && findCityById.destination}</h2>
     </header>
      {
        <City>
          <City.Wrapper>
            {seatData && seatData.map(seat => {
              const isAlreadyInCart = cartItems.some(item => item.id === seatId )
              if(seat.isAvailable === true && !isAlreadyInCart) {
                return (
                  <City.RedBgButtons key={seat.id}>
                    <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><path d="M0,0h24v24H0V0z" fill="none" outline="#29ABE2"/></g><g><path d="M15,3H9C7.9,3,7,3.9,7,5v9h10V5C17,3.9,16.1,3,15,3z M18,15H6c-1.1,0-2,0.9-2,2v3c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1 v-3h12v3c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1v-3C20,15.9,19.1,15,18,15z M6,11.5C6,12.33,5.33,13,4.5,13S3,12.33,3,11.5 S3.67,10,4.5,10S6,10.67,6,11.5z M21,11.5c0,0.83-0.67,1.5-1.5,1.5S18,12.33,18,11.5s0.67-1.5,1.5-1.5S21,10.67,21,11.5z"/></g></svg>
                  </City.RedBgButtons>
                )
              }else if(seat.isAvailable === false && isAlreadyInCart) {
                <City.Buttons key={seat.id}>
                    {seat.seats}
                    <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><path d="M0,0h24v24H0V0z" fill="none" outline="#29ABE2"/></g><g><path d="M15,3H9C7.9,3,7,3.9,7,5v9h10V5C17,3.9,16.1,3,15,3z M18,15H6c-1.1,0-2,0.9-2,2v3c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1 v-3h12v3c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1v-3C20,15.9,19.1,15,18,15z M6,11.5C6,12.33,5.33,13,4.5,13S3,12.33,3,11.5 S3.67,10,4.5,10S6,10.67,6,11.5z M21,11.5c0,0.83-0.67,1.5-1.5,1.5S18,12.33,18,11.5s0.67-1.5,1.5-1.5S21,10.67,21,11.5z"/></g></svg>
                </City.Buttons>
              }else {
                <City.DefaultBgButtons key={seat.id}>
                    <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><path d="M0,0h24v24H0V0z" fill="none" outline="#29ABE2"/></g><g><path d="M15,3H9C7.9,3,7,3.9,7,5v9h10V5C17,3.9,16.1,3,15,3z M18,15H6c-1.1,0-2,0.9-2,2v3c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1 v-3h12v3c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1v-3C20,15.9,19.1,15,18,15z M6,11.5C6,12.33,5.33,13,4.5,13S3,12.33,3,11.5 S3.67,10,4.5,10S6,10.67,6,11.5z M21,11.5c0,0.83-0.67,1.5-1.5,1.5S18,12.33,18,11.5s0.67-1.5,1.5-1.5S21,10.67,21,11.5z"/></g></svg>
                </City.DefaultBgButtons>
              }
            })
             }
          </City.Wrapper>
          <City.Wrapper>
            <City.Frame>
              <City.DepartureTime><span>Departure time: </span>{hours}:{minutes}</City.DepartureTime>
            </City.Frame>
            <City.Frame>
              <City.Name>Driver: <span>{findCityById && findCityById.driverName}</span></City.Name>
            </City.Frame>
            <City.Frame>
              <City.Contact>
                Drivers'contact: <span>{findCityById && findCityById.driverContact}</span>
              </City.Contact>
            </City.Frame>
            <City.Frame>
              <City.EstimatedDuration>Estimated duration: <span>{findCityById && findCityById.estimatedDuration}</span></City.EstimatedDuration>
            </City.Frame>
            <City.Frame>
              <City.Breaks>Breaks: <span>{findCityById && findCityById.breaks}</span></City.Breaks>
            </City.Frame>
            <City.Frame>
              <City.Price>{findCityById && findCityById.price} <span>Ar/seat</span></City.Price>
            </City.Frame>
            <City.Frame>
              <City.Buttons onClick={() => {
                if(displayModal) {
                  displayModal(true);
                }
              }}>Book seats</City.Buttons>
            </City.Frame>
            <City.Frame>
              <City.Price>{total !== 0 ? <span>Total: {total} Ar</span> : <span>You didn't book any place yet.</span>}</City.Price>
            </City.Frame>
          </City.Wrapper>
        </City>
      }
		</>
	);
}

function mapStateToProps(state){
  return {
    city: state.city,
    totalPrice: state.totalPrice,
    cartItems: state.cartItems,
  }
}

const mapToDispatch = {
 getCity,
 setTotalPrice,
 addToCart,
 removeCartItems,
 displayModal,
}


export default connect(mapStateToProps, (mapToDispatch))(CityContainer)
