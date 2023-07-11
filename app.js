const express = require('express')
const path = require('path');
const app = express()
const port = 3000

const staticPath = path.join(__dirname,'/public')

app.use(express.static(staticPath));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})