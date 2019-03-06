import { Product } from './product.component';

export class FullCoverage extends Product {

    constructor(name:string, sellIn:number, price:number){
        super(name, sellIn, price);
    }

    /* Aumenta el precio y no disminuye como un productos normal, 
    si la fecha de caducidad finaliza tambien aumenta el doble pero
    hasta llegar a 50 */

    updatePrice(){
        this.sellIn = this.sellIn - 1;
        if(this.price < 50){
            this.price = this.price + 1;
            if (this.sellIn < 0 && this.price < 50) {
                this.price = this.price + 1;
            }
        }
    }
}