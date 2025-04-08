const express = require('express');
const { cart } = require('./cart.js');

const app = express();
app.use(express.json());

let userCart = [];
let total = 0;

// Добавление товара в корзину по id
app.post('/cart/add/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = cart.find(item => item.id === productId);

    userCart.push(product);
    total += product.price;

    res.json({  
        added: product,
        total: total
    });
});

// Корзина и ее стоимость
app.get('/cart', (req, res) => {
    res.json({
        items: userCart,
        total: total
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log('привет');
});
