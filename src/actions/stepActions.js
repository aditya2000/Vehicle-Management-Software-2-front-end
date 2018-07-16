import {ADD_STEP, GET_STEPS, STEPS_LOADING} from './types.js';

export const getSteps = () => {
  return {
    type: GET_STEPS
  }
}

export const addStep = (step) => {
  return {
    type: ADD_STEP,
    payload: step
  }
}

export const setStepsLoading = () => {
  return {
    type: STEPS_LOADING
  }
}
