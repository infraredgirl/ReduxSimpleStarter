import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // Never mutate state (don't do state.push(...).
      // Instead, create a new array and return that.
      return [ action.payload.data, ...state ]; // equivalent to: state.concat([action.payload.data]);
  }
  return state;
}
