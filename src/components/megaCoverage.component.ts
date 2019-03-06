import { Product } from './product.component';

export class MegaCoverage extends Product {

    constructor(name:string, sellIn:number, price:number){
        super(name, sellIn, price);
    }

    updatePrice(){
        if(this.price > 80){
            this.price == 80;
        }
    }

}