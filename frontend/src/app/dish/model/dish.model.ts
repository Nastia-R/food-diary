import { Record } from 'immutable';

export interface DishInterface {
    id: number;
    name: string;
    calories: number;
}

const dishRecord = Record<DishInterface>({
    id: null,
    name: '',
    calories: null
});

export class Dish extends dishRecord implements DishInterface {}
