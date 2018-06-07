import { Http,HttpModule, XHRBackend, ResponseOptions, Response } from "@angular/http";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
/*When you have a anonymous inject service, make sure you use Async to get the response, and if it use HTTP module, remeber to add to the anonymous NGmodule the HttpClientTestingModule*/  
import { MockBackend } from '@angular/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { HeroesServices } from "./heroes.service";
describe('HeroService', () => {
    beforeEach(() =>{
        TestBed.configureTestingModule({
            imports: [HttpModule, HttpClientTestingModule],
            providers:[ HeroesServices,
                {provide: 'https://udem.herokuapp.com/', useValue: 'http://example.com'},
                { provide: XHRBackend, useClass: MockBackend  }

            ]
        });
    });
    describe('getHeroes()', () =>{
        it('should return a list of heroes', 
        async(inject([HeroesServices, XHRBackend], (heroesServices: HeroesServices, mockBackend: any) =>{
           
            const mockResponse = 
                 [
                    {"_name":"Anthony Stark","_height":6.1,"_picture":"http://i.annihil.us/u/prod/marvel/i/mg/6/a0/55b6a25e654e6/standard_xlarge.jpg","_nickname":"Iron Man"},
                    {"_name":"Peter Parker","_height":5.1,"_picture":"http://i.annihil.us/u/prod/marvel/i/mg/9/30/538cd33e15ab7/standard_xlarge.jpg","_nickname":"Spider-Man"}
                ];
            mockBackend.connections.subscribe((connection: any) => {
                connection.mockRespond(new Response(new ResponseOptions({
                  body: JSON.stringify(mockResponse)
                })));
              });
              heroesServices.getHeores().subscribe((heroes) => {
                expect(heroes.length).toBe(2);
                expect(heroes[0]._name).toEqual('Anthony Stark');
                expect(heroes[1]._name).toEqual('Peter Parker');
              });
              
        })));
    });
});