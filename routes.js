const express = require('express')
const routes = express.Router()


//adding routes
server.get("/", function(req, res) {
    return res.render("index")
})


module.exports = routes