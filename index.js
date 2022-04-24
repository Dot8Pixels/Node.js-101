const express = require('express')
const router = require('./routes/myRouter.js')
const app = express()

app.use(router)

app.listen(8080, () => {
    console.log("Start server on port 8080")
})