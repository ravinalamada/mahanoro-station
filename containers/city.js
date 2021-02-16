import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom';
import {Masthead,City, Buttons} from '../components';
import {getCity, setTotalPrice, addToCart, removeCartItems, displayModal} from '../actions'
// import { Buttons } from '../components/trips/styles/trips';

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
      <City>
      <City.Wrapper>
      {seatData && seatData.map(seat => {
        const isAlreadyInCart = cartItems.some(item => item.id === seatId )
        console.log(isAlreadyInCart);
        if(seat.isAvailable === true && isAlreadyInCart === false) {
          return (
            <City.RedBgButtons key={seat.id} onClick={() => addToCart(findCityById)}>
            <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0)">
            <path d="M51.7413 30.7563C51.9281 32.8112 50.527 34.4924 48.5656 34.4924H12.8864C10.925 34.4924 9.52399 32.8112 9.71079 30.7563L11.6722 10.0213C11.859 7.9665 13.6336 6.28528 15.5951 6.28528H45.857C47.8184 6.28528 49.593 7.9665 49.7798 10.0213L51.7413 30.7563Z" fill="#B4D7EE"/>
            <path d="M9.15039 29.3553H14.7544V36.8274H9.15039V29.3553Z" fill="#3E4347"/>
            <path d="M46.6975 29.3553H52.3016V36.8274H46.6975V29.3553Z" fill="#3E4347"/>
            <path d="M14.4744 48.4091H20.0784V57.8426H14.4744V48.4091Z" fill="#3E4347"/>
            <path d="M41.3738 48.4091H46.9778V57.8426H41.3738V48.4091Z" fill="#3E4347"/>
            <path d="M39.5058 24.2183C39.2256 26.6467 37.2642 28.7015 35.3028 28.7015H26.1495C24.0946 28.7015 22.2266 26.7401 21.9464 24.2183L20.2652 10.5817C19.985 8.1533 21.386 6.09848 23.3474 6.09848H38.0114C40.0662 6.09848 41.4672 8.1533 41.0936 10.5817L39.5058 24.2183Z" fill="#428BC1"/>
            <path d="M22.3198 55.8812C22.133 55.4142 21.5726 54.9472 21.1056 54.9472H13.6336C13.0731 54.9472 12.6061 55.3208 12.4193 55.8812L11.0183 59.7107C10.8315 60.1777 11.1117 60.6447 11.6721 60.6447H22.8803C23.4407 60.6447 23.7209 60.2711 23.5341 59.7107L22.3198 55.8812Z" fill="#94989B"/>
            <path d="M50.4335 59.7107L49.1259 55.8812C48.9391 55.4142 48.3787 54.9472 47.9116 54.9472H40.4396C39.8792 54.9472 39.4122 55.3208 39.2254 55.8812L37.9177 59.7107C37.7309 60.1777 38.0111 60.6447 38.5715 60.6447H49.7797C50.2467 60.6447 50.5269 60.2711 50.4335 59.7107Z" fill="#94989B"/>
            <path d="M43.9889 6.47208C43.9889 8.5269 42.4011 10.2081 40.4397 10.2081H20.9189C18.9574 10.2081 17.3696 8.5269 17.3696 6.47208V4.60406C17.3696 2.54924 18.9574 0.868019 20.9189 0.868019H40.4397C42.4011 0.868019 43.9889 2.54924 43.9889 4.60406V6.47208Z" fill="#29ABE2"/>
            <path d="M15.3149 28.1411L15.0347 26.1797C14.8479 25.1523 14.0072 24.3117 13.0732 24.3117H10.5514C9.61739 24.3117 8.77679 25.1523 8.58998 26.1797L8.30978 28.1411C8.12298 29.1685 8.77679 30.0091 9.7108 30.0091H13.9138C14.8479 30.0091 15.5017 29.1685 15.3149 28.1411Z" fill="#29ABE2"/>
            <path d="M52.9555 28.1411L52.6753 26.1797C52.4885 25.1523 51.6479 24.3117 50.7139 24.3117H48.192C47.258 24.3117 46.4174 25.1523 46.2306 26.1797L45.9504 28.1411C45.7636 29.1685 46.4174 30.0091 47.3514 30.0091H51.5545C52.4885 30.0091 53.0489 29.1685 52.9555 28.1411Z" fill="#29ABE2"/>
            <path d="M48.9392 34.4924H12.5128C9.61734 34.4924 7.84272 37.2944 8.40312 40.7503L8.77673 43.1787C9.33713 46.6345 12.2326 49.4365 15.0346 49.4365H46.2305C49.126 49.4365 51.928 46.6345 52.4884 43.1787L52.9554 40.7503C53.6092 37.3878 51.7412 34.4924 48.9392 34.4924Z" fill="#29ABE2"/>
            </g>
            <defs>
            <linearGradient id="paint0_linear" x1="29.8883" y1="0" x2="29.8883" y2="59.7766" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="white" stop-opacity="0"/>
            </linearGradient>
            <clipPath id="clip0">
            <rect width="59.7766" height="59.7766" fill="white" transform="translate(0.837646 0.868019)"/>
            </clipPath>
            </defs>
            </svg>

            </City.RedBgButtons>
            )
          }if(isAlreadyInCart === true) {
            return (
              <City.Buttons key={seat.id} onClick={() => removeCartItems(findCityById)}>
              <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><path d="M0,0h24v24H0V0z" fill="none" outline="#29ABE2"/></g><g><path d="M15,3H9C7.9,3,7,3.9,7,5v9h10V5C17,3.9,16.1,3,15,3z M18,15H6c-1.1,0-2,0.9-2,2v3c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1 v-3h12v3c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1v-3C20,15.9,19.1,15,18,15z M6,11.5C6,12.33,5.33,13,4.5,13S3,12.33,3,11.5 S3.67,10,4.5,10S6,10.67,6,11.5z M21,11.5c0,0.83-0.67,1.5-1.5,1.5S18,12.33,18,11.5s0.67-1.5,1.5-1.5S21,10.67,21,11.5z"/></g></svg>
              </City.Buttons>
              )
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
        <Buttons onClick={() => {
          if(displayModal) {
            displayModal(true);
          }
        }}>Book {cartItems.length !== 0 ? <span>{cartItems.length}</span>: null} seats</Buttons>
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
