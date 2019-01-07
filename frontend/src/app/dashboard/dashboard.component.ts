import { of,  Observable }   from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Dish }              from "../dish/model/dish.model";
import { List }              from "immutable";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private dishes$: Observable<List<Dish>>;

  constructor() { }

  ngOnInit() {
    this.dishes$ = of(
        List([
            new Dish({id: 1, name: 'test', 'calories': 123}),
            new Dish({id: 2, name: 'test2', 'calories': 456})
        ])
    );
  }

}
