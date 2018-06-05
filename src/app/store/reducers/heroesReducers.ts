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
        case HeroesActions.LOAD_HERO:
            let newState= state.heroes;
            console.log("Reducer break");
            console.log(action);
            newState.splice(action.payload.index, 1, action.payload.heroe);
            return {heroes: newState, message: 'Heroes updated'};
        default:
            return state;    
    }
};