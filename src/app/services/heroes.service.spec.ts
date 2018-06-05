


import { Http,HttpModule } from "@angular/http";
import { TestBed } from "@angular/core/testing";
import { HeroesServices } from "./heroes.service";



describe('HeroService', () => {
    beforeEach(() =>{
        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers:[ HeroesServices,
                {
                    provide: 'https://udem.herokuapp.com/', useValue: 'http://example.com'
                }
            ]
        }).compileComponents();
    })
});