require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')

const {SERVER_PORT} = process.env

app.use(express.json())
app.use(express.static(__dirname + '/../build'))
app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname + '../build'))
})
app.listen(SERVER_PORT, ()=> console.log(`Server running on port ${SERVER_PORT}`))