import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../services/orders.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [MessageService]
})
export class HomeComponent implements OnInit {

  constructor(private ordersService: OrdersService, private messageService: MessageService) { }

  ngOnInit(): void {
  }

  add(_pizzaName: string) {
    this.messageService.add({severity:'success', summary:'One Pizza Added', detail:_pizzaName, life:500});
    this.ordersService.addPizza(_pizzaName);
  }
}
