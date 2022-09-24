// Manage Routing
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {

    const products = [
        {name: "Notebook", price:25000, image:"images/products/product1.png"},
        {name: "Shirt", price:2000, image:"images/products/product2.png"},
        {name: "Headphone", price:4000, image:"images/products/product3.png"},
    ]
    res.render('index', {products:products})
})

module.exports = router