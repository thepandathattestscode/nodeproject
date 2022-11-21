const PORT = process.env.PORT || 5000
const express = require('express')
let http = require('http');
let fs = require('fs');

const app = express()

app.get('', (req, res) => {
    res.sendFile(__dirname + "/home.html");
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + "/about.html");
})

app.listen(3000, () => {
    console.log('Server is up and running on PORT 3000.')
})
app.listen(PORT, 
    ()=>console.log('Server running at:' + PORT));