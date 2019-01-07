import { combineLatest, Observable, of as observableOf } from 'rxjs';
import { map, distinctUntilChanged } from 'rxjs/operators';

export const createSelector = (callback, ...streams) => {
  return (...parameters: any[]) => {
    const parametersAsObservable = parameters.map(
      parameter => parameter instanceof Observable ? parameter : observableOf(parameter)
    );

    return combineLatest(...streams, ...parametersAsObservable)
      .pipe(
        map(callback),
        distinctUntilChanged()
      ) as Observable<any>;
  };
};
