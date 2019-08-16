
import { 
  GET_SMURFS,
  GET_SMURFS_SUCCESS,
  // GET_SMURFS_FAILURE
 } from '../actions'

const initialState = {
  smurfs: [],
  isLoading: false,
  error: ''
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SMURFS:
      return {
        ...state,
        isLoading: true,
        error: ''
      }
    case GET_SMURFS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        smurfs: action.payload,
        error: ''
      }
    // case GET_SMURFS_FAILURE:
    //   return {

    //   }
    default:
      return state;
  }
}