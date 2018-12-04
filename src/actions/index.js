import * as types from "actions/types";

function action(type, payload = {}) {
  console.log(type, payload)
return {type, ...payload}
}

export const getEvents = {
request: (events, url) => action(types.GET_EVENTS['REQUEST'], {events, url}),
success: res => action(types.GET_EVENTS['SUCCESS'], {res}),
failure: err => action(types.GET_EVENTS['FAILURE'], {err}),
}