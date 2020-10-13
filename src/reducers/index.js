import { combineReducers } from 'redux';

import routeReducer from './route.reducer';

export default combineReducers({
  selectedRoute: routeReducer,
});
