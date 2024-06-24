// 13. The Shopping Cart Totalizer:
//     You are working on an e-commerce website, and you need to calculate the total cost of items in the shopping cart. Implement a function named calculateTotal that takes an array of products with prices and quantities and returns the total cost.

function calculateTotal(products) {
    let price = 0;
    for (const product of products) {
        price += product.price * product.quantity;
    }
    return price;
}
const products = [
    { quantity: 1, name: 'Laptop', price: 1000 },
    { quantity: 2, name: 'Shoes', price: 50 },
    { quantity: 1, name: 'Watch', price: 200 },
    { quantity: 3, name: 'Phone', price: 800 },
    { quantity: 2, name: 'T-shirt', price: 20 }
];
let totalBill = calculateTotal(products);
console.log(totalBill);

