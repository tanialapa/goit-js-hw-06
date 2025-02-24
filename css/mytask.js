const products = [
    {
        name: "Dyson",
        description: "is a beautifull things for your home",
        price: 10000,
        avaible: true,
        onSale: true
    },
    {
        name: "iPhone",
        description: "A powerful smartphone",
        price: 50000,
        available: false,
        onSale: false
    }
];

// console.log(products);
const productsConteinerEl = document.querySelector('.js-product');

const makeProductCard = ({ name, description, price }) => {
    const productEl = document.createElement('article');
    productEl.classList.add('product');

    const nameEl = document.createElement('h2')  
    nameEl.textContent = name;
    nameEl.classList.add('product__name');


    const descrEl = document.createElement('p');
    descrEl.textContent = description;
    descrEl.classList.add('product__descr');

    const priceEl = document.createElement('p')
    priceEl.textContent = price;
    priceEl.classList.add('product__price');


    productEl.append(nameEl, descrEl, priceEl);

    return productEl
    
}
const elements = products.map(makeProductCard);
console.log(elements);
productsConteinerEl.append(...elements)
