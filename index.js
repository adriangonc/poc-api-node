const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors()) // Por então não serão addicionados dominios ao cors


let dbsimulation = [
    {'1': {Nome: "Adriano", Idade: "34"} },
    {'2': {Nome: "Sara", Idade: "35"} },
    {'3': {Nome: "Shadow", Idade: "12"} }

]

//get
app.get('/api/v1/', (req, res) => {
    return res.json(dbsimulation)
})

//Start do servidor
app.listen(21261, () => {
    console.log(`Express started at  http://localhost:21261`)
})
