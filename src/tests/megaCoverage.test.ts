import { expect } from "chai";
import { ProductController } from '../controllers/product.controller';

const productController = new ProductController();

describe("'Mega Coverage', being a legendary product, never has to be sold or decreases in price. name 'Mega Coverage', sellIn is 0 and price is 80", () => {
    const product = productController.create('Mega Coverage', 0, 80);
    product.updatePrice();
  it("Name product equal to Mega Coverage", () => expect(product.name).equal("Mega Coverage"));
  it("Price equal to 80", () => expect(product.price).to.equal(80));
  it("sellIn equal to 0", () => expect(product.sellIn).to.equal(0));
});