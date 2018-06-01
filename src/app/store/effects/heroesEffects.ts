import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import * as HeroesActions from '../actions/heroesAction';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import { HeroesServices } from '../../services/heroes.service';


@Injectable()
export class HeroesEffects {
    constructor(private actions$: Actions, private heroService: HeroesServices) { }

    @Effect()
    public loadAllHeroes$: Observable<Action> = this.actions$
        .ofType(HeroesActions.REQUEST_HEROES)
        .switchMap(() => this.heroService.getHeores())
        .map(data => new HeroesActions.LoadHeroesAction(data));

}