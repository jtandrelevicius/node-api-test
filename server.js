const http = require("http")

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify({
        data:'Helo World'
    }))

}).listen(3000, () => console.log("Server is running"))