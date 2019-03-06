import { ProductController } from './src/controllers/product.controller';

const productController = new ProductController();

const productsAtDayZero = [
    productController.create('Medium Coverage', 10, 20),
    productController.create('Full Coverage', 2, 0),
    productController.create('Low Coverage', 5, 7),
    productController.create('Mega Coverage', 0, 80),
    productController.create('Mega Coverage', -1, 80),
    productController.create('Special Full Coverage', 15, 20),
    productController.create('Special Full Coverage', 10, 49),
    productController.create('Special Full Coverage', 5, 49),
    productController.create('Super Sale', 3, 6),
  ];

for (let i = 1; i <= 30; i += 1) {
    console.log(`---- Day ${ i } -----`);
    console.log('name, sellIn, price');
    productsAtDayZero.forEach((product) => {
        product.updatePrice();
        console.log(`${product.name}, ${product.sellIn}, ${product.price}`)
    });
}
