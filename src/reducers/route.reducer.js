import { ROUTE_CHANGE } from '../actions/types';

const selectionReducer = (selected = 0, action) => {
  switch (action.type) {
    case ROUTE_CHANGE:
      return action.payload;
    default:
      return selected;
  }
};

export default selectionReducer;
