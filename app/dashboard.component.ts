import { Component, OnInit } from 'angular2/core';
import { IHero  } from './ihero';
import { HeroService  } from './hero.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard.component.html'
})

export class DashboardComponent implements OnInit {
    heroes: IHero[] = [];

    constructor(private _heroService: HeroService) { }

    ngOnInit() {
        this._heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1, 5))
    }

    goToDetails() {
        //not implemented yet
    }

}