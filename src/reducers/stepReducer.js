import { ADD_STEP, GET_STEPS,STEPS_LOADING} from '../actions/types';


const initialState = {
  stepsList: [
    {orderNumber: 1, broker:'abc', brokerProfit: 1000, fuel:100, petrolPump: 'xyz',advance: 100, payment: 10000, returnBroker: 'xay', returnBrokerProfit:1000, typeOfLoad:'absd',returnFuel:100, returnAdvance: 1200,returnPayment: 100000},
    //{orderNumber: 2, broker:'abcd', brokerProfit: 1000, fuel:100, petrolPump: 'xyz',advance: 100, payment: 10000, returnBroker: 'xay', returnBrokerProfit:1000, typeOfLoad:'absd',returnFuel:100, returnAdvance: 1200,returnPayment: 100000},
  ]
}

export default function(state=initialState, action) {
  switch(action.type) {
    case GET_STEPS:
    return {
      ...state
    };
    case ADD_STEP:      
    return {
         ...state,
         stepsList: [...state.stepsList, action.payload],
        };
    default: return state;
  }
}
