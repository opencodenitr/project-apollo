import { ROUTE_CHANGE } from './types';

export const changeRoute = (routeId) => {
  return { type: ROUTE_CHANGE, payload: routeId };
};
