import { Injectable }                  from '@angular/core';
import { mergeMap ,  map }             from 'rxjs/operators';
import { ApiService }                  from "../../core/api.service";
import { DishActions, DishActionType } from "./action";
import { ofType }                      from "redux-observable";
import { AppStore }                    from "../../core/store/store.service";

@Injectable()
export class DishEpics {

  constructor(private api: ApiService) {
    AppStore.addEpics(this.loadDishes);
  }

  private loadDishes = (action$) => action$.pipe(
    ofType(DishActionType.LOAD_DISHES),
    mergeMap(() =>
      this.api.fetch('/dishes').pipe(
        map(DishActions.setDishes)
      )
    )
  );

}
