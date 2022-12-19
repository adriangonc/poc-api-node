const express = require('express')
const routes = express.Router()

let dbsimulation = [
    {'1': {Nome: "Adriano", Idade: "34"} },
    {'2': {Nome: "Sara", Idade: "35"} },
    {'3': {Nome: "Shadow", Idade: "12"} }

]

//get
routes.get('/api/test/', (req, res) => {
    return res.json(dbsimulation)
})
//post
routes.post('/api/test/', (req, res) => {
    const body = req.body

    if(!body){
        return res.status(400).end()
    }

    dbsimulation.push(body)
    return res.json(body)
})

//delete
routes.delete('/api/test/:id', (req, res) => {
    const id = req.params.id

    dbsimulation = dbsimulation.filter(item => {
        if(!item[id]){
            return item
        }
    })

    return res.send(dbsimulation)
})


module.exports = routes