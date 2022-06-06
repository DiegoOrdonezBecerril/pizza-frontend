export class OrderDetail {
    pizzaName: String;
    amount: number;

    constructor(_pizzaName: String, _amount: number){
        this.pizzaName = _pizzaName;
        this.amount = _amount;
    }
}
