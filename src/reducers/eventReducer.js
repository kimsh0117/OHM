import { GET_EVENTS, POST_EVENT, DELETE_EVENT } from "actions/types";
import { mergeSort } from 'utils/mergesort'

const events = { events: [], audience: [] };

export default function(state = events, action) {
  switch (action.type) {
    // get event from server
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
    // post event to audience
    case POST_EVENT:
      return {
        ...state,
        audience: state.audience.indexOf(action.title) > -1 ? [...state.audience] : [...state.audience, action.title]
      };
    case DELETE_EVENT:
      return {
        ...state,
        audience: [...state.audience].filter(event=> event !== action.title)
      };
    default:
      return state;
  }
}