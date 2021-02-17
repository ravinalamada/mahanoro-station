import React, {useEffect, useState} from 'react';
import {connect, useSelector, useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';
import {Masthead,DestinationDetails, Buttons} from '../components';
import {getCity, setUsers, setBookedSeatsAction, bookedSeats, setTotalPrice, addToCart, removeCartItems, displayModal} from '../actions'
// import { Buttons } from '../components/trips/styles/trips';

function DestinationDetailsContainer({city, getCity, addToCart, displayModal,removeCartItems, totalPrice, cartItems}) {
  console.log('cart', cartItems);
  const { tripsId } = useParams();
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch()
  const findCityById = city.find(city => city.id == tripsId);
  const seatData = findCityById && findCityById.seats;
  const userData = useSelector(state => state.updatedSeat);

  function handleSeats(e) {
    const imageValue =  e.target.dataset.value;
    const seats = findCityById?.seats.find(seat => {
        return seat.id === Number(imageValue)
    })
    if (seats) {
        seats.isAvailable= userData.isSeatAvailabe
        seats.passengerFirstName= userData.passengerFirstName
        seats.passengerLastName= userData.passengerLastName
        seats.passengerPhoneNumber= userData.passengerPhoneNumber
        userData.price,
        addToCart(seats)
    }
    dispatch(setBookedSeatsAction(seats))
}
const findBookedSeats = seatData && seatData.filter(seat => seat.isAvailable === false && seat.passengerFirstName && seat.passengerLastName && seat.passengerPhoneNumber);
dispatch(bookedSeats(findBookedSeats))


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
    <Masthead>
    <Masthead.Wrapper>
    <Masthead.Title>Book a seat to:
    <span>{findCityById && findCityById.destination}</span>
    </Masthead.Title>
    <Masthead.Logo>
    <svg width="118" height="118" viewBox="0 0 118 118" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0)">
    <path d="M65.5556 19.8043C65.5556 23.4492 62.5957 26.4058 59 26.4058C55.4043 26.4058 52.4445 23.4492 52.4445 19.8043V6.60144C52.4445 2.95328 55.4043 0 59 0C62.5957 0 65.5556 2.95328 65.5556 6.60144V19.8043Z" fill="#FFCC4D"/>
    <path d="M30.0901 118C29.3559 118 28.6085 117.83 27.9071 117.479C26.7436 116.88 25.8623 115.848 25.4533 114.605C25.0443 113.362 25.1404 112.008 25.7208 110.835L55.0241 51.4185C55.8501 49.7403 57.5415 48.6815 59.3934 48.6815C61.2454 48.6815 62.9367 49.7403 63.7627 51.4185L93.0693 110.835C93.6509 112.007 93.7479 113.361 93.3394 114.604C92.931 115.847 92.0498 116.88 90.8863 117.479C90.3114 117.768 89.6848 117.94 89.0429 117.985C88.4009 118.03 87.7564 117.947 87.1468 117.741C86.5372 117.535 85.9746 117.21 85.4917 116.784C85.0089 116.359 84.6153 115.842 84.334 115.263L59.3967 64.7033L34.4626 115.263C34.0619 116.082 33.4399 116.772 32.6672 117.256C31.8944 117.74 31.0017 117.997 30.0901 118Z" fill="#FFAC33"/>
    <path d="M59.3965 66.8404C58.968 66.84 58.5438 66.7543 58.1488 66.5883C57.7537 66.4223 57.3957 66.1793 57.0955 65.8735L11.5115 19.6601C10.2397 18.3687 10.2397 16.2807 11.5115 14.9926C12.7832 13.7044 14.845 13.7044 16.1135 14.9926L59.3965 58.8689L102.673 14.9893C102.974 14.6835 103.332 14.4407 103.727 14.2749C104.123 14.1092 104.547 14.0238 104.976 14.0238C105.404 14.0238 105.829 14.1092 106.224 14.2749C106.619 14.4407 106.978 14.6835 107.278 14.9893C107.889 15.6124 108.232 16.4503 108.232 17.3231C108.232 18.1958 107.889 19.0337 107.278 19.6568L61.7008 65.8735C61.3994 66.1787 61.0407 66.4212 60.6452 66.5872C60.2498 66.7531 59.8254 66.8392 59.3965 66.8404Z" fill="#58595B"/>
    <path d="M111.494 63.5397C111.494 92.7054 88.1723 116.348 59.3967 116.348C30.6276 116.348 7.30298 92.7054 7.30298 63.5397C7.30298 34.3675 30.6276 10.7249 59.3967 10.7249C88.169 10.7216 111.494 34.3675 111.494 63.5397Z" fill="#DD2E44"/>
    <path d="M98.4678 63.5397C98.4678 85.4156 80.9809 103.148 59.3967 103.148C37.8191 103.148 20.3289 85.4156 20.3289 63.5397C20.3289 41.6605 37.8191 23.9277 59.3967 23.9277C80.9809 23.9245 98.4678 41.6605 98.4678 63.5397Z" fill="#E6E7E8"/>
    <path d="M98.4645 4.12015C95.892 4.11972 93.3453 4.63264 90.9735 5.62885C88.6017 6.62507 86.4526 8.08455 84.652 9.92181L112.28 37.9271C115.958 34.1958 118.013 29.1634 118 23.9245C118 12.9898 109.252 4.12015 98.4645 4.12015ZM19.5356 4.12015C22.1081 4.11991 24.6548 4.6329 27.0265 5.62911C29.3983 6.62531 31.5474 8.0847 33.3482 9.92181L5.71979 37.9271C2.04233 34.1958 -0.0132546 29.1634 6.43217e-05 23.9245C6.43217e-05 12.9898 8.74518 4.12015 19.5356 4.12015Z" fill="#FFCC4D"/>
    <path d="M75.3888 65.5556H58.9999C58.1306 65.5556 57.2969 65.2102 56.6822 64.5955C56.0675 63.9808 55.7222 63.1471 55.7222 62.2778V32.7778C55.7222 31.9085 56.0675 31.0747 56.6822 30.46C57.2969 29.8453 58.1306 29.5 58.9999 29.5C59.8693 29.5 60.703 29.8453 61.3177 30.46C61.9324 31.0747 62.2777 31.9085 62.2777 32.7778V59H75.3888C76.2582 59 77.0919 59.3453 77.7066 59.96C78.3213 60.5747 78.6666 61.4085 78.6666 62.2778C78.6666 63.1471 78.3213 63.9808 77.7066 64.5955C77.0919 65.2102 76.2582 65.5556 75.3888 65.5556Z" fill="#414042"/>
    </g>
    <defs>
    <clipPath id="clip0">
    <rect width="118" height="118" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    </Masthead.Logo>
    </Masthead.Wrapper>
    </Masthead>
    {
      <DestinationDetails>
       <DestinationDetails.Wrapper>
         {
           seatData && seatData.map(seat => {
            return (
                seat.isAvailable  && seat.passengerFirstName==='' && seat.passengerLastName==='' ?
                  <DestinationDetails.RedBgButtons onClick={handleSeats} data-value={seat.id}>
                    logo
                  </DestinationDetails.RedBgButtons>
                :
                !seat.isAvailable  && seat.passengerFirstName && seat.passengerLastName ?
                    <DestinationDetails.Buttons>logo</DestinationDetails.Buttons> :
                !seat.isAvailable &&
                <img src='' />
            )
        })
         }
        </DestinationDetails.Wrapper>
        <DestinationDetails.Wrapper>
        <DestinationDetails.Frame>
        <DestinationDetails.DepartureTime><span>Departure time: </span>{hours}:{minutes}</DestinationDetails.DepartureTime>
        </DestinationDetails.Frame>
        <DestinationDetails.Frame>
        <DestinationDetails.Name>Driver: <span>{findCityById && findCityById.driverName}</span></DestinationDetails.Name>
        </DestinationDetails.Frame>
        <DestinationDetails.Frame>
        <DestinationDetails.Contact>
        Drivers'contact: <span>{findCityById && findCityById.driverContact}</span>
        </DestinationDetails.Contact>
        </DestinationDetails.Frame>
        <DestinationDetails.Frame>
        <DestinationDetails.EstimatedDuration>Estimated duration: <span>{findCityById && findCityById.estimatedDuration}</span></DestinationDetails.EstimatedDuration>
        </DestinationDetails.Frame>
        <DestinationDetails.Frame>
        <DestinationDetails.Breaks>Breaks: <span>{findCityById && findCityById.breaks}</span></DestinationDetails.Breaks>
        </DestinationDetails.Frame>
        <DestinationDetails.Frame>
        <DestinationDetails.Price>{findCityById && findCityById.price} <span>Ar/seat</span></DestinationDetails.Price>
        </DestinationDetails.Frame>
        <DestinationDetails.Frame>
        <Buttons onClick={() => {
          if(displayModal) {
            displayModal(true);
          }
        }}>Book {cartItems.length !== 0 ? <span>{cartItems.length}</span>: null} seats</Buttons>
        </DestinationDetails.Frame>
        <DestinationDetails.Frame>
        <DestinationDetails.Price>{total !== 0 ? <span>Total: {total} Ar</span> : <span>You didn't book any place yet.</span>}</DestinationDetails.Price>
        </DestinationDetails.Frame>
        </DestinationDetails.Wrapper>
        </DestinationDetails>
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


    export default connect(mapStateToProps, (mapToDispatch))(DestinationDetailsContainer)
