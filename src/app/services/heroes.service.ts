import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import "core-js/es7/reflect";
import { Hero } from '../store/hero';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class HeroesServices {
    private _baseUrl = 'https://udem.herokuapp.com/';
    results: Hero[];


    constructor(private http: HttpClient) { 
        this.results = [];
    }
    getHeores(): Observable<Hero[]> {
        this.http.get<Hero[]>(this._baseUrl + 'heroes').subscribe(result => this.results =result);
        return this.http.get<Hero[]>(this._baseUrl + 'heroes');
    }

}