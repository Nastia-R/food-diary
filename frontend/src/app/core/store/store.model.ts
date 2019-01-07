import { List, Record } from 'immutable';
import { Dish }         from "../../dish/model";

interface StoreInterface {
  dishes: List<Dish>;
}

const storeRecord = Record<StoreInterface>({
  dishes: List(),
});

export class Store extends storeRecord implements StoreInterface {}
