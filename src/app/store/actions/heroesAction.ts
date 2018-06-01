import { Action } from '@ngrx/store'
import { Hero } from '../hero';


export const LOAD_HEROES = '[HERO] load heroes';
export const REQUEST_HEROES = '[HERO] request hores';
export const REQUEST_HERO = '[HERO] request hero';
export const LOAD_HERO = '[HERO] LOAD hero';


export class LoadHeroesAction implements Action {
    readonly type = LOAD_HEROES;
    constructor (public payload: Hero[]) {}
  }

  export class RequestHeroesAction implements Action {
    readonly type = REQUEST_HEROES;
  }

  export class RequestHeroAction implements Action {
    readonly type = REQUEST_HERO;
  }

  export class LoadHeroAction implements Action {
    readonly type = LOAD_HERO;
    constructor (public payload: number) {}
  }

