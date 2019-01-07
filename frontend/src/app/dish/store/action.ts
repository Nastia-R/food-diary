import { ActionsUnion, createAction } from '../../core/store';
import { Dish }                       from "../model";
import { List }                       from "immutable";

export enum DishActionType {
  LOAD_DISHES = 'LOAD_DISHES',
  SET_DISHES = 'SET_DISHES',
  CREATE_DISH = 'CREATE_DISH',
  UPDATE_DISH = 'UPDATE_DISH',
  DELETE_DISH = 'DELETE_DISH'
};

export const DishActions = {
  loadDishes: () => createAction(DishActionType.LOAD_DISHES),
  setDishes: (dishes: List<Dish>) => createAction(DishActionType.SET_DISHES, { dishes }),
  createDish: (value: Dish) => createAction(DishActionType.CREATE_DISH, { value }),
  updateDish: (path: Array<string | number>, value: any) => createAction(DishActionType.UPDATE_DISH, { path, value }),
  deleteDish: (path: string | Array<string | number>) => createAction(DishActionType.DELETE_DISH, path),
};

export type Actions = ActionsUnion<typeof DishActions>;
