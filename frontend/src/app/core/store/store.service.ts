import { Injectable } from '@angular/core';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';
import { BehaviorSubject, ReplaySubject, Observable, Subject } from 'rxjs';
import { filter, mergeMap } from 'rxjs/operators';
import rootReducer from './root.reducer';
import { Store } from './store.model';

const state$: BehaviorSubject<Store> = new BehaviorSubject<Store>(null);
const action$ = new Subject;

const epic$ = new ReplaySubject();
const rootEpic: any = (action$, store) => epic$.pipe(
  mergeMap((epic: any) => epic(action$, store))
);

@Injectable()
export class AppStore {
  static state$: Observable<Store> = state$.pipe(
    filter(state => state !== null)
  );

  constructor() {
    const epicMiddleware = createEpicMiddleware();

    const store = createStore(
      rootReducer,
      new Store,
      composeWithDevTools(
        applyMiddleware(epicMiddleware)
      )
    );

    epicMiddleware.run(rootEpic);

    store.subscribe(() => state$.next(store.getState() as Store));

    action$.subscribe(store.dispatch);
  }

  static dispatch(action) {
    return action$.next(action);
  }

  static select(selector) {
    return selector(AppStore.state$);
  }

  static addEpics(...epics) {
    epics.map(epic => epic$.next(epic));
  }
}
