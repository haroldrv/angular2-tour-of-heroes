import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { IHero } from './ihero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';



@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls: ['app/heroes.component.css'],
    directives: [HeroDetailComponent],
    providers: []
})

export class HeroesComponent implements OnInit {
    public title = 'Tour of Heroes';
    public selectedHero: IHero;
    public heroes: IHero[];

    //private variables start with _
    constructor(
        private _heroService: HeroService,
        private _router: Router) {

    }

    ngOnInit() {
        this.getHeroes();
    }

    onSelect(hero: IHero) {
        this.selectedHero = hero;
    };

    getHeroes() {
        this._heroService.getHeroes()
            .then(heroes => this.heroes = heroes);
    }

    gotoDetail() {
        this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
    }
};