export class History {
    date: String;
    description: Array<String>;

    constructor(_date: String, _description: Array<String>){
        this.date = _date;
        this.description = _description;
    }
}
