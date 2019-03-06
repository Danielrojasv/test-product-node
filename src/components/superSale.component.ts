import { Product } from './product.component';

export class SuperSale extends Product {

    constructor(name:string, sellIn:number, price:number){
        super(name, sellIn, price);
    }

    /* Disminuye el doble que un producto normal */

    updatePrice(){
        this.sellIn = this.sellIn - 1;
        if(this.price > 0){
            this.price = this.price - 2;
            if (this.sellIn < 0) {
                this.price = this.price - 2;
            }
        }
    }
}