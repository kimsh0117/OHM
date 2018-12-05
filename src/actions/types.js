const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

// with saga
function createRequestTypes(base) {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {});
}
export const GET_EVENTS = createRequestTypes('GET_PRODUCTS');

// without saga
export const POST_EVENT = "POST_EVENT"
export const DELETE_EVENT = "DELETE_EVENT"
