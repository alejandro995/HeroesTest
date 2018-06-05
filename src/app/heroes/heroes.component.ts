import {Component, OnInit, Inject} from "@angular/core";
import { HeroesServices } from "../services/heroes.service";
import { Store } from '@ngrx/store';
import "core-js/es7/reflect";
import { Observable } from "rxjs/Observable";
import { heroes_reducer } from "../store/reducers/heroesReducers";
import * as HeroesActions  from "../store/actions/heroesAction";
import { Router } from "@angular/router";
import { empty } from "rxjs/Observer";

@Component({
    selector: "heroes",
    styleUrls: ['./heroes.component.scss'],
    templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit{
    heroes: any;


    constructor(private store: Store<any>, private router: Router){

        

        this.store.select('heroes').subscribe(data => {                 
            if(data.heroes == null || data.heroes == empty){
                this.getHeroes();
            }else{
                this.heroes = data.heroes;
            }
         });
    }

    ngOnInit() {
         
    }
    getHeroes(){
            this.store.dispatch( new HeroesActions.RequestHeroesAction());
    }
}