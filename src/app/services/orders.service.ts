import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { OrderDetail } from '../models/order-detail';
import { History } from '../models/history';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private url = "http://localhost:8080/api/order";
  private order = new Order(new Array<OrderDetail>());

  constructor(private httpClient: HttpClient) { }

  public checkout(): Observable<void>{
    return this.httpClient.post<void>(this.url + '/', this.order);
  }

  public getHistory(): Observable<Array<History>>{
    return this.httpClient.get<Array<History>>(this.url + '/history');
  }

  public addPizza(_pizzaName: String): void{
    if(this.order.details.find(element => element.pizzaName === _pizzaName)){
      this.order.details.forEach(element => {
        if(element.pizzaName === _pizzaName){
          element.amount = element.amount+1;
        }
      });
    } else {
      this.order.details.push(new OrderDetail(_pizzaName, 1));
    }
  }

  public removePizza(_pizzaName: String): void{
    if(this.order.details.find(element => element.pizzaName === _pizzaName)){
      this.order.details.forEach(element => {
        if(element.pizzaName === _pizzaName && element.amount > 0){
          element.amount = element.amount-1;
        }
      });
    }
  }

  public delete(_pizzaName: String): void{
    this.order.details = this.order.details.filter(element => element.pizzaName !== _pizzaName);
  }

  public clean(): void{
    this.order.details = new Array<OrderDetail>();
  }

  public valid(): boolean{
    return this.order.details.length > 0;
  }

  public getOrder(): Array<OrderDetail>{
    return this.order.details;
  }
}
