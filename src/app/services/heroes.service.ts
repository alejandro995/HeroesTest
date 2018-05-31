import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import "core-js/es7/reflect";
import { Hero } from '../store/hero';

@Injectable()
export class HeroesServices {
    private _baseUrl = 'https://udem.herokuapp.com/';
    constructor(private http: HttpClient) { 
    }
    getHeores() {
        console.log("servicio de m");
        return this.http.get<Hero[]>(this._baseUrl + 'heroes');
    }
}