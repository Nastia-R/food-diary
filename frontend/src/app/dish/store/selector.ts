import { Observable }                       from 'rxjs';
import { List }                             from 'immutable';
import { distinctUntilChanged, pluck, map } from 'rxjs/operators';
import { Store }                            from '../../core/store/store.model';
import { Dish }  from '../model';

export const dishesSelector = (store$: Observable<Store>) => store$.pipe(
  pluck('dishes'),
  distinctUntilChanged(),
) as Observable<List<Dish>>;

export const dishesPathSelector = (path: List<string>) =>
  (store$: Observable<Store>) => dishesSelector(store$).pipe(
    map((dishes: List<Dish>) => dishes.getIn(path)),
    distinctUntilChanged()
  ) as Observable<any>;

