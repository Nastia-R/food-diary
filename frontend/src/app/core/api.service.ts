import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Map } from 'immutable';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) {}

  fetch(path: string, parameters: Map<string, any> = null) {
    const options: { params?: HttpParams } = {};

    if (parameters) {
      options.params = parameters.reduce(
        (httpParams, value, key) => httpParams.append(key, JSON.stringify(value)), new HttpParams
      );
    }

    return this.http.get(path, options).pipe(
      map((response: {data: any}) => response.data)
    );
  }
}
