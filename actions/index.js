const API_DATA= `https://gist.githubusercontent.com/Pinois/36bb5fbf9b6a686f0baf4006dd137bca/raw/a40d8b3f696a75f388db286d57bdd05a925fa0e7/trips.json`;

// Get data from API
export function getCity() {
  return async (dispatch) => {
		const response = await fetch(API_DATA);
    const city = await response.json();
		dispatch({
			type: 'GET_CITY',
			value: city,
		});
	};
}

export function destination(city) {
  return {
    type: 'DESTINATION',
    value: city
  }
}

export function setTotalPrice(price) {
  return {
    type: 'SET_TOTAL_PRICE',
    value: price
  }
}

export function addToCart(city) {
  return {
    type: 'SET_CART_ITEMS',
    value: city
  }
}
export function displayModal() {
  return {
    type: 'DISPLAY_MODALY',
  }
}
export function removeCartItems(seatId) {
  return {
    type: 'REMOVE_CART_ITEMS',
    value: seatId
  }
}

 export function setUserAccount(userId) {
  return {
    type: 'SET_USER_ACCOUNT',
    value: userId,
  }
}

export function setFirstName(thing) {
  return {
    type: 'SET_FISRTNAME',
    value: thing,
  }
}

export function setNumber(thing) {
  return {
    type: 'SET_NUMBER',
    value: thing,
  }
}

export function setLastName(thing) {
  return {
    type: 'SET_LASTNAME',
    value: thing,
  }
}

export function uptadeSeat(thing) {
  return {
    type: ' UPDATE_SEAT',
    value: thing,
  }
}


