// Manage Routing
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {

    const products = ["Shirt", "Fan", "Headphone", "Keyboard", "Mouse", "Monitor"]
    res.render('index', {products:products})
})

module.exports = router