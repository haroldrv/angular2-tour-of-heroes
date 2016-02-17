import {Injectable} from 'angular2/core';
import {heroes} from './mock-heroes';

@Injectable()

export class HeroService{
    public getHeroes(){
        return Promise.resolve(heroes);
    }
}