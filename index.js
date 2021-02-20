var express = require('express')
var app = express()

app.get('/', function(req, red) {
    red.send('Hello You')
})

app.listen(3000, function() {
    console.log('example app with jenkins')
})