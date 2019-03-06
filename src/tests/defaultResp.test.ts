import { expect } from "chai";
import { ProductController } from '../controllers/product.controller';

const productController = new ProductController();

describe("Default result whit name 'Default Product', sellIn is 10 and price is 10", () => {
    const product = productController.create('Default Product', 10, 10);
    product.updatePrice();
  it("Name product equal to Default Product", () => expect(product.name).equal("Default Product"));
  it("Price decrease in 1 and to be 9", () => expect(product.price).to.equal(9));
  it("sellIn decrease in 1 to be 9", () => expect(product.sellIn).to.equal(9));
});

describe("Price not less than 0 when name 'Default Product', sellIn is 0 and price is 0", () => {
    const product = productController.create('Default Product', 0, 0);
    product.updatePrice();
  it("Name product equal to Default Product", () => expect(product.name).equal("Default Product"));
  it("Price equal to 0", () => expect(product.price).to.equal(0));
  it("sellIn equal to -1", () => expect(product.sellIn).to.equal(-1));
});

describe("Once the sell by date has passed, price degrades twice as fast when name 'Default Product', sellIn is -1 and price is 2", () => {
    const product = productController.create('Default Product', -1, 2);
    product.updatePrice();
  it("Name product equal to Default Product", () => expect(product.name).equal("Default Product"));
  it("Price equal to 0", () => expect(product.price).to.equal(0));
  it("sellIn equal to -2", () => expect(product.sellIn).to.equal(-2));
});

