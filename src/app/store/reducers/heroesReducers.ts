import * as HeroesActions  from "../actions/heroesAction";
import { Hero } from "../hero";

export interface AppState {
	heroState: HeroState;
}

export interface HeroState {
    heroes: Hero[];
    message: ''
} 

const initialState: HeroState = { heroes:[], message: ''};


export function heroes_reducer(state= initialState, action )  {
    switch (action.type) {
        case HeroesActions.LOAD_HEROES: 
            return  {heroes: action.payload, message: 'Heroes loaded'};
        default:
            return state;    
    }
};