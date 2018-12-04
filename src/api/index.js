import events from 'mock/mock'

const TIMEOUT = 500;

export const getEvents = () => {
  return new Promise(resolve => {
    setTimeout(()=> resolve(events), TIMEOUT)
  })
};