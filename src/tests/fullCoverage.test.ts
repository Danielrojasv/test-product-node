import { expect } from "chai";
import { ProductController } from '../controllers/product.controller';

const productController = new ProductController();

describe("'Full Coverage' actually increases in price the older it gets. name 'Full Coverage', sellIn is 10 and price is 10", () => {
    const product = productController.create('Full Coverage', 10, 10);
    product.updatePrice();
  it("Name product equal to Full Coverage", () => expect(product.name).equal("Full Coverage"));
  it("Price equal to 11", () => expect(product.price).to.equal(11));
  it("sellIn equal to 9", () => expect(product.sellIn).to.equal(9));
});

describe("'Full Coverage' increases in 2 the price when sellIn < 0. name 'Full Coverage', sellIn is -1 and price is 10", () => {
    const product = productController.create('Full Coverage', -1, 10);
    product.updatePrice();
  it("Name product equal to Full Coverage", () => expect(product.name).equal("Full Coverage"));
  it("Price equal to 12", () => expect(product.price).to.equal(12));
  it("sellIn equal to -2", () => expect(product.sellIn).to.equal(-2));
});

describe("'Full Coverage' price not more to 50. name 'Full Coverage', sellIn is -1 and price is 49", () => {
    const product = productController.create('Full Coverage', -1, 49);
    product.updatePrice();
  it("Name product equal to Full Coverage", () => expect(product.name).equal("Full Coverage"));
  it("Price equal to 50", () => expect(product.price).to.equal(50));
  it("sellIn equal to -2", () => expect(product.sellIn).to.equal(-2));
});