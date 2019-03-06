import { FullCoverage } from "../components/fullCoverage.component";
import { MegaCoverage } from "../components/megaCoverage.component";
import { EspecialFullCoverage } from "../components/especialFullCoverage.components";
import { SuperSale } from '../components/superSale.component';
import { Product } from '../components/product.component';

export class ProductController {

    constructor(){}

    create(name:string, sellIn:number, price:number){
        switch (name) {
            case "Full Coverage":
                return new FullCoverage(name, sellIn, price);
            case "Mega Coverage":
                return new MegaCoverage(name, sellIn, price);
            case "Special Full Coverage":
                return new EspecialFullCoverage(name, sellIn, price);
            case "Super Sale":
                return new SuperSale(name, sellIn, price);
            default:
                return new Product(name, sellIn, price);
        }
    }
}