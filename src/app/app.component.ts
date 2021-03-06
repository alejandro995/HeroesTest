import {Component, OnInit, Inject} from "@angular/core";
import { HeroesServices } from "./services/heroes.service";
import { Store } from '@ngrx/store';
import "core-js/es7/reflect";
import { Observable } from "rxjs/Observable";
import { heroes_reducer } from "./store/reducers/heroesReducers";
import * as HeroesActions  from "./store/actions/heroesAction";



@Component({
    selector: "hellow-app",
    styleUrls: ['./app.component.scss'],
    templateUrl: './app.component.html',
    providers: [ HeroesServices ]
})
export class HelloComponent implements OnInit{
    heroes: any;


    constructor(private store: Store<any>){
    }

    ngOnInit() {
        this.getHeroes();
         this.store.select('heroes').subscribe(data => {
            this.heroes = data.heroes;
            console.log(data);
         });
    }
    getHeroes(){
        this.store.dispatch({
            type: HeroesActions.REQUEST_HEROES
        });
    }
}