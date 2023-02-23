const express = require("express")
const app = express();
const server  = require("http").createServer(app)
const webSocket = require("ws")
const port = 3000

// webSocket API 

app.get("/",(req,res)=>{

res.render("webSocketClient.ejs")

})
const wss = new webSocket.Server({server:server})

wss.on("connection",function connection(ws){
  console.log("new client connected")
  ws.send("welcome new client :Oo==[]::::::::::::::::>")

 ws.on("message",function incoming(message){
  console.log(`got message ${message}`)
})
})


server.listen(port,()=>{

console.log("server running")

})
