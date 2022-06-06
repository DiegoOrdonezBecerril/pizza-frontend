import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { OrderDetail } from '../models/order-detail';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  providers: [MessageService]
})
export class CartComponent implements OnInit {
  public items: Array<OrderDetail> = [];
  public valid: boolean = false;
  constructor(private ordersService: OrdersService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.refresh();
  }

  add(_pizzaName: String) {
    this.ordersService.addPizza(_pizzaName);
    this.refresh();
  }

  remove(_pizzaName: String){
    this.ordersService.removePizza(_pizzaName);
    this.refresh();
  }

  delete(_pizzaName: String){
    this.ordersService.delete(_pizzaName);
    this.refresh();
  }

  checkout(){
    this.ordersService.checkout().subscribe(
      data => {
        this.messageService.add({severity:'success', summary:'Success', detail:'Data has been sent and received', life:2000});
        this.ordersService.clean();
        this.refresh();
      }, error => {
        this.messageService.add({severity:'error', summary:'Error', detail:'Something was wrong', life:2000});
      }
    );
    this.refresh();
  }

  refresh(){
    this.items = this.ordersService.getOrder();
    this.valid = this.ordersService.valid();
  }
}
