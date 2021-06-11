import { Component, Injectable } from '@angular/core';

@Component({
  selector: 'show-details',
  templateUrl: './show-details.component.html'
})

@Injectable()
export class ShowDetailsComponent {
  title = 'Orders';
  orders: Order[] = [{
    orderId: 5,
    customerId: '0001A'
    },
    {
      orderId: 10,
      customerId: '0001B'
    }
  ];
}
export interface Order{
  orderId: number;
  customerId: string;
}
