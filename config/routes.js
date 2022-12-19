const express = require('express')
const routes = express.Router()
const axios = require('axios')

//import { getCep } from "../shipping/findCEP"

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

//Get cep
routes.get('/api/cep/:cep', (req, res) => {
    getAddress(req).then(data => {
        res.json(data)
    }).catch(error => console.log(error))
    
})

function getAddress(req) {
    
    const address = getViaCep(req.params.cep) //Cria uma promisso para a request do axios
    .catch(error => {
        console.log(error.response)
    })

    const addressData = address.then((response) => response.data) //Extrai dados da promisse
        
    console.log(addressData)
    return addressData
}

function getViaCep(cep){ //Retorna uma promisse
    return axios.get("https://viacep.com.br/ws/" + cep + "/json/")
}



module.exports = routes