// Manage Routing
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    const name = "DotPixels"
    const age = 17
    const address = "<h3>Bangkok</h3>"
    res.render('index', {name:name, age:age, address:address})
})

module.exports = router