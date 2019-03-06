import { Product } from './product.component';

export class EspecialFullCoverage extends Product {

    constructor(name:string, sellIn:number, price:number){
        super(name, sellIn, price);
    }
    
    /* Aumenta de precio, si el tiempo es menor a 10 aumenta en 2 y si 
    es menor a 5 aumenta en 3. Si finaliza el periodo, el precio es 0. */

    updatePrice(){
        this.sellIn = this.sellIn - 1;
        if(this.price < 50){
            this.price = this.price + 1;
            if(this.sellIn < 11 && this.price < 50){
                this.price = this.price + 1;
                if(this.sellIn < 6 && this.price < 50){
                    this.price = this.price + 1;
                }
            }
        }
        if (this.sellIn < 0) {
            this.price = this.price - this.price;
        }
    }


}