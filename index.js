const http = require('http')

const server = http.createServer(function (req, res) {
    res.end(`Here's your espresso.Pura Vida\n`)
})

server.listen(8080, function () {
    console.log(`listening on 8080`)
})

