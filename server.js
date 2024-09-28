const express = require('express');
const cors = require('cors');
const port = 3001;

const app = express();

// Enable CORS for all origins
app.use(cors());

// Import the product data from database.ts
const { categories } = require('./database.js');

// Define the endpoints
app.get('/categories', (req, res) => {
    res.json(categories);
});

app.get('/products', (req, res) => {
    let products = [];
    categories.forEach((category)=>{
        products = [...products, ...category.products]
    })
    res.json(products);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
