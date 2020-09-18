const express = require('express')
const server = express()


//adding routes
server.get("/", function(req, res) {
    return res.send("Hi")
})











//starting server

server.listen(3000, function() {
    console.log("server is running")
})


