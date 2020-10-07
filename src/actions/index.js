import { ROUTE_CHANGE } from './types';

// import history from '../history';

export const changeRoute = (routeId) => {
  return { type: ROUTE_CHANGE, payload: routeId };
};
