import { Component, OnInit } from "@angular/core";
import { Store } from '@ngrx/store';
import "core-js/es7/reflect";
import { Observable } from "rxjs/Observable";
import { heroes_reducer } from "../store/reducers/heroesReducers";
import * as HeroesActions from "../store/actions/heroesAction";
import { Router, ActivatedRoute } from "@angular/router";
import { Hero } from "../store/hero";

@Component({
    selector: "hero",
    styleUrls: ['./hero.component.scss'],
    templateUrl: './hero.component.html'
})
export class HeroComponent implements OnInit {
    hero: any;
    heroIndex: number;
    heroes: any[];
    heroNickname = "";

    constructor(private store: Store<any>, private route: ActivatedRoute) {

        this.route.params.subscribe(params => this.heroNickname = params.id);

    }
    ngOnInit() {
        this.store.select('heroes').subscribe(data => {
            data.heroes.forEach((element,i) => {
                    if (element._nickname === this.heroNickname) {
                        this.hero = element;
                        this.heroIndex = i;
                        return element;
                    }
                });
        });
    }

    updateHero(){
        this.store.dispatch( new HeroesActions.LoadHeroAction({
                heroe: this.hero,
                index: this.heroIndex
            })
        )
    }
}