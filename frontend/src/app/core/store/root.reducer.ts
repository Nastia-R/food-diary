import { combineReducers } from 'redux-immutable';
import { Store } from './store.model';
import dish from "../../dish/store/reducer";

const rootReducer = combineReducers<Store>({
  dish
});

export default rootReducer;
