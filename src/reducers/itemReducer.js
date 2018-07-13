import { ADD_ITEM, DELETE_ITEM, GET_ITEMS, ITEMS_LOADING} from '../actions/types';


const initialState = {
    items: [
        {vehicleNumber: 1, orderNumber: 1, date:'1/1/2018', from: 'Xyz', to:'Abc', weight: 270, pricePerTon: 1800, returnFrom:'Abc', returnTo:'Xyz', returnWeight: 270, returnPricePerTon: 1800},
        {vehicleNumber: 2, orderNumber: 2, date:'4/7/2018', from: 'Delhi', to:'New York', weight: 300, pricePerTon: 5000, returnFrom:'New York', returnTo:'Delhi', returnWeight: 170, returnPricePerTon: 5000}
    ],
    loading: false
}

export default function(state = initialState, action) {
   switch(action.type) {
       case GET_ITEMS:
       return {
           ...state//,
           //items: action.payload,
           //loading: false
       };
      case DELETE_ITEM:
       return {
           ...state,
           items: state.items.filter(item => item.orderNumber !== action.payload)
       };
       
       case ADD_ITEM:
       return {
           ...state,
           items: [action.payload, ...state.items]
       };
       /*
       case ITEMS_LOADING:
       return {
         ...state,
         loading: true
       }*/
       default:
       return state;
   }
}
