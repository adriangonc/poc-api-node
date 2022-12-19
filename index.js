const express = require('express')
const morgan = require('morgan') //Loga requests
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./config/routes')

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors()) // Por então não serão addicionados dominios ao cors
app.use(routes)


//Start do servidor
app.listen(21261, () => {
    console.log(`Express started at  http://localhost:21261`)
})
