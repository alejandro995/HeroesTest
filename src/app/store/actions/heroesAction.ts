import { Action } from '@ngrx/store'
import { Hero } from '../hero';


export const LOAD_HEROES = '[HERO] load heroes';
export const REQUEST_HEROES = '[HERO] request hores';


export class LoadHeroesAction implements Action {
    readonly type = LOAD_HEROES;
    constructor (public payload: Hero[]) {}
  }

  export class RequestHeroesAction implements Action {
    readonly type = REQUEST_HEROES;
  }

