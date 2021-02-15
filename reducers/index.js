import { combineReducers } from 'redux';
const cityInitialisation = ['Antananarivo', 'Toamasina', 'Vatomandry', 'Moramanga']

function city(state = [], action) {
  console.log(state);
	switch (action.type) {
		case 'GET_CITY':
			return action.value;
		default:
			return state;
	}
}

function destination(state=cityInitialisation, action) {
  switch(action.type) {
    case 'DESTINATION':
      return action.value;
    default:
      return state;
  }
}

function cartItems(state=[], action) {
  console.log('sate',state);
  switch (action.type) {
    case 'SET_CART_ITEMS':
      return [...state, action.value]
      case 'REMOVE_CART_ITEMS':
        return state.filter(cartItem => cartItem.id !== action.value)
    default:
      return state;
  }
}

function totalPrice(state=0, action) {
  switch (action.type) {
    case 'SET_TOTAL_PRICE':
      return action.value;
    default:
      return state;
  }
}

function Modal(state=false, action) {
  switch (action.type) {
    case 'DISPLAY_MODALY':
      return !state;
    default:
      return state;
  }
}

export const reducers = combineReducers({
	city,
  destination,
  totalPrice,
  cartItems,
  Modal,
});
