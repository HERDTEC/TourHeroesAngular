import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  constructor() { }

  ngOnInit() {
  }

}
