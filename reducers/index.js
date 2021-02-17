import { combineReducers } from 'redux';
const cityInitialisation = ['Antananarivo', 'Toamasina', 'Vatomandry', 'Moramanga']
const userData = [
    {'id': 5,
    "destination": "Moramanga",
    "departureTime": 1613397600,
    "driverName": "Tom Cruise",
    "driverContact": "034585514",
    "estimatedDuration": "12h",
    "breaks": "2",
    "price": 50000,
  "seats": [
    {
      "id": 0,
      "isAvailable": true,
      "passengerFirstName": "",
      "passengerLastName": "",
      "passengerPhoneNumber": "",
      "extraLuggage": false
    },
    {
      "id": 1,
      "isAvailable": true,
      "passengerFirstName": "",
      "passengerLastName": "",
      "passengerPhoneNumber": "",
      "extraLuggage": false
    }]},
]

const user = {
  id: 0,
  isAvailable: true,
  passengerFirstName: "Roseline",
  passengerLastName: "Prisca",
  passengerPhoneNumber: '0348479051',
  extraLuggage: false
}

// Get the destination data from API
function city(state = [], action) {
	switch (action.type) {
		case 'GET_CITY':
			return action.value;
    case 'UPDATE_SEAT':
      return [...state, action.value];
		default:
			return state;
	}
}

// Get the destination list from initialisedData
function destination(state=cityInitialisation, action) {
  switch(action.type) {
    case 'DESTINATION':
      return action.value;
    default:
      return state;
  }
}

// Take a new booked seat data
function cartItems(state=[], action) {
  switch (action.type) {
    case 'SET_CART_ITEMS':
      return [...state, action.value]
      case 'REMOVE_CART_ITEMS':
        return state.filter(cartItem => cartItem.id !== action.value)
    default:
      return state;
  }
}

// Calculte the total saet data
function totalPrice(state=0, action) {
  switch (action.type) {
    case 'SET_TOTAL_PRICE':
      return action.value;
    default:
      return state;
  }
}

// Toggle modal
function Modal(state=false, action) {
  switch (action.type) {
    case 'DISPLAY_MODALY':
      return !state;
    default:
      return state;
  }
}

// Update the seat data
export function updatedSeat(state= user, action) {
  switch(action.type) {
    case 'SET_FISRTNAME':
      return {...state, passengerFirstName: action.value}
    case 'SET_LASTNAME':
      return {...state, passengerLastName: action.value}
    case 'SET_NUMBER':
      return {...state, passengerPhoneNumber: action.value}
       default:
       return state;
  }
}

// Combine all of the reducers
export const reducers = combineReducers({
	city,
  destination,
  totalPrice,
  cartItems,
  Modal,
  updatedSeat,
});

