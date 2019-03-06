import { expect } from "chai";
import { ProductController } from '../controllers/product.controller';

const productController = new ProductController();

describe("'Special Full Coverage' actually increases in price the older it gets. name 'Special Full Coverage', sellIn is 20 and price is 10", () => {
    const product = productController.create('Special Full Coverage', 20, 10);
    product.updatePrice();
  it("Name product equal to Special Full Coverage", () => expect(product.name).equal("Special Full Coverage"));
  it("Price equal to 11", () => expect(product.price).to.equal(11));
  it("sellIn equal to 9", () => expect(product.sellIn).to.equal(19));
});

describe("'Special Full Coverage' price increases by 2 when there are 10 days or less. name 'Special Full Coverage', sellIn is 10 and price is 10", () => {
    const product = productController.create('Special Full Coverage', 10, 10);
    product.updatePrice();
  it("Name product equal to Special Full Coverage", () => expect(product.name).equal("Special Full Coverage"));
  it("Price equal to 12", () => expect(product.price).to.equal(12));
  it("sellIn equal to 9", () => expect(product.sellIn).to.equal(9));
});

describe("'Special Full Coverage' price increases by 3 when there are 5 days or less. name 'Special Full Coverage', sellIn is 5 and price is 10", () => {
  const product = productController.create('Special Full Coverage', 5, 10);
  product.updatePrice();
  it("Name product equal to Special Full Coverage", () => expect(product.name).equal("Special Full Coverage"));
  it("Price equal to 13", () => expect(product.price).to.equal(13));
  it("sellIn equal to 4", () => expect(product.sellIn).to.equal(4));
});

describe("Special Full Coverage' Price not greater than 50. name 'Special Full Coverage', sellIn is 10 and price is 49", () => {
  const product = productController.create('Special Full Coverage', 10, 49);
  product.updatePrice();
  it("Name product equal to Special Full Coverage", () => expect(product.name).equal("Special Full Coverage"));
  it("Price equal to 50", () => expect(product.price).to.equal(50));
  it("sellIn equal to 9", () => expect(product.sellIn).to.equal(9));
});

describe("'Special Full Coverage' price drops to 0 when no more days left. name 'Special Full Coverage', sellIn is 0 and price is 49", () => {
    const product = productController.create('Special Full Coverage', 0, 49);
    product.updatePrice();
  it("Name product equal to Special Full Coverage", () => expect(product.name).equal("Special Full Coverage"));
  it("Price equal to 0", () => expect(product.price).to.equal(0));
  it("sellIn equal to -1", () => expect(product.sellIn).to.equal(-1));
});