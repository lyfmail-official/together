const express = require("express")
const http = require("http")
const WebSocket = require("ws")

const app = express()

const server = http.createServer(app)

const wss = new WebSocket.Server({server})

let users = 0

wss.on("connection", ws=>{

users++

broadcast()

ws.on("close",()=>{

users--

broadcast()

})

})

function broadcast(){

wss.clients.forEach(client=>{

client.send(JSON.stringify({

count:users

}))

})

}

app.use(express.static("public"))

server.listen(3000,()=>{

console.log("Together running on port 3000")

})
