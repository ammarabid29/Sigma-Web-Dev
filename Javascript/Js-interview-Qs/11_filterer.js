// 11. The Array Filterer:
//     You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion.

function filterProducts(products, criterion) {
    return products.filter(product => {
        return Object.keys(criterion).every(key => {
            if (Array.isArray(product[key])) {
                return product[key].include(criterion.key);
            }
            return product[key] == criterion[key];
        });
    });
}

const products = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 1000 },
    { id: 2, name: 'Shoes', category: 'Fashion', price: 50 },
    { id: 3, name: 'Watch', category: 'Accessories', price: 200 },
    { id: 4, name: 'Phone', category: 'Electronics', price: 800 },
    { id: 5, name: 'T-shirt', category: 'Fashion', price: 20 }
];

const criterion = { category: 'Electronics' };

const filteredProducts = filterProducts(products, criterion);
console.log(filteredProducts);


