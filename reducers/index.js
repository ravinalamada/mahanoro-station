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

export const reducers = combineReducers({
	city,
  destination,
});
