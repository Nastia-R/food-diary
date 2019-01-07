import { fromJS, List }            from 'immutable';
import { Actions, DishActionType } from "./action";
import { Dish }                    from "../model";

export default function dish(state: List<Dish>, action: Actions): List<Dish> {
  switch (action.type) {
    case DishActionType.SET_DISHES:
      return action.payload.dishes;

    case DishActionType.UPDATE_DISH:
      return state.setIn([...asArray(action.payload.path)], fromJS(action.payload.value));

    case DishActionType.CREATE_DISH:
      return state.unshift(action.payload.value);

    case DishActionType.DELETE_DISH:
      return state.deleteIn([...asArray(action.payload)]);
  }

  return state;
}

function asArray(data) {
  return Array.isArray(data) ? data : [data];
}
