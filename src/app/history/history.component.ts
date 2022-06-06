import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { History } from '../models/history';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
  providers: [MessageService]
})
export class HistoryComponent implements OnInit {
  public items: Array<History> = [];

  constructor(private ordersService: OrdersService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHistory();
  }

  private getHistory(){
    this.ordersService.getHistory().subscribe(
      data => {
        this.items = data;
      }, error => {
        this.messageService.add({severity:'error', summary:'Error', detail:'Something was wrong', life:2000});
      }
    );
  }
}
