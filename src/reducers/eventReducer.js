import { GET_EVENTS } from "actions/types";
import { mergeSort } from 'utils/algorithm'

const events = { events: [] };

export default function(state = events, action) {
  switch (action.type) {
    case GET_EVENTS['REQUEST']:
      return { ...state };
    case GET_EVENTS['SUCCESS']:
      return {
        ...state,
        events: mergeSort(action.res)
      };
    case GET_EVENTS['FAILURE']:
      return {
        ...state,
        error: action,
      };
    default:
      return state;
  }
}