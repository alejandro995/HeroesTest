import { RouterModule, Routes } from '@angular/router';

import { HelloComponent } from '../app.component';
import { HeroesComponent } from '../heroes/heroes.component';
import { HeroComponent } from '../hero/hero.component';

const routes: Routes = [
  { path: '', component: HeroesComponent },
  { path: 'hero/:id', component: HeroComponent},
  { path: '**', component: HeroesComponent }
];

export const routing = RouterModule.forRoot(routes);