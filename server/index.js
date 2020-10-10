let express = require('express')
let axios = require('axios')

let app = express()

app.get('/', (req,res) => {
    res.send('appserver')
})

app.get('api/index', () => {
    res.json()
})

app.listen(8080, () => {
    console.log('sever start' , 'http://localhost:8080')
})