import { ADD_ITEM, DELETE_ITEM, GET_ITEMS, ITEMS_LOADING} from './types';
import axios from 'axios';

export const getItems = () => /*dispatch =>*/ {
    return{
      type: GET_ITEMS
    }
  /*dispatch(setItemsLoading());
  axios
    .get('/api/items')
    .then(res =>
      dispatch({
        type: GET_ITEMS,
        payload: res.data
      })
    )*/
};

export const deleteItem = orderNumber => /*dispatch =>*/ {
  return {
    type: DELETE_ITEM,
    payload: orderNumber
  }

  /*
  axios.delete(`/api/items/${id}`).then(res => dispatch({
    type: DELETE_ITEM,
    payload: id
  }))*/
};


export const addItem = item => /*dispatch => */{

return {
  type: ADD_ITEM,
  payload: item
}
  /*
  axios
  .post('/api/items', item)
  .then(res =>
    dispatch({
      type: ADD_ITEM,
      payload: res.data
    })
  )*/
};
/*
export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    };
};*/
