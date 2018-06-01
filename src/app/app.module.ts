import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { HelloComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { OrdinalPipe } from './ordinal.pipe';
import { HeroesServices } from './services/heroes.service';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroComponent } from './hero/hero.component';
import { heroes_reducer } from './store/reducers/heroesReducers';
import { EffectsModule } from '@ngrx/effects';
import { HeroesEffects } from './store/effects/heroesEffects';
import { routing } from './routes/app.routing';



@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule, StoreModule.forRoot({ heroes: heroes_reducer }),
        EffectsModule.forRoot([HeroesEffects]), routing],
    declarations: [HelloComponent, OrdinalPipe, HeroesComponent, HeroComponent],
    bootstrap: [HelloComponent],
    providers: [HeroesServices]
})
export class AppModule {
}