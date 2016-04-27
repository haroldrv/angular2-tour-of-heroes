import {Injectable} from 'angular2/core';
import {heroes} from './mock-heroes';

@Injectable()

export class HeroService {
    public getHeroes() {
        return Promise.resolve(heroes);
    }

    public getHero(id: number) {
        return Promise.resolve(heroes)
            .then(heroes => heroes.filter(hero => hero.id === id)[0]);
    }
}