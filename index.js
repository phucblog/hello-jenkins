var express = require('express')
var app = express()

app.get('/', function(req, red) {
    red.send('Hello You')
})

app.get('/about', function(req, red) {
    red.send('Hello about')
})

app.listen(3000, function() {
    console.log('example app with jenkins')
})