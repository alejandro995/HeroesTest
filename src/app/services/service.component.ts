import {Component, OnInit, Inject} from "@angular/core";
import { HeroesServices } from "./heroes.service";
import { Store } from '@ngrx/store';
import "core-js/es7/reflect";
import { Observable } from "rxjs/Observable";




@Component({
    selector: "service_app",
    template: '<p>Service component</p>',
    providers: [ HeroesServices ]
})
export class ServiceComponent{
    heroes: any;


    constructor(){
    }


 

}