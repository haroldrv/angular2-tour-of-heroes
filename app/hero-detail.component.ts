import { Component, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { HeroService  } from './hero.service';
import { IHero } from './ihero';

@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/hero-detail.component.html',
    inputs: ['hero']
})

export class HeroDetailComponent implements OnInit {
    public hero: IHero;

    constructor(
        private _heroService: HeroService,
        private _routeParams: RouteParams) {
    }

    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._heroService.getHero(id)
            .then(hero => this.hero = hero);
    }

    goBack() {
        window.history.back();
    }
};