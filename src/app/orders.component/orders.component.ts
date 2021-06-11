import { Component, Injectable } from '@angular/core';
import { HeroesService } from '../../app-ajs/heroes.service';
@Component({
    selector: 'orders',
    templateUrl: './orders.component.html'
})

@Injectable()
export class OrdersComponent {
    title = 'Orders';
    clickButton() {
        this.title += 'button was clicked';
    }
    constructor(heroes: HeroesService) {
        console.log('Service from AngularJS: ' + heroes.get());
    }
}
