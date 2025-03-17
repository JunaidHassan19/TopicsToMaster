/*
Classes (introduced in ES6) provide a more structured and cleaner way to work with objects compared to traditional constructor functions. They support features like static methods, encapsulation, inheritance, and more.
*/

class product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  displayProduct() {
    console.log(`Product: ${this.name}, Price: ${this.price}`);
  }

  calculateTotal(selesTax) {
    return this.price * selesTax;
  }
}

const selesTex = 1.18;

const product1 = new product('Book', 200);
const product2 = new product('Pen', 20);
const product3 = new product('Pencil', 10);

product1.displayProduct();
product2.displayProduct();
product3.displayProduct();

const total = product3.calculateTotal(selesTex);
console.log(`Total price (With tex): ${total.toFixed(2)}`);