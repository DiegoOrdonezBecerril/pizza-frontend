import { OrderDetail } from "./order-detail";

export class Order {
    details: Array<OrderDetail>;

    constructor(_details: Array<OrderDetail>){
        this.details=_details;
    }
}
