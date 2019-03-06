export class Product {

    constructor(public name:string, public sellIn:number, public price:number) {
        this.name = name;
        this.sellIn = sellIn;
        this.price = price;
    }  
    
    /* Funcion que actualiza el precio, el precio no puede ser negativo, 
    si la fecha de caducidad finaliza el precio diminuye el doble */
    
    updatePrice(){
        this.sellIn = this.sellIn - 1;
        if(this.price > 0 && this.price < 50){
            this.price = this.price - 1;
            if (this.sellIn < 0) {
                this.price = this.price - 1;
            }
        }
    }
}