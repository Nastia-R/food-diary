import { Component, OnInit } from '@angular/core';
import { AppStore }          from "../core/store/store.service";
import { dishesSelector }    from "./store";
import { Observable }        from "rxjs/index";
import { List }              from "immutable";
import { Dish }              from "./model";

@Component({
  selector: 'app-dishes',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})
export class DishComponent implements OnInit {

  private dishes$: Observable<List<Dish>>;
  constructor() { }

  ngOnInit() {
    this.dishes$ = AppStore.select(dishesSelector);
  }

}
