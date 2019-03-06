import { expect } from "chai";
import { ProductController } from '../controllers/product.controller';

const productController = new ProductController();

describe("'Super Sale', Products degrade in price twice as fast as normal Products. name 'Super Sale', sellIn is 10 and price is 10", () => {
    const product = productController.create('Super Sale', 10, 10);
    product.updatePrice();
  it("Name product equal to Super Sale", () => expect(product.name).equal("Super Sale"));
  it("Price equal to 8", () => expect(product.price).to.equal(8));
  it("sellIn equal to 9", () => expect(product.sellIn).to.equal(9));
});

describe("'Super Sale', Products degrade in price twice as fast as normal Products. name 'Super Sale', sellIn is -1 and price is 10", () => {
  const product = productController.create('Super Sale', -1, 10);
  product.updatePrice();
it("Name product equal to Super Sale", () => expect(product.name).equal("Super Sale"));
it("Price equal to 6", () => expect(product.price).to.equal(6));
it("sellIn equal to -2", () => expect(product.sellIn).to.equal(-2));
});